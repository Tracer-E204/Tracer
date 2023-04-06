# MySql 설정

```bash
sudo docker exec -it <컨테이너 이름> bash
# 컨테이너 이름. 여기같은 경우 mysql
```

```bash
mysql -u root -p

# 이후 Enter password 등장시 위에 2번에서 입력했던 비밀번호 입력

# 혹시 저 명령어가 실행이 안되면(막 뭐 access denied for user 'root'@'localhost'...)
mysql -r -p
# 로 접속 후
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
flush privileges;
# 후 다시 접속 시도
```

![Untitled](MySql%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%209a6bfcf26b9d45d8aed1e43b6bac4b62/Untitled.png)

- 여기서 db만들고 입력도 가능하지만 간편하게 workbench 사용

![Untitled](MySql%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%209a6bfcf26b9d45d8aed1e43b6bac4b62/Untitled%201.png)

1. + 선택
2. 도메인 입력 (포트는 고정)
3. 사전에 입력했던 비밀번호 입력
- 이후 test connection 클릭하고 연결 확인

![Untitled](MySql%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%209a6bfcf26b9d45d8aed1e43b6bac4b62/Untitled%202.png)

- 이름을 안적어서 이런 에러가 떴었다.

![Untitled](MySql%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%209a6bfcf26b9d45d8aed1e43b6bac4b62/Untitled%203.png)