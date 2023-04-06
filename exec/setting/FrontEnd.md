# frontEnd 이미지

### 1. Dockerfile 생성

```bash
FROM ubuntu:20.04

ARG NGINX_FILE=myapp.conf
#ARG EXEC_FILE=../../common/deploy_start.sh

RUN apt-get update
RUN apt-get -y install nginx
RUN rm /etc/nginx/sites-available/default
RUN rm /etc/nginx/sites-enabled/default
COPY ${NGINX_FILE} /etc/nginx/sites-available
RUN ln -s /etc/nginx/sites-available/myapp.conf /etc/nginx/sites-enabled/myapp.conf
# RUN /etc/init.d/nginx start

# COPY ${EXEC_FILE} ./
RUN echo 'service nginx start' >> /home/run.sh
ENTRYPOINT sh /home/run.sh && sh
```

### 2. myapp.conf

```bash
server {
  listen 3000;
  location / {
    root   /home/frontend;
    index  index.html index.htm;
    try_files $uri $uri/ /index.html;
  }

  location /api {
    proxy_pass http://200.0.0.60:8001;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

### 3. 도커 이미지 생성

```bash
sudo docker build --no-cache -t frontend:v1 .
```

- —no-cache 명령어는 이미지 레이어를 무시하고 전원을 실행한다.

![Untitled](FrontEnd/Untitled.png)

![Untitled](FrontEnd/Untitled1.png)

- 생성완료
