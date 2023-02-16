---
layout: posts
title: "Async & Promise 비동기 처리"
date: 2023-02-15
categories:
  - Javascript
tags: ["비동기", "정리", "Javascript"]
---

## 비동기 처리가 필요한 이유?

자바스크립트는 싱글 스레드라 위에서 아래로 코드를 읽어 일을 하나씩 차례대로 끝내는데, 그러면 먼저 불러와야할 데이터를 받기 전까지 화면에 빈공간으로 출력되는 등
UX 에 큰 문제가 생기고 만다.

<br>

이를 해결하고자 비동기 처리로 시작과 동시에 우선적으로 처리해야할 일을 처리하는데 자바스크립트는 Promise 라는 객체로 비동기를 처리한다.

나는 비동기 통신을 위해 Axios 를 자주 사용하며, 이 Promise 객체를 제대로 이해하지 못해서 큰 봉변? 을 당한적이 있다.. ~~프로젝트에서~~

<br>

비동기 처리를 하게되면 Promise 객체를 리턴하는데 이를 .then() 과 .catch() 로 값을 가져오거나 예외 처리가 가능하다.

```js
signInWithEmailAndPassword(auth, email.value, password.value) // firebase 의 비동기 함수
  .then((userCredential) => {
    // 성공시 Promise 객체에서 원하는 data 를 인자에 담음
    const userInfo = userCredential.user;
    setIsLogin({ state: true, type: "local" });
    // setLoginInfo({
    //   storeId: response.data.store?.storeId || null,
    //   localId: response.data.localId,
    // });
    console.log(userInfo);
    return navigate(ROUTE.HOME.PATH);
  })
  .catch((err) => {
    // 어떠한 이유로 문제가 생겼을때 실행
    alert(`로그인에 실패했습니다 ${err}`);
  });
```

<br>

직접 함수들에 async 와 await 을 통해 비동기 처리가 가능한데 ES6 로 오면서 생긴 방법이다.

then 과 catch 대신 try catch 를 사용하게 되는데 크게 차이는 없으나 async & await 의 경우 then 과 catch 를 사용하면 Promise 형태로 출력이 되기 때문에 try catch 를 같이 묶어서 사용한다.

코드의 가독성이 좋아진다 !

```js
const postUserData = async (email, password) => {
  const userInfo = {
    email,
    password,
  };
  try {
    const response = await axios.post(API_URI.LOGIN, userInfo);
    if (response.status === 226) return alert(response.data?.message);
    setIsLogin({ state: true, type: "local" });
    setLoginInfo({
      storeId: response.data.store?.storeId || null,
      localId: response.data.localId,
    });
    return navigate(ROUTE.HOME.PATH);
  } catch {
    console.log("failed");
  }
};
```
