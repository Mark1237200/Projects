import styled from "styled-components";

const NavigationBar = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  font-family: "DoHyeon-Regular";
  > div {
    display: flex;
    justify-content: space-around;
    width: 30%;
  }
  > p {
    margin: 0px;
  }
`;

const MyInfo = styled.button`
  align-items: right;
  justify-content: right;
  text-align: right;
  float: right;
`;

const NavBtn = styled.button`
  padding: 5px 10px;
  gap: 10px 0px;
`;

export { NavigationBar, MyInfo, NavBtn };
