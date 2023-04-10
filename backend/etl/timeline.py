import pandas as pd
from timeline_db import engineconn3
from sqlalchemy import Column, BIGINT, DATE, VARCHAR
from sqlalchemy.orm import declarative_base
from datetime import datetime, timedelta
#####################################################################################
#                               데이터 베이스 설정                                   #
#####################################################################################
Base = declarative_base()
#ORM 매핑 객체 생성
class timeline(Base):
    __tablename__="timeline"
    timeline_id = Column(BIGINT,nullable=False, autoincrement=True, primary_key=True)
    top_keyword = Column(VARCHAR)
    resent_date = Column(DATE)
    
class timeline_cluster(Base):
    __tablename__="timeline_cluster"
    timeline_id = Column(BIGINT,nullable=False, primary_key=True)
    cluster_id = Column(BIGINT,nullable=False, primary_key=True)
# 데이터 베이스 세션 생성
engine3 = engineconn3()
session3 = engine3.sessionmaker()
#####################################################################################
#                               타임라인 관련 코드                                   #
#####################################################################################
# 15일간의 군집화 된 데이터 Merge
def merge(i):
    global df
    nm = '/home/j8e204/S08P22E204/backend/etl/spark/gdf/' + i.strftime('%Y-%m-%d') + '.csv'
    dff = pd.read_csv(nm, encoding='utf-8', index_col = 0)
    dff['date'] = i.strftime('%Y-%m-%d')
    ndf = pd.concat([df, dff])
    return ndf

# 15일 전 데이터 읽기
korea_timezone = timedelta(hours=9)
now = datetime.utcnow() + korea_timezone
start_date_tmp = now - timedelta(days=15)
start_date = start_date_tmp.strftime('%Y-%m-%d')

df = pd.read_csv(f'/home/j8e204/S08P22E204/backend/etl/spark/gdf/{start_date}.csv', encoding='utf-8', index_col = 0)
df['date'] = start_date

# merge함수 수행
tmp_date = start_date
for i in range(2, 16):
    tmp_date += timedelta(days=1)
    df = merge(tmp_date)

# 타임라인 데이터 프레임 정의
timeline_df = pd.DataFrame(columns=['timeline_keyword', 'recent_date', 'cluster_id'])
# 타임라인 그룹 데이터 프레임 정의
timeline_group_df = pd.DataFrame(columns=['timeline_index', 'group_index'])
# merge된 데이터 프레임의 index재설정
df = df.reset_index(drop = True)
df['idx'] = df.index

# Set 만들기
def make_set(txt):
    return set(txt[1:-1].replace("'", '').split(', '))
# List 만들기
def make_list(txt):
    return list(txt[1:-1].replace("'", '').split(', '))
# len값 구하기
def get_len(txt):
    return len(ll(txt))
# Set, Map 생성 후 df의 컬럼에 삽입
for i in range(1, 16):
    df['set'] = df['group_keyword'].apply(make_set)
    df['list'] = df['group_keyword'].apply(make_list)

# 타임라인 생성 및 분류 함수
def make_timeline(i, j):
    global timeline_df, timeline_group_df, df
    # 각각 임시 데이터 프레임 생성 후 date 컬럼 추가 
    df1, df2 = df[df['date'] == i.strftime('%Y-%m-%d')], df[df['date'] == j.strftime('%Y-%m-%d')]
    # 인덱스 재정의 =
    df1, df2 = df1.reset_index(drop=True), df2.reset_index(drop=True)
    df1['size'] = df1['news_index'].apply(get_len)
    df1 = df1.sort_values('size', ascending=False, ignore_index=True)
    df2['size'] = df2['news_index'].apply(get_len)
    df2 = df2.sort_values('size', ascending=False, ignore_index=True)
    for i in df1.index:
        if {'카톡', 'okjebo'} & df1.loc[i, 'set']: continue
        for j in df2.index:
            if {'카톡', 'okjebo'} & df2.loc[j, 'set']: continue
            df1_cluster_id, df2_cluster_id = df1.loc[i, 'cluster_id'], df2.loc[j, 'cluster_id']
            # 타임라인 존재 확인
            if df2_cluster_id in timeline_group_df['group_index'].values:
                exist_timeline = timeline_group_df[timeline_group_df['group_index'] == df2_cluster_id]['timeline_index']
                for t in exist_timeline:
                    if timeline_df.loc[t, 'recent_date'] == df1.loc[i, 'date']: continue
                    # 상위 3개 키워드에 타임라인 키워드가 있으면 추가
                    if len(set(timeline_df.loc[t, 'timeline_keyword'].split()) & set(df1.loc[i, 'list'][:3])) == 2:
                        timeline_group_df = pd.concat([timeline_group_df, pd.DataFrame({'timeline_index': [t], 'group_index': [df1_cluster_id]})], ignore_index=True)
                        timeline_df.loc[t, 'recent_date'] = df1.loc[i, 'date']
                        timeline_keywords = set(timeline_df.loc[t, 'timeline_keyword'].split())
                        
            else:
                li, lj = df1.loc[i, 'list'][:3], df2.loc[j, 'list'][:3]
                ss = set(li) & set(lj)
                if len(ss) > 1:
                    kl = []
                    for s in ss: kl.append((s, li.index(s) + lj.index(s)))
                    kl.sort(key=lambda x: x[1])
                    tl = pd.concat([tl, pd.DataFrame({'timeline_keyword': f'{kl[0][0]} {kl[1][0]}', 'recent_date': [df1.loc[i, 'date']]})], ignore_index=True)
                    ti = 0 if timeline_df.empty else max(timeline_df.index)
                    timeline_group_df = pd.concat([timeline_group_df, pd.DataFrame({'timeline_index': [ti, ti], 'group_index': [df2_cluster_id, df1_cluster_id]})], ignore_index=True)
                    timeline_keywords = set((kl[0][0], kl[0][1]))
# 14일 전부터 전일까지 바깥 반복문에서 반복
# 바깥 반복문의 하루전 날짜부터 14일 전까지 반복
start_date_tmp = now - timedelta(days=14)
tmp_date = start_date_tmp
for i in range(2, 16):
    j_date = tmp_date
    for j in range(i - 1, 0, -1):
        j_date -= timedelta(days=1)
        make_timeline(tmp_date, j_date)
    tmp_date += timedelta(days=1)

#군집의 중복을 제거하기 위한 Set
word_set = set()

#####################################################################################
#                                   DB INSERT                                       #
#####################################################################################
try:
    for i in timeline_df.index:
        distinct_cluster_id_set = set()
        timeline_obj = timeline(
            top_keyword = timeline_df.loc[i, 'timeline_keyword'],
            resent_date = timeline_df.loc[i, 'recent_date']
        )
        session3.add(timeline_obj)
        session3.commit()
        for j in timeline_group_df.index:
            if timeline_group_df.loc[j, 'timeline_index'] == i:
                distinct_cluster_id_set.add(timeline_group_df.loc[j, 'group_index'])
        for x in distinct_cluster_id_set:
            timeline_cluster_obj = timeline_cluster(
                timeline_id = timeline_obj.timeline_id,
                cluster_id = x
            )
            session3.add(timeline_cluster_obj)
        session3.commit()
except Exception as e:
     print(e)
     session3.rollback()
finally:
    session3.close()
