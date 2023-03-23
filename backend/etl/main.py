from fastapi import FastAPI
import json
import requests
from bs4 import BeautifulSoup as bs
from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime, timedelta
import os
from config.db import engineconn
from db_class import News
from pytz import timezone
app = FastAPI()

tz = timezone("Asia/Seoul")
engine = engineconn()
session = engine.sessionmaker()

# 뉴스 디테일 크롤러
def getContent(str,press):
    result = []
    nextUrl = str
    response = requests.get(nextUrl)
    status_code = response.status_code
    ret_content = ''
    if status_code == 200:
        soup = bs(response.text, 'html.parser')
        html = soup.select('div.article_view')
        reporter = soup.find('span', {'class': 'txt_info'}).get_text()
        con = soup.select('div.article_view p')
        if press == 'KBS':
            if soup.find_all('figure'):
                tags = soup.find_all('figure')
                tag_to_remove = tags[-1]
                tag_to_remove.extract()
        for p in con:
            ret_content += p.text
        result.insert(0, html[0])
        result.insert(1, ret_content)
        if reporter[-1].isdigit():
            result.insert(2, "")
        else:
            result.insert(2, reporter)
    else:
        return
    return result
# 매일 수행하는 뉴스 리스트 크롤러
def root():
    headers = {
    "User-Agent":
    "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
    }
    init_date = datetime.today()
    date = init_date.strftime("%Y%m%d")
    url = 'https://news.daum.net/breakingnews/{}?regDate={}&page={}'
    hmap = ['society','economic','foreign','digital']
    for t,subject in enumerate(hmap, start=0):
        i = 0
        while True:
            i+=1
            print(i)
            res = requests.get(url.format(subject,date,i), headers=headers)
            if res.status_code == 200:
                html = bs(res.text, 'html.parser')
                cont = html.find('ul', {'class': 'list_news2 list_allnews'})
                try:
                    items = cont.findAll('li')
                except Exception as e:
                    break
                else:
                    for item in items:
                        tit = item.find('strong',{'class':'tit_thumb'}).a
                        tit_press = item.find(('span',{'class':'info_news'})).get_text().split(' · ')
                        thumbnail = ''
                        if item.find('img'):
                            thumbnail = item.find('img')['src']
                        content = getContent(tit['href'])
                        # 디비 뉴스 테이블에 저장될 것들
                        news = News(
                            news_title=tit.get_text(),
                            news_source=str(content[0]),
                            news_content=str(content[1]),
                            news_press=tit_press[0],
                            news_dt=str(datetime.today().strftime('%Y-%m-%d')),
                            news_time=tit_press[1],
                            news_reporter=str(content[2])[0:3],
                            news_type=content[3],
                            news_thumbnail=str(thumbnail)
                        )
                        # session.add(news)
                        # session.commit()
                        # hdfs 파일에 저장될 것들
                        # hdfs.append({
                        #     'news_id':news.news_id,
                        #     'content': str(content[1]),
                        # })
    # dir = os.path.dirname(os.path.abspath(__file__))
    # file_path = os.path.join(dir,'dailyBatch.json')
    # with open(file_path, 'w', encoding='utf-8') as f:
    #     for item in hdfs:
    #         json.dump(item, f, ensure_ascii=False)
    #         f.write('\n')

# 날짜 지정해서 기존 데이터 수집하기
def dump():
    headers = {
        "User-Agent":
            "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36"
    }
    init_date = datetime.today()
    date = init_date.strftime("%Y%m%d")

    url = 'https://news.daum.net/breakingnews/{}?regDate={}&page={}'

    result = []
    hmap = ['society', 'economic', 'foreign', 'digital', 'culture']
    start = "2023-01-17"
    last = "2023-03-23"
    start_date = datetime.strptime(start, "%Y-%m-%d")
    last_date = datetime.strptime(last, "%Y-%m-%d")
    while start_date <= last_date:
        dates = start_date.strftime("%Y%m%d")
        for t,subject in enumerate(hmap,start=0):
            i = 0
            end = 0
            while True:
                i += 1
                print(i)
                res = requests.get(url.format(subject, dates, i), headers=headers)
                if res.status_code == 200:
                    html = bs(res.text, 'html.parser')
                    cont = html.find('ul', {'class': 'list_news2 list_allnews'})
                    curPage = int(str(html.find('em', {'class': 'num_page'}).get_text())[7:])
                    if (curPage == end):
                        break
                    else:
                        end = curPage
                    try:
                        items = cont.findAll('li')
                    except Exception as e:
                        break;
                    else:
                        for item in items:
                            tit = item.find('strong', {'class': 'tit_thumb'}).a
                            tit_press = item.find(('span', {'class': 'info_news'})).get_text().split(' · ')
                            thumbnail = ''
                            if item.find('img'):
                                thumbnail = item.find('img')['src']
                            content = getContent(tit['href'],tit_press[0])
                            news = News(
                                news_title=tit.get_text(),
                                news_source=str(content[0]),
                                news_content=str(content[1]),
                                news_press=tit_press[0],
                                news_date=str(start_date.strftime('%Y-%m-%d')),
                                news_time=tit_press[1],
                                news_reporter=str(content[2]),
                                news_type=t,
                                news_thumbnail=str(thumbnail)
                            )
                            session.add(news)
                            session.commit()
        start_date += timedelta(days=1)
    # with open('dump.json', 'w', encoding='utf-8') as f:
    #     for item in result:
    #         json.dump(item, f, ensure_ascii=False)
    #         f.write('\n')
#배치 스케줄러
scheduler = BackgroundScheduler(timezone=tz)
scheduler.start()

# 매일 0시 0분에 배치 처리 작업 예약
# scheduler.add_job(root, "cron", hour=15, minute=48)
# scheduler.add_job(dump, "cron", hour=13, minute=22)
dump()