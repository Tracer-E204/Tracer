
# Tracer
![Tracer](https://github.com/Tracer-E204/Tracer/assets/64730703/1463c088-4919-4cc1-ac6e-e625d2cbefa7)

### 개요

- 도메인 : 빅데이터(분산)

- 팀명 : 한의원 (E204)

### 팀원
|팀원|역할|
|:------:|:---------------:|
|최창근|팀장, FE|
|이승민|FE, 디자인|
|정경훈|BE, infra(CI/CD)|
|이재혁|크롤링, 분산|
|엄형규|분산, 알고리즘|
|이영재|알고리즘|

### 목차

- 기획 배경

- 기능 소개

- 알고리즘 소개

- 기술 스택

- 기대 효과

### 기획 배경
- 타겟
    - 사회 이슈에 대해 생소한 사람
    - 시사 관련 정보가 부족해 특정 뉴스를 이해하는데 도움이 필요한 사람
    - 데이터 분석 사이트의 ui에 불편함을 느끼는 사람
- 목표 : 사건의 흐름을 시각화하고 관련 정보 접근을 쉽게 하여 이슈 이해에 도움을 준다.
- 기존 문제점
    - 뉴스를 통해 어떤 일을 접했을 때 왜 이런 일이 발생했는지 원인이나 배경을 알 수 없음
    - 이슈의 흐름이라는 배경지식 유무에 따라 기사에 대한 이해에 혼동이 오는 경우가 존재함

### 기능 소개
- 메인 페이지<br>
![메인](https://github.com/Tracer-E204/Tracer/assets/64730703/83b122fa-fd13-4ed9-94b6-85d33ba22d25)

- 데일리 키워드<br>
![워드클라우딩](https://github.com/Tracer-E204/Tracer/assets/64730703/4aec55e7-f2b6-4963-b315-71a5bd7b3605)

- 데일리 뉴스<br>
![데일리](https://github.com/Tracer-E204/Tracer/assets/64730703/41391578-f1cf-4a97-a8b2-1d97c650b4dc)

- 검색 페이지<br>
![검색](https://github.com/Tracer-E204/Tracer/assets/64730703/5cc6c4e2-9398-4b76-8591-56df024d6794)

- 뉴스 상세 페이지<br>
![뉴스디테일](https://github.com/Tracer-E204/Tracer/assets/64730703/8a5700e7-4334-40b0-a42b-58bb67db82a1)

- 히스토리 페이지<br>
![플로우](https://github.com/Tracer-E204/Tracer/assets/64730703/ac799d20-7fd5-4b61-9fcb-f3d18a88fb07)


### 알고리즘 소개
#### 알고리즘 전체 흐름도
![알고리즘1](https://github.com/Tracer-E204/Tracer/assets/64730703/e2449a6f-475c-4a64-95eb-d917a630ff4c)
<br>
- 분석과정  
![Image Pasted at 2023-3-24 12-13](https://user-images.githubusercontent.com/109326214/227415134-4af1301e-128a-4130-827e-fbd3a9ea697c.png)
<br>
#### 사용된 알고리즘
![알고리즘2](https://github.com/Tracer-E204/Tracer/assets/64730703/83304822-2557-47fd-b388-219de706bcd9)
<br>
- 바른
  - 한국어의 특성에 최적화된 형태소 분석기
  - Transformer 모델 기반
  - 최신 신조어도 분석 가능
- TF-IDF
  - TF : 기사내에 얼마나 등장하는가
  - IDF : 얼마나 많은 기사에서 언급되었는가
  - 이 두가지를 역산으로 조합하여 각 단어별 중요도를 뽑아냄
- DBSCAN
  - 밀도 기반 클러스터링
  - 키워드를 군집화하기 위해 사용
  - K-means와 비교했을 때 어느 키워드에 더 모여있는지가 중요했음에 사용

### 기술 소개
#### 아키텍처
![아키텍처](https://github.com/Tracer-E204/Tracer/assets/64730703/1bf3b6a4-2741-44a7-a543-66ae945a43fe)
#### MSA
![MSA](https://github.com/Tracer-E204/Tracer/assets/64730703/bc3227d1-130c-4f71-9ecd-db38f275a9e8)
<br>
- 서비스별 독립적 배포
- 로드 밸런싱을 통한 부하 분산

### 자료 제출 및 링크

- 아이디어 브레인스토밍
  
  - https://colossal-whip-d19.notion.site/faeaa3be42284ec2bf095ab20f76c37f

- 프로젝트 기획서
  
  - https://colossal-whip-d19.notion.site/566e6218086d4949ba44f968056c3229

- 기능 명세 및 우선순위
  
  - https://colossal-whip-d19.notion.site/c89f3b40db464ddb8fad2ddf08a04f1f?v=f4565d39a6014ec9a8d4d1c8c88c553c

- API 연동 규격서
  
  - https://colossal-whip-d19.notion.site/API-5d331483f18a40478cb77cb06e4af781

- ERD
  
  - ![Image Pasted at 2023-3-23 15-33](https://user-images.githubusercontent.com/109326214/227414267-035a14e0-73cd-4d20-8710-d506dff81599.png)

- 간트차트
  
  - https://colossal-whip-d19.notion.site/8a33d8baac67494f889e3ab998c192e4

- 중간 발표 PPT
  
  - https://colossal-whip-d19.notion.site/PPT-6724d515157c4c8dac1bf55c7618dca1

- 피그마
  
  - https://www.figma.com/file/uUDdHXoiwxVG0hc7D2ACcJ/Tracer?node-id=0%3A1&t=HfDK5yXH08jBljAt-1
  
  - ![E204_figma](/uploads/d79995095b462c8ba79fefdd34d8f542/E204_figma.png)

- 포트
  
  - https://colossal-whip-d19.notion.site/e3331c79904649da999b6402fb336d6f
  - ![image](https://user-images.githubusercontent.com/109326214/227414443-30cc9454-1069-4221-a9fa-bdde4de51fa9.png)

