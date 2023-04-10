# dev_tool docker compose 생성

### 1. docker-compose.yml 생성

```bash
version: "3"

services:
  jenkins:
    container_name: jenkins
    image: jenkins/jenkins:latest
    stdin_open: true
    tty: true
    ports:
      - 9090:8080
      - 50000:50000
    restart: always
    volumes:
      - /volumes/docker/jenkins:/var/jenkins_home
      - /volumes/docker/frontend:/var/jenkins_home/build/frontend
      - /volumes/docker/backend_news:/var/jenkins_home/build/backend_news
      - /volumes/docker/backend_keyword:/var/jenkins_home/build/backend_keyword
      - /volumes/docker/backend_timeline:/var/jenkins_home/build/backend_timeline
      - /volumes/docker/backend_python:/var/jenkins_home/build/backend_python
      - /volumes/docker/deploy_frontend:/var/jenkins_home/build/deploy_frontend
      - /volumes/docker/deploy_backend_news:/var/jenkins_home/build/deploy_backend_news
      - /volumes/docker/deploy_backend_keyword:/var/jenkins_home/build/deploy_backend_keyword
      - /volumes/docker/deploy_backend_timeline:/var/jenkins_home/build/deploy_backend_timeline
      - /volumes/docker/eureka:/var/jenkins_home/build/eureka
      - /volumes/docker/gateway:/var/jenkins_home/build/gateway
      - /volumes/docker/deploy_eureka:/var/jenkins_home/build/deploy_eureka
      - /volumes/docker/deploy_gateway:/var/jenkins_home/build/deploy_gateway
    networks:
      dev_tool:
        ipv4_address: 100.0.0.10

# 첫 실행때는 주석해두기
#  backend_python:
#    container_name: backend_python
#    image: python:v1
#    stdin_open: true
#    tty: true
#    ports:
#      - 8090:8080
#    restart: always
#    volumes:
#      - /volumes/docker/backend_python:/home/backend
#    networks:
#      dev_tool:
#        ipv4_address: 100.0.0.20

  portainer:
    container_name: portainer
    image: portainer/portainer:latest
    ports:
      - 9000:9000
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    restart: always
    networks:
      dev_tool:
        ipv4_address: 100.0.0.30

  mysql:
    container_name: mysql
    image: mysql:latest
    ports:
      - 3306:3306
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=tracer204
    volumes:
      - /volumes/docker/mysql_news:/var/lib/mysql
    networks:
      dev_tool:
        ipv4_address: 100.0.0.40

  redis:
    container_name: redis
    image: redis:7.0.10
    ports:
      - 6379:6379
    restart: always
    command: redis-server /usr/local/conf/redis.conf
    volumes:
      - /volumes/docker/redis:/var:/data
      - ./conf/redis.conf:/usr/local/conf/redis.conf
    networks:
      dev_tool:
        ipv4_address: 100.0.0.50

networks:
  dev_tool:
    name: dev_tool
    driver: bridge
    ipam:
      config:
        - subnet: 100.0.0.0/24
          gateway: 100.0.0.1
```

### 2. redis용 conf

```bash
sudo mkdir conf
cd conf
sudo touch redis.conf
```

```bash
# redis.conf
protected-mode no
appendonly yes
port 6379
requirepass tracer204
```

### 3. 실행

```bash
cd .. # docker-compose.yml이 있는 위치
sudo docker compose up -d
```