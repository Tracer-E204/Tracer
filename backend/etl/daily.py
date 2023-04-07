from sqlalchemy import Column, INT, BIGINT, DATE, BIGINT
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class News(Base):
    __tablename__ = 'daily'
    daily_id = Column(BIGINT, nullable=False, autoincrement=True, primary_key=True)
    count = Column(INT)
    daily_date = Column(DATE)
    keyword_id = Column(BIGINT)