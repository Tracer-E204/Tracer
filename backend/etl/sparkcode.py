from pyspark.sql import SparkSession
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.cluster import DBSCAN
import numpy as np
import pandas as pd
from pyspark.sql.types import ArrayType
from pyspark.sql.types import StringType, DoubleType
from pyspark.sql.types import Row
from pyspark.sql.functions import udf, sum
import google.protobuf.text_format as tf
from pyspark.ml.feature import HashingTF, IDF
from bareunpy import Tagger
import sys, json
import os
from collections import Counter
from pyspark.sql.types import StructType, StructField, DateType, StringType

os.environ['PYSPARK_SUBMIT_ARGS'] = '--packages mysql:mysql-connector-java:5.1.49 pyspark-shell'

API_KEY="koba-M3BTXVY-T23UV2A-QB4PPQA-J56PE4A"

spark = SparkSession.builder.appName("CSVtoDF").getOrCreate()

app = {
    'name': 'mysql',
    'user': 'root',
    'password': 'tracer204',
    'host': 'j8e204.p.ssafy.io',
    'dbconn': 'timeline',
    'port': '3306'
}
url = "jdbc:{0}://{1}:{2}/{3}?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC".format(app['name'], app['host'], app['port'], app['dbconn'])
table = "cluster"
properties = {
    "user": app['user'],
    "password": app['password'],
    "driver": "com.mysql.cj.jdbc.Driver"
}

def tokenize(title,content):
    tagger = Tagger(API_KEY, 'j8e204.p.ssafy.io', 5757)
    text = title*3 + content
    res = tagger.tag(text)
    ps = res.pos() 
    rs = ''
    for a, b in ps:
        if b[:2] == 'NN' and b != 'NNB' and len(a) > 1 and not a.isnumeric() and a != '기자': rs+= a+' '
    return rs
tokenize_udf = udf(tokenize, StringType())


month = 3
start = 1
end = 3
now = []
for i in range(start, end + 1):
    month = str(month).zfill(2)
    day = str(i).zfill(2)
    now.append(f"2023-{month}-{day}")

for today in now:
    filename = f"/home/j8e204/S08P22E204/backend/etl/spark/news/{today}.json"
    with open(filename, "r") as f:
        data = json.load(f)
    dfd = spark.createDataFrame(data)
    dfd = dfd.withColumn("keyword", tokenize_udf("news_title", "news_content"))
    dfd = dfd.dropna(subset=['keyword'])
    dfd.select('keyword','news_id').show()
    
    df = dfd.select('keyword','news_title','news_id').toPandas()
    
    vect = CountVectorizer()
    vect.fit(df['keyword'])
    document_term_matrix = vect.transform(df['keyword'])

    tf = pd.DataFrame(document_term_matrix.toarray(), columns=vect.get_feature_names_out())
    
    D = len(tf)
    ddf = tf.astype(bool).sum(axis=0)
    idf = np.log((D+1) / (ddf+1)) + 1
    def ky(x):
        ls = []
        for t in x.sort_values(ascending=False)[:11].index.values:
            if t not in ['기자', 'okjebo', '제보', '카톡']: ls.append(t)
        return ls[:10]
    df['best_keyword'] = tf.apply(lambda x: ky(x), axis=1)
    
    tfidf = tf * idf
    tfidf = tfidf / np.linalg.norm(tfidf, axis=1, keepdims=True)
    tf_notna = tfidf.dropna()
    model = DBSCAN(eps=1.1,min_samples=20)
    model.fit(tf_notna)
    tf_notna['cluster'] = model.labels_
    
    for i in range(max(tf_notna['cluster'])):
        print(f'i = {i}')
        x = tf_notna[tf_notna['cluster'] == i].index
        for j in x: print(f'{df.iloc[j]["news_id"]}  {df.iloc[j]["news_title"]}')
    kw, dk, nw = [], {}, []
    last_cluster_id = None
    for i in range(max(tf_notna['cluster'])+1):
        vect = CountVectorizer()
        document_term_matrix = vect.fit_transform(df['keyword'][tf_notna[tf_notna['cluster'] == i].index])
        tf = pd.DataFrame(document_term_matrix.toarray(), columns=vect.get_feature_names_out())  
        D = len(tf)
        ddf = tf.astype(bool).sum(axis=0)
        sdf = ddf.sort_values(ascending=False)
        stf = tf.sum(axis=0).sort_values(ascending=False)
        wd = dict()
        for k in sdf.index.values: wd[k] = [sdf[k], stf[k]]
        group_keyword = sorted(wd.items(), key=lambda x: (-x[1][0], -x[1][1]))[:11]
        c = 1
        kk = []
        for a, b in group_keyword:
            if len(kk) == 10: break
            if a == '기자': continue
            if c: dk[a] = b[0]; c = 0
            kk.append(a)
        kw.append(kk)
        nw.append(list(df.loc[tf_notna[tf_notna['cluster'] == i].index, 'news_id']))
########################################## cluster
        print("cluster","#"*100)
        aa = [(today, kk[0])]
        columns = ["date", "top_keyword"]
        aad = spark.createDataFrame(aa, columns)
        print("aad",aad)
        aad.write.jdbc(url=url, table="cluster", mode="append", properties=properties)
########################################## cluster_news
        print("cluster_news","#"*100)
        dddd = spark.read.jdbc(url=url, table="cluster", properties=properties).select("cluster_id")
        last_cluster_id = 1
        if not dddd.isEmpty():
            last_cluster_id = dddd.orderBy('cluster_id', ascending=False).limit(1).collect()[0]['cluster_id']
        l = last_cluster_id
        bb_list = []
        for k in list(df.loc[tf_notna[tf_notna['cluster'] == i].index, 'news_id']):
            bb_list.append((int(l+i), int(k)))
        schema = ["cluster_id", "news_id"]
        bbd = spark.createDataFrame(bb_list, schema)
        print("bbd",bbd)
        bbd.write.jdbc(url=url, table="cluster_news", mode="append", properties=properties)
##########################################
    # kw 군집키워드의 군집
    
    print(kw)
    gdf = pd.DataFrame({'group_keyword': kw, 'news_index': nw})
    daily_keyword = pd.DataFrame(sorted(dk.items(), key=lambda x: -x[1])[:11], columns = ['keyword', 'count'])
    print("#"*100)
    print("daily_keyword",daily_keyword)
