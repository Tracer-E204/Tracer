from sqlalchemy import *
from sqlalchemy.orm import sessionmaker

app = {
    'name': 'mysql',
    'user': 'root',
    'password': 'tracer204',
    'host': 'j8e204.p.ssafy.io',
    'dbconn': 'keyword',
    'port': '3306',
}

conn_string = f'{app["name"]}://{app["user"]}:{app["password"]}@{app["host"]}:{app["port"]}/{app["dbconn"]}'

class engineconn:
    def __init__(self):
        self.engine = create_engine(conn_string, pool_recycle = 500)
    def sessionmaker(self):
        Session = sessionmaker(bind=self.engine)
        session = Session()
        return session
    def connection(self):
        conn = self.engine.connect()
        return conn