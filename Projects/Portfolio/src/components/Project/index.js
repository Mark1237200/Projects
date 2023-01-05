import React, { useState } from "react";
import { SquareL, SquareR, ImgL, ImgR, Img, Banner } from "./styles";

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
      <SquareL>
        <ImgL alt="Project" src={"./Images/logo.png"} onClick={Click} />
      </SquareL>
      <SquareR>
        <ImgR
          alt="Project"
          src={"./Images/StackOverflow_logo.png"}
          onClick={Click}
        />
      </SquareR>
      <SquareL>
        <ImgL alt="Project" src={"./Images/SingIt.png"} onClick={Click} />
      </SquareL>
    </Banner>
  );
}

export { Project };
