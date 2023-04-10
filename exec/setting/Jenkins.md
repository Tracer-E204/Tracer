# Jenkins 설정

![Untitled](Jenkins/Untitled.png)

### 3. 비밀번호 확인

```jsx
sudo cat /volumes/docker/jenkins/secrets/initialAdminPassword
```

### 4. install suggested plugins 선택

![Untitled](Jenkins/Untitled1.png)

![Untitled](Jenkins/Untitled2.png)

### 5. 계정 생성

![Untitled](Jenkins/Untitled3.png)

### 6. 접속 URL 생성 (바로 다음을 누른다.) 후 메인화면

![Untitled](Jenkins/Untitled4.png)

### 7. 플러그인 설치

![Untitled](Jenkins/Untitled5.png)

- 플러그인 관리 클릭
- Available plugins에서 아래 플러그인 설치
    - publish Over ssh
    - NodeJS Plugin
    - Generic Webhook Trigger Plugin
    - Gitlab API Plugin
    - GitLab Authentication plugin
    - GitLab Branch Source Plugin
    - GitLab Plugin

### 8. 기타 환경 설정

![Untitled](Jenkins/Untitled6.png)

- Jenkins 관리 - Global Tool Configuration
- gradle에서 자신이 사용하는 gradle 선택 ( back 전용 ) - name과 version만 선택

![Untitled](Jenkins/Untitled7.png)

- NodeJS에서 자신이 사용하는 Nodejs 버젼 선택 ( front 전용 ) - name과 version만 선택

![Untitled](Jenkins/Untitled8.png)

### 9. 새로운 Item 생성

![Untitled](Jenkins/Untitled9.png)

![Untitled](Jenkins/Untitled10.png)

### 10. 프로젝트 구성 - 프로젝트 입장 후 구성 클릭

![Untitled](Jenkins/Untitled11.png)

- GitHub project 선택 후 project url 입력

![Untitled](Jenkins/Untitled12.png)

- 소스 코드 관리 - Repository URL 입력 (deploy token 보유시 해당 token 도 함께 입력)

![Untitled](Jenkins/Untitled13.png)

- 소스 코드 관리 - Credentials (webhooks 설정시 사용)

![Untitled](Jenkins/Untitled14.png)

- 자신의 gitlab의 username와 password를 입력
    
    ![Untitled](Jenkins/Untitled15.png)
    

- build 대상이 되는 branch 입력

![Untitled](Jenkins/Untitled16.png)

- 빌드 유발 - Build when a change is pushed to GitLab. GitLab webhook URL…. 선택

![Untitled](Jenkins/Untitled17.png)

- 빌드 환경 - Provide Node & npm bin/ folder to  PATH 선택 후 NodeJS Installation 선택 (global 선택에서 설정한 NodeJS 선택)

![Untitled](Jenkins/Untitled18.png)

- Build Steps - Add build step에서 Excute shell 선택
- CI=false → eslint 무시

![Untitled](Jenkins/Untitled19.png)

- Add build step에서 Invoke Gradle script 선택
- -x test → test 파일 무시

![Untitled](Jenkins/Untitled20.png)

- 저장하기

### 11. 지금 빌드

- 왼쪽 리스트중 지금 빌드 클릭

![Untitled](Jenkins/Untitled21.png)

- 빌드 성공 확인

![Untitled](Jenkins/Untitled22.png)

- Console Output을 클릭하면 콘솔창으로 확인 가능

### 12. WebHook 추가

- gitlab의 setting에 Webhooks 선택

![Untitled](Jenkins/Untitled23.png)

- URL과 Secret token 입력

![Untitled](Jenkins/Untitled24.png)

- URL은 젠킨스→ 프로젝트 구성 → 빌드 유발 → Build when a change is pushed to GitLab. GitLab webhook URL : ~~~~에 붙어 있는 URL

![Untitled](Jenkins/Untitled25.png)

- Secret token은 빌드 유발 → Build when ~~~ → 고급 → 맨 밑에 secret token generate 클릭

![Untitled](Jenkins/Untitled26.png)

![Untitled](Jenkins/Untitled27.png)

- URL과 Secret token 입력을 마친 뒤 Trigger 설정

![Untitled](Jenkins/Untitled28.png)

