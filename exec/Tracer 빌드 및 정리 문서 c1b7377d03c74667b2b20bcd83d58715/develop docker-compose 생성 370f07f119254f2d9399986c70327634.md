# develop docker-compose 생성

```bash
version: "3"

services:
  frontend:
    container_name: frontend
    image: frontend:v1
    stdin_open: true
    tty: true
    ports:
      - 3001:3000
    restart: always
    volumes:
      - /volumes/docker/frontend:/home/frontend
    networks:
      develop:
        ipv4_address: 200.0.0.10

  backend_news:
    container_name: backend_news
    image: backend:v1
    stdin_open: true
    tty: true
    ports:
      - 8091:8080
    restart: always
    volumes:
      - /volumes/docker/backend_news:/home/backend
    networks:
      develop:
        ipv4_address: 200.0.0.20

  backend_keyword:
    container_name: backend_keyword
    image: backend:v1
    stdin_open: true
    tty: true
    ports:
      - 8092:8080
    restart: always
    volumes:
      - /volumes/docker/backend_keyword:/home/backend
    networks:
      develop:
        ipv4_address: 200.0.0.30

  backend_timeline:
    container_name: backend_timeline
    image: backend:v1
    stdin_open: true
    tty: true
    ports:
      - 8093:8080
    restart: always
    volumes:
      - /volumes/docker/backend_timeline:/home/backend
    networks:
      develop:
        ipv4_address: 200.0.0.40

  eureka:
    container_name: eureka
    image: backend:v1
    stdin_open: true
    tty: true
    ports:
      - 8761:8761
    restart: always
    volumes:
      - /volumes/docker/eureka:/home/backend
    networks:
      develop:
        ipv4_address: 200.0.0.50

  gateway:
    container_name: gateway
    image: backend:v1
    stdin_open: true
    tty: true
    ports:
      - 8001:8001
    restart: always
    volumes:
      - /volumes/docker/gateway:/home/backend
    networks:
      develop:
        ipv4_address: 200.0.0.60

networks:
  dev_tool:
    name: dev_tool
    driver: bridge
    ipam:
      config:
        - subnet: 100.0.0.0/24
          gateway: 100.0.0.1
  develop:
    name: develop
    driver: bridge
    ipam:
      config:
        - subnet: 200.0.0.0/24
          gateway: 200.0.0.1
```