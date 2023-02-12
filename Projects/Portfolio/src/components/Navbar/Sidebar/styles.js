import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0px;
  top: 70px;
  width: 40%;
  min-width: 331px;
  max-width: 455px;
  height: 100%;
  background-color: #333333;
  font-family: "DoHyeon-Regular";
  align-items: center;
  z-index: 1;
  color: white;
  text-align: center;
`;

const ProfileImg = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding-top: 10px;
  > img {
    max-width: 200px;
    max-height: 250px;
  }
`;

const Name = styled.div`
  font-size: 36px;
  padding: 10px 0px 80px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0px;
`;

const InfoBar = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 60px;
  font-size: 18px;
  background-color: ${(props) => props.color};
  > div {
    width: 100%;
    > a {
      text-decoration: none;
      color: white;
    }
  }
  > img {
    width: 90px;
    height: 60px;
  }
`;

export { Bar, ProfileImg, Name, Info, InfoBar };
