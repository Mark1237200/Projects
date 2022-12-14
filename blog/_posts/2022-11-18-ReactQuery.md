---
layout: posts
title: "리액트 쿼리 정리"
date: 2022-11-18
categories:
  - React
  - React Query
tags: ["React Query", "정리"]
---

# React Query

1. 리액트 쿼리는?
2. 리액트 쿼리를 사용하는 이유는?
3. 리액트 쿼리의 기능과 옵션
4. 리액트 쿼리의 장단점
5. 정리

<br>

### 리액트 쿼리란

[리액트 쿼리](https://tanstack.com/query/v4/docs/overview "리액트 쿼리 공식문서 사이트")

<br>

React Query 는 비동기 과정을 편하게 만들어준다.\

1. 서버에서 값 가져오기
2. 에러 핸들링
3. 값 업데이트
4. 캐싱

전 프로젝트에서는 React 내부 기능인 useState 와 useEffect 를 사용하여 값을 가져오고 에러 핸들링을 하였다.

하지만 이러한 분기처리를 useQuery 한방으로 해결이 가능하다.

useQuery 는 get 요청을 할때 사용하며 post 나 update 는 useMutation 를 사용한다.

첫 파라미터엔 유니크 key 가 들어가며 해당 키로 호출하여 사용한다.
