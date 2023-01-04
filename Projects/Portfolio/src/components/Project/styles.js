import styled from "styled-components";

const SquareL = styled.div`
  width: 90px;
  height: 31px;
  transform: rotate(90deg) skewx(45deg) scale(2.5);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const SquareR = styled.div`
  width: 90px;
  height: 31px;
  transform: rotate(90deg) skewx(-45deg) scale(2.5);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const ImgL = styled.img`
  width: 50%;
  height: 430%;
  transform: rotate(-90deg) skewy(45deg);
`;

const ImgR = styled.img`
  width: 50%;
  height: 430%;
  transform: rotate(-90deg) skewy(-45deg);
`;

export { SquareL, SquareR, ImgL, ImgR };