- 자동으로 빌드 시키고 싶은 브랜치 이름 적기

- SSL verification 선택 후 Add webhook

![Untitled](Jenkins/Untitled29.png)

### 13. 생성된 웹훅 테스트 해보기

![Untitled](Jenkins/Untitled30.png)

- 선택 후 젠킨스 확인

![Untitled](Jenkins/Untitled31.png)

- 빌드 성공 !

### 14. ssh 통신을 위한 pem key 생성

- ec2 서버에서 jenkins 서버로 접속

```bash
sudo docker exec -it jenkins /bin/bash
```

```bash
ssh-keygen -t rsa
# 비밀번호는 원하는 걸로 설정 ( 본 서버는 tracer204 )
```

![Untitled](Jenkins/Untitled32.png)

- 이렇게 하면 /var/jenkins_home/.ssh 폴더안에 아래와 같이 구성됨

![Untitled](Jenkins/Untitled33.png)

- id_rsa.pub 파일을 복사하여 여러 군데 사용 예정

### 15. ssh 통신 네트워크 등록

- Jenkins 관리 - System - publish over SSH - SSH server

![Untitled](Jenkins/Untitled34.png)

- name : server 이름(원하는 걸로 입력)
- hostname : 서버 ip (도커 네트워크로 지정)
- username : 임의 지정
- remote directory : 명령을 수행할 폴더 위치
- 이후 고급 설정

![Untitled](Jenkins/Untitled35.png)

- 위 pem key 생성시 입력했던 비밀번호 입력

- 위와 같은 방식으로 통신이 필요한 네트워크 모두 등록
    - python : 100.0.0.20
    - backend_news : 200.0.0.20
    - backend_keyword : 200.0.0.30
    - backend_timeline : 200.0.0.40
    - eureka : 200.0.0.50
    - gateway : 200.0.0.60

### 16. portainer에서 jenkins의 네트워크 열어주기

- container list에서 jenkins 클릭

![Untitled](Jenkins/Untitled36.png)

- 아래로 쭉 내려서 connected networks 설정

![Untitled](Jenkins/Untitled37.png)

## jenkins : frontend 설정

### 1. 브랜치 설정

![Untitled](Jenkins/Untitled38.png)

- 이후 웹훅 테스트는 위 설정 참고

### 2. 빌드 환경 설정

![Untitled](Jenkins/Untitled39.png)

### 3. build step 설정

![Untitled](Jenkins/Untitled40.png)

```bash
cp -rp /var/jenkins_home/env/front/.env /var/jenkins_home/workspace/front/frontend/.env
cd frontend
npm install
CI=false npm run build
cp -rp /var/jenkins_home/workspace/front/frontend/build/* /var/jenkins_home/build/frontend/
```

## jenkins : backend 설정

### 1. branch 설정 및 웹훅 설정

- 위 참고

### 2. build steps 설정

- 기존에 실행되어 있는 백엔드 서버를 종료 시키고 미리 만든 환경 설정 파일을 복사한다.

![Untitled](Jenkins/Untitled41.png)

```bash
curl -X GET http://200.0.0.60:8001/news/shutdown
sleep 10
cp -rp /var/jenkins_home/env/news/application.yml /var/jenkins_home/workspace/backend_news/backend/news/src/main/resources/application.yml
```

- gradle을 이용하여 빌드

![Untitled](Jenkins/Untitled42.png)

- 밑에 고급 설정에 build file 경로 설정

![Untitled](Jenkins/Untitled43.png)

- 빌드된 파일 복사

![Untitled](Jenkins/Untitled44.png)

```bash
cp -rp /var/jenkins_home/workspace/backend_news/backend/news/build/libs/*SNAPSHOT.jar /var/jenkins_home/build/backend_news/
```

- ssh 명령어를 보내 해당 컨테이너에서 서버 실행시키기

![Untitled](Jenkins/Untitled45.png)

![Untitled](Jenkins/Untitled46.png)

- 서비스 별로 eureka, gateway, news, keyword, timeline 모두 생성

## jenkins : python

- 위와 동일
- build step만 execute shell

```bash
cp -rp /var/jenkins_home/workspace/backend_python/backend/etl/* /var/jenkins_home/build/backend_python/
```

- 이후 ssh 명령어 보내기
