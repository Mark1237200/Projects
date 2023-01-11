import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0px;
  top: 70px;
  width: 40%;
  height: 100%;
  background-color: #333333;
  font-family: "DoHyeon-Regular";
  align-items: center;
  z-index: 1;
  color: white;
  text-align: center;
`;

const ProfileImg = styled.img``;

const Name = styled.div`
  font-size: 36px;
  padding: 80px 0px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0px;
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 20px;
  background-color: #ea4335;
  > img {
    width: 90px;
    height: 60px;
  }
`;

const Github = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 18px;
  background-color: #181717;
  > img {
    width: 90px;
    height: 60px;
  }
  > a {
    text-decoration: none;
    color: white;
  }
`;

const Blog = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 20px;
  background-color: #cc0000;
  > img {
    width: 90px;
    height: 60px;
  }
  > a {
    text-decoration: none;
    color: white;
  }
`;

export { Bar, ProfileImg, Name, Info, Email, Github, Blog };
