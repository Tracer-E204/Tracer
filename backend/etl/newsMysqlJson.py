from pyspark.sql import SparkSession
import json
import os

spark = SparkSession.builder.appName("MySQLtoCSV").getOrCreate()

app = {
    'name': 'mysql',
    'user': 'root',
    'password': 'tracer204',
    'host': 'j8e204.p.ssafy.io',
    'dbconn': 'news',
    'port': '3306'
}

url = "jdbc:{0}://{1}:{2}/{3}?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC".format(app['name'], app['host'], app['port'], app['dbconn'])
table = "news"
properties = {
    "user": app['user'],
    "password": app['password'],
    "driver": "com.mysql.cj.jdbc.Driver"
}
month = 4
start = 5
end = 6
now = []
for i in range(start, end + 1):
    month = str(month).zfill(2)
    day = str(i).zfill(2)
    now.append(f"2023-{month}-{day}")

for today in now:
    df = spark.read.jdbc(url=url, table=table, properties=properties).select("news_id","news_title","news_content").where(f"news_date = to_date('{today}')")
    data = df.toJSON().map(lambda x: json.loads(x)).collect()
    filename = f"news/{today}.json"
    if os.path.exists(filename):
        os.remove(filename)
    with open(filename, "w") as f:
        json.dump(data, f)
    