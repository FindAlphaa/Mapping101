# Investing Mapping101

<hr />  

# Team Member  

<img src="https://github.com/dong99u/Mapping101/assets/86235780/bb4673ce-5db6-428d-9f55-012fca7cadfb" width="70%"></img>
### Scraping Team  
이호영, 이원석, 정찬혁, 백형준, 박동규, 김대현  

### Category Team
이호영: [https://github.com/ihobbang250]  PM, 산업 카테고리 분류, 발표 자료 제작 및 발표  
이원석: [https://github.com/leew0nseok]  데이터 전처리, 산업 카테고리 분류  

### Keyword Team
정찬혁: [https://github.com/jungch15]  감성분석 모델 구축(KoBERT, KoELECTRA, KcELECTRA)   
백형준: [https://github.com/vividbaek]  데이터 전처리, 보고서 작성, 발표 자료 제작  

### UI/UX Team
박동규: [https://github.com/dong99u]  그래프 구축  
김대현: [https://github.com/Daehyun-Bigbread]  디자인  


<hr />  


## 개발 동기 및 목적  
  주식 투자를 시작할 때 사람들에게 필요한 것이 무엇일까에 대해 고민을 하게 되었고 그 과정에서 투자에 필요한 많은 정보들이 처음 주식 투자를 시작하는 사람들 입장에서는 어렵게 정리가 되어있고 알아야 할 정보도 많다는 것을 알게 되었다.   
  따라서 뉴스와 커뮤니티의 반응을 종합하고 그 비율을 적절하게 계산하여 해당 키워드가 유망한 분야인지 아닌지를 정확하게 나타내는 것이 중요하였다. 그리고 그 해당 분야의 여론에 따라 실제 주가에 어떠한 영향을 미치는지 상관관계를 분석하는 것이 목표이다.


## 프로젝트 추친 내용

<img src="https://github.com/dong99u/Mapping101/assets/86235780/86393deb-e02a-4112-b3e6-ffe19ba095e8" width="100%"></img>  

### 구현 과정

1. 데이터 수집  
   1-1. 뉴스 및 커뮤니티 데이터: 주로 사용하는 각 사이트(뽐뿌, 네이버 카페, 에펨코리아, 네이버 종토방 등)와 대상으로 데이터 약 50만 개 크롤링, 빅카인즈 사이트에서 올해 뉴스 데이터 약 185만개 확보  
   1-2. 기업 분류 데이터: 기업 공시 채널 KIND, 네이버 증권에서 데이터 크롤링  
2. 데이터 전처리  
   2-1. 특수문자 제거 및 url 제거  
   2-2. 결측치 및 중복값 제거  
3. 클래스 분류  
   3-1. 분류체계 확립을 위해 기업 개요에서 TD-IDF를 이용해 주요 키워드 단어 단위를  n-gram을 사용하여 키프레이즈 생성  
   3-2. 생성된 키프레이즈를 GICS, WICS의 분류를 참고하고, GPT를 활용해 카테고리 선정
   3-3. 카테고리를 선정 후 분류체계를 확립하고 기업 개요를 GPT를 통해 기업의 분야 분류  
4. 감성분석 모델 구축  
   4-1. KoBERT를 활용한 감성분석: 금융 문장에 대해 라벨링 되어 있는 데이터셋으로 fine-tuning 후 정확도 측정  
   4-2. KcELECTRA를 활용한 감성분석: 금융 문장에 대해 라벨링 되어 있는 데이터셋으로 fine-tuning 후 정확도 측정  
   4-3. KoELECTRA를 활용한 감성분석: 금융 문장에 대해 라벨링 되어 있는 데이터셋으로 fine-tuning 후 정확도 측정  
   4-4. 가장 나은 성능을 보인 KoBERT 채택  
5. 트렌드 파악
   5-1. fine-tuning된 KoBERT모델을 사용하여 뉴스 및 커뮤니티 데이터 감정분석
   5-2. 각 키워드별 언급량 파악과 감정 분석된 데이터를 통해 긍정 비율을 이용한 트렌드 파악
6. 시각화
   6-1. 웹페이지 – 웹페이지는 React, Javascript를 이용하여 제작을 했으며, 디자인은 Figma를 이용하여 전반적인 웹페이지 디자인, 구성, 진행도 등을 생각하고 디자인 및 설계
   6-2. 시각화 – 시각화쪽은 주로 3개로 나누어 볼수가 있는데 전체적인 네트워크 그래프는 javascript에서 D3라이브러리를 이용하여 제작을 하였으며, radar그래프는 chartjs를 이용하여 제작 후 모든 데이터 파일을 json 형식으로 받아 변환시키는 로직을 설계하고 적용, 그래프 구현
6-3 그래프
react-d3 라이브러리를 이용해서 시각적으로 역동적인 그래프 시각화 보여주기
노드와 엣지의 데이터는 모두 json 형식으로 입력 후 모든 정보는 express로 백엔드를 구축하여 요청

## 참고 문헌
김유신, 김남규, and 정승렬. "뉴스와 주가: 빅데이터 감성분석을 통한 지능형 투자의사결정모형." 지능정보연구, 한국지능정보시스템학회 18.2 (2012).  
김영민, 정석재, and 이석준. "소셜 미디어 감성분석을 통한 주가 등락 예측에 관한 연구." Entrue Journal of Information Technology 13.3 (2014): 59-69.  
성태응, et al. "기업정보 기반 지능형 밸류체인 네트워크 시스템에 관한 연구." 지능정보연구 24.3 (2018): 67-88.  
고재창, 조근태, and 조윤호. "키워드 네트워크 분석을 통해 살펴본 기술경영의 최근 연구동향." 지능정보연구 19.2 (2013): 101-123.  
조수지, 김흥규, and 양철원. "기업 재무분석을 위한 한국어 감성사전 구축." 한국증권학회지 50.2 (2021): 135-170.  
강장구, 권경윤, and 심명화. "개인투자자의 투자심리와 주식수익률." 재무관리연구 30.3 (2013): 35-68.  
안성원, and 조성배. "뉴스 텍스트 마이닝과 시계열 분석을 이용한 주가예측." 한국정보과학회 학술발표논문집 37.1C (2010): 364-369.  
Devlin, Jacob, et al. "Bert: Pre-training of deep bidirectional transformers for language understanding." arXiv preprint arXiv:1810.04805 (2018).  

<hr />

# How to Start

### Requirements
For building and running the application you need:

+ <a href="https://nodejs.org/ca/blog/release/v18.16.1">Node.js 18.16.1</a>
+ <a href="https://www.npmjs.com/package/npm/v/9.5.1">Npm 9.5.1</a>

### Installation
```
$ git clone https://github.com/FindAlphaa/Mapping101.git
$ npm install
$ cd client
$ npm install
```

#### Backend
```javascript
$ cd Mapping101
$ npm run start
```

## 사용 기술

#### Web
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)  

#### Data  
![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white)  ![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)  ![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)  

#### Models
![KoBERT](https://img.shields.io/badge/KoBERT-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)  ![KcBERT](https://img.shields.io/badge/KcBERT-4285F4?style=for-the-badge&logo=google%20assistant&logoColor=white)  ![KoELECTRA](https://img.shields.io/badge/KoELECTRA-4285F4?style=for-the-badge&logo=google%20assistant&logoColor=white) 




