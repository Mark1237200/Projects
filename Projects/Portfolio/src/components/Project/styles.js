import styled from "styled-components";

const SquareL = styled.button`
  width: 90px;
  height: 35px;
  transform: rotate(90deg) skewx(45deg) scale(2.5);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const SquareR = styled.button`
  width: 90px;
  height: 35px;
  transform: rotate(90deg) skewx(-45deg) scale(2.5);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const ImgL = styled.img`
  width: 80%;
  height: 400%;
  transform: rotate(-90deg) skewy(45deg);
`;

const ImgR = styled.img`
  width: 80%;
  height: 400%;
  transform: rotate(-90deg) skewy(-45deg);
`;

const Preview = styled.div`
  width: 1000px;
  height: 500px;
  padding: 150px 10px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Banner = styled.div`
  display: flex;
`;

export { SquareL, SquareR, ImgL, ImgR, Projects, Preview, Banner };
