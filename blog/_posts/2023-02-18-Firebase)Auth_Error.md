---
layout: posts
title: "Firebase Auth Error"
date: 2023-02-18
categories:
  - Firebase
tags: ["Yapick", "트러블 슈팅", "React", "Firebase"]
---

SingIt 개인 프로젝트가 방치되면서 주말에 피그마를 제작하고 본격적으로 자바스크립트 공부를하며 동행해보자 타입스크립트로 프로젝트에 돌입했다.

로그인 & 회원가입 기능에서 나는 Yapick 에 사용했던 firebase 의 Authentication 기능을 이용하고자 하였고 Yapick 프로젝트의 회원가입 기능을 다시 하던차에 오류를 발견하였다.

<br>

분명 전에 로그인 회원가입 기능이 모두 잘 작동하는것을 확인하였으나.. 건든적이 없는데 갑자기 작동이 되지 않았다..

해결하고자 로컬로 켜서 console 로 살펴본 결과.. 딱히 문제는 없었다..! 사업자 회원으로 로그인이 잘 되었고 팝업창도 잘 뜨나했으나.. 여긴 또 구글 로그인이 자동으로 되는것 이였다..

> auth/cancelled-popup-request Firebase: Error (auth/cancelled-popup-request).

해당 오류를 뱉고 자동으로 팝업창은 껴졌으나, Firebase 에서는 회원가입이 된것으로 확인되었다.

나는 크롬이 내 구글 계정을 자동으로 토큰을 넘겨 로그인 시켜주는거 같아서, 크롬의 시크릿모드로 들어가 확인결과 여전히 위 오류는 뜨나 팝업창이 잘 나오는걸 확인했다.

![firebase3.png](/assets/img/firebase3.png)

팝업의 리퀘스트가 캔슬이된 이유를 알고자 구글링하였으나, 대부분은 block 이 된것이고
