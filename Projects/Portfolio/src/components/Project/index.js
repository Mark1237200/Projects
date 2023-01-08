import React, { useState } from "react";
import {
  SquareL,
  SquareR,
  ImgL,
  ImgR,
  Projects,
  Preview,
  Banner,
} from "./styles";

function Project() {
  const [isClick, setIsClick] = useState(false);
  const [url, setUrl] = useState("밑에 배너 클릭시 활성화");
  const [preUrl, setPreUrl] = useState("");

  const Click = () => {
    if (url === preUrl) {
      setIsClick(false);
    } else {
      setIsClick(true);
    }
  };

  return (
    <Projects>
      <Preview>{isClick ? <img alt="Preview" src={url} /> : ""}</Preview>
      <Banner>
        <SquareL>
          <ImgL
            alt="Project"
            src={"./Images/logo.png"}
            onClick={() => {
              setUrl(
                "https://github.com/Mark1237200/Yapick_TeamProject/raw/main/docs/img/%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98.gif"
              );
              Click();
              setPreUrl(url);
            }}
          />
        </SquareL>
        <SquareR>
          <ImgR
            alt="Project"
            src={"./Images/StackOverflow_logo.png"}
            onClick={() => {
              setUrl(
                "https://github.com/Mark1237200/Stack_Overflow_Project/raw/main/img/question.png"
              );
              Click();
              setPreUrl(url);
            }}
          />
        </SquareR>
        <SquareL>
          <ImgL alt="Project" src={"./Images/SingIt.png"} onClick={Click} />
        </SquareL>
      </Banner>
    </Projects>
  );
}

export { Project };
