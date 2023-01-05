import React, { useState } from "react";
import { SquareL, SquareR, ImgL, ImgR, Img, Banner } from "./styles";

function Skew1({ img }) {
  return (
    <SquareL>
      <ImgL alt="Project" src={img} />
    </SquareL>
  );
}

function Skew2({ img }) {
  return (
    <SquareR>
      <ImgR alt="Project" src={img} />
    </SquareR>
  );
}

function Project() {
  const [isClick, setIsClick] = useState(false);

  const Click = () => {
    setIsClick(!isClick);
  };

  return (
    <Banner>
      {isClick ? (
        <Img
          url={
            "https://github.com/Mark1237200/Yapick_TeamProject/raw/main/docs/img/%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98.gif"
          }
        />
      ) : (
        ""
      )}
      <Skew1 onClick={Click} img={"./Images/logo.png"} />
      <Skew2 onClick={Click} img={"./Images/StackOverflow_logo.png"} />
      <Skew1 img={"./Images/SingIt.png"} />
    </Banner>
  );
}

export { Project };
