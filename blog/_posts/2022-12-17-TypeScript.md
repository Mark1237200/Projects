---
layout: posts
title: "TypeScript"
date: 2022-12-17
categories:
  - TypeScript
tags: ["TypeScript", "정리"]
---

프로젝트 종료후 배우겠다는 타입스크립트를 드디어 정리하게 된다.

타입스크립트를 사용하는 이유는 간단하게 오류나는곳을 찾기 쉽고 사용자에게 가독성을 높이기 때문이다.

프로젝트에서 리액트를 사용하면서 오류가나면 찾는데는 짧게 30분 길게 몆일 걸려 찾아 고쳤는데 타입스크립트는 컴파일 단계에서 오류를 발견할 수 있다.

또 몆몆 기능으로 개발자 코드의 의도를 명확하게 캐치할 수 있다.

<br>
<br>

## 코드 컴파일하기

```
tsc example.ts
```

커맨드에 컴파일러 실행시 동일한 코드의 Javascript 파일이 된다.

<br>
<br>
<br>

## 타입 표기

```typescript
function greeter(person: string) {
  return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
```

: string 으로 문자열만 전달 받도록 할수 있다.

문자열외 다른타입을 전달시 에러를 뱉는다.

```
error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

<br>
<br>
<br>

## 인터페이스

```typescript
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter(user);
```

firstName 과 lastName 을 가진 Person 객체에 인터페이스를 사용하여 implements 처럼 사용할 수 있다.

<br>
<br>
<br>

## 클래스

생성자와 public, private 필드를 사용해 클래스를 만들어 클래스와 인터페이스를 잘 작동시켜 사용할 수 있다.

```typescript
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
```

여기서 public 을 붙이면 firstName, muiddleInitial, lastName 속성을 모든 자식이 사용할 수 있다.

private 는 클래스 안에서만 수정, 이용이 가능하게 해준다.

<br>
<br>
<br>

## 타입가드

유효성 처리? 범위를 좁혀나감

```typescript
function isNumber(val: string | number): val is number {
  return typeof val === "number";
}
```
