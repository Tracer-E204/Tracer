from sqlalchemy import INT, BIGINT, DATE,  VARCHAR, Column, TEXT, TIME
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Cluster(Base): #(DB2)
    __tablename__ = 'cluster'
    cluster_id = Column(BIGINT, nullable=False, autoincrement=True, primary_key=True)
    date = Column(DATE)
    top_keyword = Column(VARCHAR)

class Daily(Base): #(DB)
    __tablename__ = 'daily'
    daily_id = Column(BIGINT, nullable=False, autoincrement=True, primary_key=True)
    count = Column(INT)
    daily_date = Column(DATE)
    keyword_id = Column(BIGINT)

class Keyword(Base): #(DB)
    __tablename__ = 'keyword'
    keyword_id = Column(BIGINT, nullable=False, autoincrement=True, primary_key=True)
    keyword = Column(VARCHAR)
    
class NewsKeyword(Base): #(DB1)
    __tablename__ = 'news_keyword'
    keyword_id = Column(BIGINT, nullable=False, primary_key=True)
    news_id = Column(BIGINT, nullable=False, primary_key=True)

class ClusterNews(Base): #(DB2)
    __tablename__ = 'cluster_news'
    news_id = Column(BIGINT, nullable=False, primary_key=True)
    cluster_id = Column(BIGINT, nullable=False, primary_key=True)  
    
class News(Base):
    __tablename__ = 'news'
    news_id = Column(BIGINT, nullable=False, autoincrement=True, primary_key=True)
    news_content = Column(TEXT)
    news_title = Column(VARCHAR)
    news_source = Column(TEXT)
    news_date = Column(DATE)
    news_time = Column(TIME)
    news_press = Column(VARCHAR)
    news_reporter = Column(VARCHAR)
    news_type = Column(INT)
    news_thumbnail = Column(VARCHAR)  

# DB - KEYWORD
# DB1 - NEWS
# DB2 - TIMELINE