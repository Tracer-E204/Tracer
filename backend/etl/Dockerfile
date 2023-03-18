FROM python:3.11.1

RUN ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
RUN echo Asia/Seoul > /etc/timezone

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt
RUN pip install uvicorn

CMD uvicorn --host=0.0.0.0 --port 8000 main:app
