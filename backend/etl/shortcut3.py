import time
from pyspark.sql import SparkSession
from pyspark.sql.types import Row, ArrayType, StringType
from pyspark.sql.functions import udf, when, size, col
import google.protobuf.text_format as tf
from sklearn.feature_extraction.text import CountVectorizer
import sys
import os
from summa.summarizer import _clean_text_by_sentences, summarize
import json

start = time.time()
os.environ['PYSPARK_SUBMIT_ARGS'] = '--packages mysql:mysql-connector-java:5.1.49 pyspark-shell'


spark = SparkSession.builder.config("spark.jars", "/home/j8e204/mysql-connector-j-8.0.32/mysql-connector-j-8.0.32.jar").appName("ShowcutToMySQL").getOrCreate()

app = {
    'name': 'mysql',
    'user': 'root',
    'password': 'tracer204',
    'host': 'j8e204.p.ssafy.io',
    'dbconn': 'news',
    'port': '3306'
}

url = "jdbc:{0}://{1}:{2}/{3}?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC".format(app['name'], app['host'], app['port'], app['dbconn'])

properties = {
    "user": app['user'],
    "password": app['password'],
    "driver": "com.mysql.cj.jdbc.Driver"
}


def summ3(text):
    if not text:
        return []
    short = summarize(text, words=120).rstrip()
    if not short:
        return []
    sentences = short.split('\n')
    new_sentences = []
    for sentence in sentences:
        new_sentences.extend(sentence.split('. '))
    final_sentences = []
    for sentence in new_sentences:
        if not sentence.strip():
            continue
        final_sentences.append(sentence)
    return final_sentences

month = 4
start = 5
end = 6
now = []
for i in range(start, end + 1):
    month = str(month).zfill(2)
    day = str(i).zfill(2)
    now.append(f"2023-{month}-{day}")

tokenize_udf = udf(summ3, ArrayType(StringType()))

for today in now:
    filename = f"news/{today}.json"
    hdfs_file_path = f"{filename}"
    with open(hdfs_file_path, "r") as f:
        data = json.load(f)
    df = spark.createDataFrame(data)
    df2 = df.select("news_id", "news_content") \
            .withColumn("summaries", tokenize_udf("news_content")) \
            .withColumn("content_1st", when(size("summaries") > 0, col("summaries")[0]).otherwise(None)) \
            .withColumn("content_2nd", when(size("summaries") > 1, col("summaries")[1]).otherwise(None)) \
            .withColumn("content_3rd", when(size("summaries") > 2, col("summaries")[2]).otherwise(None)) \
            .select("news_id", "content_1st", "content_2nd", "content_3rd")
            
    df2.write.jdbc(url=url, table="shortcut", mode="append", properties=properties)
   
end = time.time()

print("all time : " ,f"{end - start:.5f} sec")