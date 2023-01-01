import styled from "styled-components";

const Square = styled.div`
  width: 200px;
  height: 100px;
  transform: rotate(90deg) skewx(45deg);
  overflow: hidden;
  text-align: center;
`;

const Img = styled.img`
  width: 150%;
  height: 150%;
  transform: rotate(-40deg);
`;

export { Square, Img };
