# Redis 설정

```bash
# 접속하기
redis-cli -p 6379

# 슈퍼 계정 만들기
ACL SETUSER [유저네임] on >[비밀번호] allkeys allcommands

auth [유저네임] [비밀번호]
또는 redis-cli 밖에서 실행할때
redis-cli --user [유저네임] --pass [비밀번호] -p 6379
```