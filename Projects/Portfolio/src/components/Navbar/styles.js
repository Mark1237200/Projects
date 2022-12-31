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
  > p {
    margin: 0px;
    font-size: 30px;
    color: #cccccc;
  }
  > div > button {
    border: none;
    background-color: #333333;
    font-size: 20px;
  }
  > div:last-child {
    padding-right: 20px;
  }
`;

const MyInfo = styled.a`
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
      props.props ? "translateY(10px) rotate(-45deg)" : ""};
  }
  > span:nth-child(2) {
    top: 10px;
    opacity: ${(props) => (props.props ? "0" : "")};
  }
  > span:nth-child(3) {
    bottom: 0;
    transform: ${(props) =>
      props.props ? "translateY(-11px) rotate(45deg)" : ""};
  }
`;

const NavBtn = styled.button`
  padding: 5px 10px;
  font-weight: 500;
  color: white;
`;

const ScrollBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 600px;
  padding-right: 200px;
`;

export { NavigationBar, MyInfo, NavBtn, ScrollBar };
