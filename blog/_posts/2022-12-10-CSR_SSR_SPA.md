---
layout: posts
title: "CSR, SSR, SPA 그리고 SSG"
date: 2022-12-10
categories:
  - Javascript
tags: ["Javascript", "정리"]
---

# SSR

Server Side Rendering 의 약자며 서버측에서 렌더링한 html 을 먼저 보내 바로 볼수있게 전달 그 후 자바스크립트를 보내 해석하고 html 연결해 작동

<br>
<br>

<img src="https://velog.velcdn.com/images%2Fhan-byul-yang%2Fpost%2F3ad3f36d-3a5b-4696-9662-d33981580471%2Fimage.png">

### 장점은

1. 첫 화면에 html 을 먼저 보내어 화면을 유저들에게 보여줌으로 UX 를 높여준다

2. 검색때 검색 엔진이 화면을 읽어 html 구조를 먼저 가져온 SSR 사이트을 먼저 찾아 상위로 올라가기에 SEO 에 최적화 되어있다.

<br>
<br>

### 단점으로는

1. 서버에서 처리하다보니 서버 부담이 크고 유저들이 많으면 과부하에 걸린다.

2. 첫 화면에서는 빨라도 계속 사이트를 이동하다보면 계속 html 을 받기에 결과적으론 CSR 에 비해 더디고 흰 화면을 노출한다. (기술발전으로 거의 극복)

<br>
<br>
<br>

# CSR

Client Side Rendering 으로 클라이언트측에서 렌더링이 일어나고 최초 접속시 필요한 html, css, javascript 를 받고 이후엔 데이터만 요청한다.

<br>

### 장점

1. 최초 접속 이후에는 필요한 데이터만 요청하기에 서버 부담 X

2.
