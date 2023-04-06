from datetime import datetime, timedelta
korea_timezone = timedelta(hours=9)
now = datetime.utcnow() + korea_timezone
start_date_tmp = now - timedelta(days=14)
tmp_date = start_date_tmp

def timeline(i,j):
    print(i.strftime('%Y-%m-%d'), j.strftime('%Y-%m-%d'))
for i in range(2, 16):
    j_date = tmp_date
    for j in range(i - 1, 0, -1):
        j_date -= timedelta(days=1)
        timeline(tmp_date,j_date)
    tmp_date += timedelta(days=1)

