# Tracer 빌드 및 정리 문서

# 사용 기술 스택

| 분류 | 이름 | 버전 |
| --- | --- | --- |
| SERVER | AWS | Ubuntu 20.04 LTS (GNU/Linux 5.4.0-1018-aws x86_64) |
|  | Docker | 23.0.1 |
|  | Portainer | 2.16.2 |
|  | nginx-proxy-manger | 2.9.19 |
| CI/CD | Jenkins | 2.395 |
| DB | Redis | 7.0.10 |
|  | MySQL | 8.0.32 |
| FE | VisualStudioCode | 1.74.2 |
|  | nodeJS | 17.8.0 |
|  | npm | 8.1.2 |
|  | React | 6 |
| BE | intelliJ | 2022.3.1 |
|  | Spring-Boot | 2.7.9 |
|  | JAVA | 11 |
|  | Gradle | 7.6 |
| data | bareun | 2.0.1 |

# 환경 변수 설정

## FrontEnd

### .env

```jsx
// .env
REACT_APP_API_URL="https://tracer.today/api"
```

## BackEnd

### eureka/application.yml

```java
server:
  port: 8761

spring:
  application:
    name: discoveryservice

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
  server:
    response-cache-update-interval-ms: 10000
    eviction-interval-timer-in-ms: 15000
```

### gateway/application.yml

```java
server:
  port: 8001

spring:
  application:
    name: apigateway-service
  cloud:
    gateway:
      globalcors:
        corsConfigurations:
          '[/**]':
            allowedOrigins: "*"
            allow-credentials: false
            allowedHeaders:
              - x-requested-with
              - authorization
              - content-type
              - credential
              - X-AUTH-TOKEN
              - X-CSRF-TOKEN
            allowedMethods:
              - POST
              - GET
              - PUT
              - PATCH
              - DELETE
              - OPTIONS
      default-filters:
        - name: GlobalFilter
          args:
            baseMessage: Hello Spring Cloud Gateway Global Filter
            preLogger: true
            postLogger: true
      routes:
        - id: news-service
          predicates:
            - Path=/api/news/**
          uri: lb://NEWS-SERVICE
				  filters:
            - name: NewsFilter
              args:
                baseMessage: News Service Filter
                preLogger: true
                postLogger: true
        - id: keyword-service
          predicates:
            - Path=/api/keyword/**
          uri: lb://KEYWORD-SERVICE
          filters:
            - name: KeywordFilter
              args:
                baseMessage: Keyword Service Filter
                preLogger: true
                postLogger: true
        - id: timeline-service
          predicates:
            - Path=/api/timeline/**
          uri: lb://TIMELINE-SERVICE
          filters:
            - name: TimelineFilter
              args:
                baseMessage: Timeline Service Filter
                preLogger: true
                postLogger: true

eureka:
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://200.0.0.50:8761/eureka
```

### news/application.yml

```java
server:
  port: 0
  shutdown: graceful

management:
  endpoints:
    web:
      exposure:
        include: '*'
  endpoint:
    shutdown:
      enabled: true

spring:
  application:
    name: news-service
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://100.0.0.40:3306/news?serverTimezone=Asia/Seoul&characterEncoding=UTF-8
    username: root
    password: tracer204
  main:
    allow-circular-references: true
  jpa:
    open-in-view: false
    show-sql: false
    hibernate:
      ddl-auto: none
    properties:
      hibernate:
        format_sql: false
  redis:
    port: 6379
    host: 100.0.0.50
    password: tracer204

client:
  keyword: "keyword-service"
  timeline: "timeline-service"

eureka:
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://200.0.0.50:8761/eureka
  instance:
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}}
    lease-renewal-interval-in-seconds: 15
    lease-expiration-duration-in-seconds: 45
```

### keyword/application.yml

```java
server:
  port: 0
  shutdown: graceful

management:
  endpoints:
    web:
      exposure:
        include: '*'
  endpoint:
    shutdown:
      enabled: true

spring:
  application:
    name: keyword-service
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://100.0.0.40:3306/keyword?serverTimezone=Asia/Seoul&characterEncoding=UTF-8
    username: root
    password: tracer204
  main:
    allow-circular-references: true
  jpa:
    open-in-view: false
    show-sql: false
    hibernate:
      ddl-auto: none
    properties:
      hibernate:
        format_sql: false

eureka:
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://200.0.0.50:8761/eureka
  instance:
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}}
    lease-renewal-interval-in-seconds: 15
    lease-expiration-duration-in-seconds: 45
```

### timeline/application.yml

```java
server:
  port: 0
  shutdown: graceful

management:
  endpoints:
    web:
      exposure:
        include: '*'
  endpoint:
    shutdown:
      enabled: true

spring:
  application:
    name: timeline-service
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://100.0.0.40:3306/timeline?serverTimezone=Asia/Seoul&characterEncoding=UTF-8
    username: root
    password: tracer204
  main:
    allow-circular-references: true
  jpa:
    open-in-view: false
    show-sql: false
    hibernate:
      ddl-auto: none
    properties:
      hibernate:
        format_sql: false

eureka:
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://200.0.0.50:8761/eureka
  instance:
    instance-id: ${spring.application.name}:${spring.application.instance_id:${random.value}}}
    lease-renewal-interval-in-seconds: 15
    lease-expiration-duration-in-seconds: 45
```

# 배포

## 포트

| 포트번호 | 용도 | 네트워크 |
| --- | --- | --- |
| 80 | nginx-proxy-manager | 172.19.0.2 |
| 443 | nginx-proxy-manager | 172.19.0.2 |
| 8085 | nginx-proxy-manager | 172.19.0.2 |
| 50000 | jenkins | 100.0.0.10 |
| 9090 | jenkins | 100.0.0.10 |
| 8090 | backend-python | 100.0.0.20 |
| 9000 | portainer | 100.0.0.30 |
| 3306 | mysql | 100.0.0.40 |
| 6479 | redis | 100.0.0.50 |
| 3001 | frontend | 200.0.0.10 |
| - | backend_news | 200.0.0.20 |
| - | backend_keyword | 200.0.0.30 |
| - | backend_timeline | 200.0.0.40 |
| 8761 | eureka | 200.0.0.50 |
| 8001 | gateway | 200.0.0.60 |

# 서버

## 도커

[도커 설치](setting/Docker.md)

## dev_tool docker-compose 생성

[dev_tool docker compose 생성](setting/Devtool.md)

## develop docker-compose 생성

[develop docker-compose 생성](setting/Develop.md)

## Portainer

[Portainer 설정](setting/Portainer.md)

## MySql

[MySql 설정](setting/MySql.md)

## Redis

[Redis 설정](setting/Redis.md)

## Jenkins

[Jenkins 설정](setting/Jenkins.md)

## python 이미지 생성

[python 이미지](setting/Python.md)

## Front 이미지 생성

[frontEnd 이미지](setting/FrontEnd.md)

## Back 이미지 생성

[backend 이미지](setting/BackEnd.md)
