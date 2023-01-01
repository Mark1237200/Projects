import { Square, Img } from "./styles";

function Skew1({ img }) {
  return (
    <Square>
      <Img alt="Project" src={img} />
    </Square>
  );
}

const Project = { Skew1 };

export { Project };
