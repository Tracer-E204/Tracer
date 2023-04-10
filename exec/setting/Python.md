# python 이미지

### 1. Dockerfile

```bash
# Dockerfile
# 기준이미지 설정
FROM python:3.11.1

# default user
ENV USER tracer
ARG PW=tracer204!

# 필요한 패키지 설치 (sudo, nano, net-tools, ssh, java)
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y sudo nano ssh openssh-server

# python
# RUN pip install -r requirements.txt
RUN pip install uvicorn

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
COPY ./python_start.sh /home/$USER/python_start.sh
RUN mkdir /home/$USER/.ssh
RUN cat /home/$USER/jenkins_rsa.pub >> /home/$USER/.ssh/authorized_keys

# shell 실행 설정
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

### 2. python_start.sh

```bash
ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime
echo Asia/Seoul > /etc/timezone

cd /home/backend

PID=$(ps -ef | grep uvicorn | grep 8080 | awk '{print $1}')

if [ -z "$PID" ];
then
    echo "API is not running - Start Spring API"
else
    sudo kill -9 $PID
    echo "API is running - Kill and Restart Spring API"
fi

pip install -r requirements.txt

nohup uvicorn --host=0.0.0.0 --port 8080 main:app >> /dev/null 1>&2 &
```

### 3. jenkins_rsa.pub

- jenkins id_rsa.pub 복사해오기

```bash
cd /volumes/docker/jenkins/.ssh
cp id_rsa.pub /home/ubuntu/env/python/jenkins_rsa.pub
```