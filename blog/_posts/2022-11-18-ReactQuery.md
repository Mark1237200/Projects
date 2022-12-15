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

## React Query

React Query 는 비동기 과정을 편하게 만들어준다.

1. 서버에서 값 가져오기
2. 에러 핸들링
3. 값 업데이트
4. 캐싱

전 프로젝트에서는 React 내부 기능인 useState 와 useEffect 를 사용하여 값을 가져오고 에러 핸들링을 하였다.

하지만 이러한 분기처리를 useQuery 한방으로 해결이 가능하다.

useQuery 는 get 요청을 할때 사용하며 post 나 update 는 useMutation 를 사용한다.

첫 파라미터엔 유니크 key 가 들어가며 해당 키로 호출하여 사용한다. <br>
그리고 다른 컴포넌트에서도 해당 키를 사용하면 호출 가능

유니크 키 값을 배열로 넣으면 query 함수 내부에서 변수로 사용 가능

```javascript
const Todos = () => {
  const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList, {
    // fetch api function
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: (data) => {
      // 성공시 호출
      console.log(data);
    },
    onError: (e) => {
      // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
      // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
      console.log(e.message);
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

## useQueries

비동기인 useQuery 를 여러개 쓸 경우 useQueries 로 사용하는게 바람직하다.

```javascript
const result = useQueries([
  {
    queryKey: ["getRune", riot.version],
    queryFn: () => api.getRunInfo(riot.version),
  },
  {
    queryKey: ["getSpell", riot.version],
    queryFn: () => api.getSpellInfo(riot.version),
  },
]);

useEffect(() => {
  console.log(result); // [{rune 정보, data: [], isSucces: true ...}, {spell 정보, data: [], isSucces: true ...}]
  const loadingFinishAll = result.some((result) => result.isLoading);
  console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
}, [result]);
```

## useMutation

값 바꿀때 사용하는 api (POST, DELETE, PATCH)

```javascript
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URI } from "../constants";

const postMenu = async (data) => {
  const { storeId, value } = data;
  const res = await axios.post(`${API_URI.POSTMENU(storeId)}`, value);
  return res;
};

function useSetting() {
  const queryClient = useQueryClient(); // update

  const onSuccess = () => {
    queryClient.invalidateQueries(["detailfoodlist"]); // mutation 성공시 들어간 unique key 로 맵핑된 get 함수 update
  };

  const { mutate: postMutateMenu } = useMutation(postMenu, {
    onSuccess,
    // onMutate mutation 함수 시작전 실행되는 함수를 (추가)
    // onError 에러시
    // onSuccess 성공시
    // onSettled 에러든 성공이든 실행
  });
}
```

## setQueryData

mutation 에서 return 된 값을 같이 업데이트 하고싶으면 사용

```javascript
const queryClient = useQueryClient();

const mutation = useMutation(editTodo, {
  onSuccess: (data) => {
    // data가 fetchTodoById로 들어간다
    queryClient.setQueryData(["todo", { id: 5 }], data); // queryKey, newData
  },
});

const { status, data, error } = useQuery(["todo", { id: 5 }], fetchTodoById);

mutation.mutate({
  id: 5,
  name: "nkh",
});
```

## Suspense

Suspense 를 사용하여 isLoading, isError 를 통해 분기처리, 에러핸들링을 더욱 쉽게 할수있다.

```javascript
// src/index.js
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true, // global 하게 사용
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

```javascript
const { data } = useQurey("test", testApi, { suspense: true });

return (
  // isLoading이 true이면 Suspense의 fallback 내부 컴포넌트가 보여집니다.
  // isError가 true이면 ErrorBoundary의 fallback 내부 컴포넌트가 보여집니다.
  <Suspense fallback={<div>loading</div>}>
    <ErrorBoundary fallback={<div>에러 발생</div>}>
      <div>{data}</div>
    </ErrorBoundary>
  </Supense>
);
```
