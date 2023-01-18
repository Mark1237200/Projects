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
  const [url, setUrl] = useState("");
  const [src, setSrc] = useState("밑에 배너 클릭시 활성화");

  const firstProject = "./Images/Yapick.gif";
  const secondProject = "./Images/StackOverflow.png";
  const thirdProject = "./Images/SingitEx.png";

  const Click = (e) => {
    if (src !== e) {
      setIsClick(true);
    } else {
      setIsClick(!isClick);
    }
  };

  const isReady = () => {
    if (url === "준비중") {
      alert("준비중인 프로젝트 입니다.");
    } else {
      alert(
        "CUD 기능은 아직 파이어베이스 공부중입니다! 추후 학습해 기능추가 계획.."
      );
    }
  };

  return (
    <Projects>
      <Preview id="프로젝트">
        {isClick ? (
          <a onClick={isReady} href={url === "준비중" ? undefined : url}>
            <img alt="Preview" src={src} />
          </a>
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
              setSrc("./Images/Yapick.gif");
              Click(firstProject);
              setUrl("https://mark1237200-github-io-rosy.vercel.app/");
            }}
          />
        </SquareL>
        <SquareR>
          <ImgR
            alt="Project"
            src={"./Images/StackOverflow_logo.png"}
            onClick={() => {
              setSrc("./Images/StackOverflow.png");
              Click(secondProject);
              setUrl("https://mark1237200-github-io-kdxn.vercel.app/");
            }}
          />
        </SquareR>
        <SquareL>
          <ImgL
            alt="Project"
            src={"./Images/SingIt.png"}
            onClick={() => {
              setSrc("./Images/SingitEx.png");
              Click(thirdProject);
              setUrl("준비중");
            }}
          />
        </SquareL>
      </Banner>
    </Projects>
  );
}

export { Project };
