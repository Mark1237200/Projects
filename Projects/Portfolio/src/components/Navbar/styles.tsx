import styled from "styled-components";

const NavigationBar = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  font-family: "DoHyeon-Regular";
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: #333333;
  position: fixed;
  top: 0;
  left: 0;
  // 추후 나이트 모드 적용 예정 background-image: linear-gradient(to right, #434343 0%, black 100%);
  > p {
    cursor: default;
    margin: 0px;
    font-size: 30px;
    color: #cccccc;
    @media (max-width: 510px) {
      font-size: 24px;
    }
  }
  > div:last-child {
    padding-right: 20px;
  }
`;

const MyInfo = styled.a<{ activate: boolean }>`
  position: relative;
  width: 30px;
  height: 25px;
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  cursor: pointer;

  > span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: white;
    border-radius: 4px;
    display: inline-block;
    transition: all 0.5s;
    box-sizing: border-box;
  }
  > span:nth-child(1) {
    top: 0;
    transform: ${(props) =>
      props.activate ? "translateY(10px) rotate(-45deg)" : ""};
  }
  > span:nth-child(2) {
    top: 10px;
    opacity: ${(props) => (props.activate ? "0" : "")};
  }
  > span:nth-child(3) {
    bottom: 0;
    transform: ${(props) =>
      props.activate ? "translateY(-11px) rotate(45deg)" : ""};
  }
`;

const NavBtn = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  color: white;
  font-size: 20px;
  @media (max-width: 510px) {
    font-size: 16px;
  }
`;

const ScrollBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 600px;
`;

export { NavigationBar, MyInfo, NavBtn, ScrollBar };
