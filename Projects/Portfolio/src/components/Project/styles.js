import styled from "styled-components";

const SquareL = styled.div`
  width: 200px;
  height: 100px;
  transform: rotate(90deg) skewx(45deg);
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const SquareR = styled.div`
  width: 200px;
  height: 100px;
  transform: rotate(90deg) skewx(-45deg);
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const ImgL = styled.img`
  width: 200px;
  height: 300px;
  transform: rotate(-90deg) skewy(45deg);
  object-fit: cover;
  /* filter: blur(2px); */
`;

const ImgR = styled.img`
  width: 200px;
  height: 300px;
  transform: rotate(-90deg) skewy(-45deg);
  object-fit: cover;
  /* filter: blur(2px); */
`;

export { SquareL, SquareR, ImgL, ImgR };
