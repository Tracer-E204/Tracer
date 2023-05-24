# backend 이미지

### 1. Dockerfile 생성

```bash
FROM ubuntu:20.04
#FROM openjdk:11-jre-slim

ENV USER tracer
ENV PW tracer204!

# 필요한 패키지 설치 (sudo, nano, net-tools, ssh, java)
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y sudo nano ssh openssh-server openjdk-11-jdk-headless

# Access Option
# RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -i 's/UsePAM yes/#UserPAM yes/g' /etc/ssh/sshd_config

# $USER 계정 생성
RUN groupadd -g 999 $USER
RUN useradd -m -r -u 999 -g $USER $USER
RUN sed -ri '20a'$USER' ALL=(ALL) NOPASSWD:ALL' /etc/sudoers

# root, $USER의 페스워드를 지정
RUN echo 'root:root' | chpasswd
RUN echo $USER':'$PW | chpasswd

# ssh를 시작 프로세스에 등록
RUN sudo echo 'sudo service ssh restart' >> /home/$USER/run.sh
# RUN sudo echo 'sudo service nginx start' >> /home/$USER/run.sh

# Jenkins 공개키 등록
COPY ./jenkins_rsa.pub /home/$USER/jenkins_rsa.pub
COPY ./backend_start.sh /home/$USER/backend_start.sh
RUN mkdir /home/$USER/.ssh
RUN cat /home/$USER/jenkins_rsa.pub >> /home/$USER/.ssh/authorized_keys

# java 환경변수 설정
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
ENTRYPOINT sudo sh /home/$USER/run.sh && sh
USER $USER

# 외부포트 설정 (ssh-22, http-8080)
EXPOSE 22
EXPOSE 80
EXPOSE 81
EXPOSE 443
EXPOSE 5174
EXPOSE 8080
```

### 2. backend_start.sh 생성

```bash
#!/bin/bash
PID=$(ps -ef | grep SNAPSHOT.jar | grep java | awk '{print $2}')

if [ -z "$PID" ];
then
    echo "API is not running - Start Spring API"
else
    sudo kill -9 $PID
    echo "API is running - Kill and Restart Spring API"
fi

java -jar /home/backend/*SNAPSHOT.jar > /dev/null 2>&1 &
```

### 3. jenkins_rsa.pub

- jenkins id_rsa.pub 복사해오기

```bash
cd /volumes/docker/jenkins/.ssh
cp id_rsa.pub /home/ubuntu/env/backend/jenkins_rsa.pub
```