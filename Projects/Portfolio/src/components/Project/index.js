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

  const firstProject = "./Images/Yapick.gif";
  const secondProject = "./Images/StackOverflow.png";
  const thirdProject = "./Images/SingitEx.png";

  const Click = (e) => {
    if (url !== e) {
      setIsClick(true);
      console.log("false");
    } else {
      setIsClick(!isClick);
      console.log("true");
    }
  };

  return (
    <Projects>
      <Preview id="프로젝트">
        {isClick ? (
          <img alt="Preview" src={url} />
        ) : (
          <img alt="ClickBannerToSee" src="./Images/preview.png" />
        )}
      </Preview>
      <Banner>
        <SquareL>
          <ImgL
            alt="Project"
            src={"./Images/logo.png"}
            onClick={() => {
              setUrl("./Images/Yapick.gif");
              Click(firstProject);
            }}
          />
        </SquareL>
        <SquareR>
          <ImgR
            alt="Project"
            src={"./Images/StackOverflow_logo.png"}
            onClick={() => {
              setUrl("./Images/StackOverflow.png");
              Click(secondProject);
            }}
          />
        </SquareR>
        <SquareL>
          <ImgL
            alt="Project"
            src={"./Images/SingIt.png"}
            onClick={() => {
              setUrl("./Images/SingitEx.png");
              Click(thirdProject);
            }}
          />
        </SquareL>
      </Banner>
    </Projects>
  );
}

export { Project };
