---
layout: posts
title: "onClick 함수 실행 무한 리렌더링 오류"
date: 2023-01-07
categories:
  - JavaScript
tags: ["JavaScript", "트러블 슈팅", "React"]
---

블로깅 적기위해 메모용도로 적어둠

```javascript
// 해결전 오류 코드
const [url, setUrl] = useState("");
const ConnectUrl = (e) => {
  setUrl(e)
}

      <Banner isClick={isClick} url={url} />
      <SquareL>
        <ImgL
          alt="Project"
          src={"./Images/logo.png"}
          onClick={
            (Click,
              ConnectUrl(
                "https://github.com/Mark1237200/Yapick_TeamProject/raw/main/docs/img/%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98.gif"
              ))
          }
        />
      </SquareL>


      // 해결 후
        const [url, setUrl] = useState("");

      <Banner isClick={isClick} url={url} />
      <SquareL>
        <ImgL
          alt="Project"
          src={"./Images/logo.png"}
          onClick={
            (Click,
            () =>
              setUrl(
                "https://github.com/Mark1237200/Yapick_TeamProject/raw/main/docs/img/%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98.gif"
              ))
          }
        />
      </SquareL>
```
