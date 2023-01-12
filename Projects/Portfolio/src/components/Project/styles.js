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
  @media (max-width: 970px) {
    width: 62px;
    height: 25px;
  }
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
  @media (max-width: 970px) {
    width: 62px;
    height: 25px;
  }
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
  padding: 150px 0px;
  > img {
    max-width: 1200px;
    max-height: 600px;
    @media (max-width: 970px) {
      max-width: 600px;
      max-height: 500px;
    }
    @media (max-width: 600px) {
      max-width: 420px;
      max-height: 500px;
    }
  }
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div`
  display: flex;
`;

export { SquareL, SquareR, ImgL, ImgR, Projects, Preview, Banner };
