import { Bar, ProfileImg, Name, Info, InfoBar } from "./styles";

function Sidebar() {
  return (
    <Bar>
      <ProfileImg>
        <img alt="Profile" src="./Images/Profile.jpg" />
      </ProfileImg>
      <Name>김재원 Jaewon Kim</Name>
      <Info>
        <InfoBar color="#ea4335">
          <img
            alt="GMAIL"
            src="https://img.shields.io/badge/-EA4335?style=for-the-badge&logo=Gmail&logoColor=black"
          />
          <div>0915kimjw@gmail.com</div>
        </InfoBar>
        <InfoBar color="#181717">
          <img
            alt="GITHUB"
            src="https://img.shields.io/badge/-181717?style=for-the-badge&logo=GitHub&logoColor=white"
          />
          <div>
            <a href="https://github.com/Mark1237200">
              https://github.com/Mark1237200
            </a>
          </div>
        </InfoBar>
        <InfoBar color="#cc0000">
          <img
            alt="JEKYLL"
            src="https://img.shields.io/badge/-CC0000?style=for-the-badge&logo=Jekyll&logoColor=white"
          />
          <div>
            <a href="https://mark1237200-github-io.vercel.app/">
              https://mark1237200-github-io.vercel.app/
            </a>
          </div>
        </InfoBar>
      </Info>
    </Bar>
  );
}

export { Sidebar };
