---
layout: posts
title: "Firebase Auth"
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

사흘 정도 지난 후 문제점을 모두 해결하여 마저 적는다.

v9 로 넘어오며 연동이 가능하게 firebase/compat/app 으로 불러오고 firestore 와 auth 는 v9 버전대로 'firebase/firestore', 'firebase/auth' 불러왔다.

```js
import firebase from "firebase/compat/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_API_ID,
};

const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export {
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  auth,
  collection,
  getDocs,
  addDoc,
};
```

![firebase1.png](/assets/img/firebase1.png)

회원가입 기능구현에 앞서 파이어베이스에 로그인 제공업체를 추가해줬다.

이메일/비밀번호는 바로 가능하고 구글과 깃허브는 연동시켜줘야 한다.

구글은 본인의 이메일을 적어 사용 설정하였고, 깃허브는 내 깃허브 사이트 설정에서 Developer settings 탭에 OAuth 를 통해 연동하였다.

<br>

이 이후 auth 에서 import 해온 createUserWithEmailAndPassword 함수로 쉽게 구현할 수 있다.

```js
if (isCheck) {
  // 이메일과 비밀번호 유효성 검사 후 true 일 경우
  createUserWithEmailAndPassword(auth, email.value, password.value) // 인자로는 auth email password 순으로 넣어주면 된다.
    .then(() => {
      // 성공시
      alert("회원가입 성공하셨습니다!!");
      return navigate(`/${ROUTE.LOGIN.PATH}`, {
        state: ROUTE.REGISTER.PATH,
      });
    })
    .catch((err) => {
      // 실패시
      alert(`회원가입에 실패하였습니다 ${err}`);
    });
}
```

로그인도 같은 구조로 쉽게 구현이 가능하다.

```js
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const userInfo = userCredential.user; // 유저 정보
    setIsLogin({ state: true, type: "local" });
    console.log(userInfo);
    return navigate(ROUTE.HOME.PATH);
  })
  .catch((err) => {
    alert(`로그인에 실패했습니다 ${err}`);
  });
```

사실 쉽게 따라할수 있었는데 버전이 바뀌며 몇일을 해맨거같다.

강제로 npm i firebase@9.15.0 으로 버전업 시켜 이전 버전과 연동되게 import 불러올때 compat 도 추가.

팀 프로젝트 Yapick 에 적용하는건 금방한 것 같다.

<br>

![firebase2.png](/assets/img/firebase2.png)

다음 목표는 개개인의 사용자가 본인의 가게를 수정하고 삭제할 수 있도록 정보를 넣고 withAuth 기능도 재구현 해보는 것이다.
