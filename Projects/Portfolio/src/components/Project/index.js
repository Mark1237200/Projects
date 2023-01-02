import { SquareL, SquareR, ImgL, ImgR } from "./styles";

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

const Project = { Skew1, Skew2 };

export { Project };
