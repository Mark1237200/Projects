---
layout: posts
title: "CSS transition"
date: 2023-01-26
categories:
  - Firebase
tags: ["Yapick", "트러블 슈팅", "React", "Firebase"]
---

야픽에는 로컬과 카카오톡 로그인 기능을 구현하였고 나는 Firebase 를 통해 구글, 깃허브등의 로그인 기능을 구현해볼까한다.

> import 'firebase/auth';

앞서 생성한 firebase.js 를 토대로 사용할 수 있다.

<br>

Auth 기능추가 방법은 간단하게 보였다.

1. Firebase > Authentication

2. 원하는 업체 선택 후 정보작성

3. [공식홈](https://firebase.google.com/docs/auth/web/google-signin?authuser=0) 에서 형식을 가져와 적용

4. 야픽 로그인 페이지에 적용하기

<br>

firebase auth 관련 공식 페이지에서 다소 이해하기 어려운 부분이 있어서 정리해둔 velog 등을 확인하여 firebase.js 에 'firebase/auth' 를 import 하여 getAuth, 회원가입, 로그인 등등의 함수를 가져와 export 하였다.

<br>

물론 이 과정에서도 firebase 측에서 21년 이후 방식을 바꾸어서 옛정보와 혼동되 많은 어려움을 겪었다. -> v9

<br>

firebase.auth -> getAuth() 로 불러와야 했으며 공식문서대로 다시 적을 수 밖에 없었다.

<br>

Cannot read properties of undefined (reading 'registerVersion')

useEffect with async
