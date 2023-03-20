from sqlalchemy import Column, TEXT, INT, BIGINT, DATE, VARCHAR, TIME
from sqlalchemy.orm import declarative_base

Base = declarative_base()

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
