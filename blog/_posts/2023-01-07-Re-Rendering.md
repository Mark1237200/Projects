---
layout: posts
title: "CSS transition"
date: 2023-01-07
categories:
  - Yapick
tags: ["Yapick", "트러블 슈팅", "React"]
---

포트폴리오를 제작하면서 아무래도 디자인과는 거리가 먼 나의 구상도에 코딩 과정에서 허탈할 수 밖에 없었다..

![portfolio.png](/assets/img/portfolio.png)

완성된 나의 포트폴리오와는 다르게 되었지만 초안에 비해 나름 만족스럽게 나왔다고 생각한다. ~~넣고 싶었던 기능은 어떻게든 구겨 넣었기 때문에..~~

<br>

그 과정에서 겪었던 문제를 트러블슈팅으로 블로깅하자 가져온 첫 문제는 CSS 관련 애니메이션 이였다.

<br>

초안과 같이 90도 수직으로 기울인 마름모를 이쁘게 정렬하여 해당 도형 영역을 클릭시 프로젝트 이미지가 위에 생성되며 다시 같은 도형 영역을 누르면 없어지고 다른 프로젝트 도형을 누르면 없어지지 않은채로 다른 프로젝트가 바로 보이게 된다.

<br>

1.0 완성본에는 이게 다 이지만, 최종적으로는 이미지를 렌더링하여 불러올 동안 로딩 이미지와 자연스럽게 열리도록 애니메이션도 추가해볼 계획이다.

<br>

저 마름모꼴의 도형을 만들기 위해서 border 와 변형시키기위해 transform 에 rotate 와 skewx, scale 옵션을 주었다.

```javascript
const SquareL = styled.button`
  width: 90px;
  height: 35px;
  transform: rotate(90deg) skewx(45deg) scale(2.5);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  @media (max-width: 970px) {
    width: 62px;
    height: 25px;
  }
`;
```

<br>

skewx 로 45도 기울여 마름모로 만들고 rotate 로 수직으로 90도 돌려 세워줬다. 하지만 내가 부딫힌 문제는 배경 이미지에 있었다.

![7.png](/assets/img/7.png)

<br>

background-image 로 넘치는 부분은 object-fit: cover 로 이쁘게 정리하려 하였으나..
