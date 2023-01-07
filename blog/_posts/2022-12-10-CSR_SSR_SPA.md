---
layout: posts
title: "CSR, SSR, SPA 그리고 SSG"
date: 2022-12-10
categories:
  - JavaScript
tags: ["JavaScript", "정리"]
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

최초 접속 이후에는 필요한 데이터만 요청하기에 서버 부담이 적고 로드가 필요없어 빠르다.

### 단점

SEO 에 좋지 않다.

<br>
<br>

# SPA

Single Page Application 으로 CSR 인 리액트의 주기능이며 하나의 html 로 재 렌더링 해주는 방식이며 페이지의 표시해야할 각각의 컴포넌트로 형식 구성

### 장점

1. 사용자 친화적
2. 최초 접속 렌더링 후 데이터만 받아와 서버 요청이 적음
3. 버츄얼 돔

<br>
<br>
<br>

## SPA 에서 SSR 장점도 넣고싶어 !

저번에 다루었던 [블로그](https://mark1237200-github-io.vercel.app/next.js/NextJs%EC%93%B0%EB%8A%94%EC%9D%B4%EC%9C%A0/ "Next.JS 블로그") 주제인 Next.js 는 리액트의 프레임워크로 리액트 CSR 을 구현하며 SSR 도 쉽게 지원된다.

<br>
<Br>

### 작동 방식으로

1. SSR 방식대로 먼저 html 을 렌더링해 클라이언트에 보낸다.

   > 이는 SEO 에 최적화되며 화면에 바로 뿌려주기에 UX 개선

2. 클라이언트에서 JS 다운 후 리액트 실행

3. 이후 상호작용할땐 CSR 방식으로 클라이언트측에서 처리

<br>
<br>

현재점 Next.js 가 강력한 방식의 프레임워크이며 리액트의 SPA 와 SSR 장점을 뽑아온 프론트엔드로써 익혀야할 기술스택이다.

다음 기술스택 소개로 타입스크립트를 소개해볼까 한다.
