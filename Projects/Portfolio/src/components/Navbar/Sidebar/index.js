import { Bar, ProfileImg, Name, Info, Email, Github, Blog } from "./styles";

function Sidebar() {
  return (
    <Bar>
      <ProfileImg src="내 사진" />
      <Name>김재원 Jaewon Kim</Name>
      <Info>
        <Email>
          <img
            alt="GMAIL"
            src="https://img.shields.io/badge/-EA4335?style=for-the-badge&logo=Gmail&logoColor=black"
          />
          0915kimjw@gmail.com
        </Email>
        <Github>
          <img
            alt="GITHUB"
            src="https://img.shields.io/badge/-181717?style=for-the-badge&logo=GitHub&logoColor=white"
          />
          <a href="https://github.com/Mark1237200">
            https://github.com/Mark1237200
          </a>
        </Github>
        <Blog>
          <img
            alt="JEKYLL"
            src="https://img.shields.io/badge/-CC0000?style=for-the-badge&logo=Jekyll&logoColor=white"
          />
          <a href="https://mark1237200-github-io.vercel.app/">
            https://mark1237200-github-io.vercel.app/
          </a>
        </Blog>
      </Info>
    </Bar>
  );
}

export { Sidebar };
