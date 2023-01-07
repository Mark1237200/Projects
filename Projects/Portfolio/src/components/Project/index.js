import React, { useState } from "react";
import { SquareL, SquareR, ImgL, ImgR, Img, Projects } from "./styles";
// import { Banner } from "../Banner";

function Project() {
  const [isClick, setIsClick] = useState(false);
  const [url, setUrl] = useState("");

  const Click = () => {
    setIsClick(!isClick);
  };
  console.log(url);

  return (
    <Projects>
      {isClick ? <Img alt="Preview" src={url} /> : ""}
      <SquareL>
        <ImgL
          alt="Project"
          src={"./Images/logo.png"}
          onClick={() => {
            setUrl(
              "https://github.com/Mark1237200/Yapick_TeamProject/raw/main/docs/img/%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98.gif"
            );
            Click();
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
          }}
        />
      </SquareR>
      <SquareL>
        <ImgL alt="Project" src={"./Images/SingIt.png"} onClick={Click} />
      </SquareL>
    </Projects>
  );
}

export { Project };
