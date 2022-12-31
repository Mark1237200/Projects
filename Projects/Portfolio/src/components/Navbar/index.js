import { useState } from "react";
import { NavigationBar, MyInfo, NavBtn, ScrollBar } from "./styles";

function Navbar() {
  const [OnOff, SetOnOff] = useState(false);

  const activate = (e) => {
    e.preventDefault();
    SetOnOff(!OnOff);
  };

  return (
    <NavigationBar>
      <p>Mark1237200's Portfolio</p>

      <ScrollBar>
        <NavBtn>경력</NavBtn>
        <NavBtn>기술스택</NavBtn>
        <NavBtn>프로젝트</NavBtn>
      </ScrollBar>

      <div>
        <MyInfo onClick={activate} props={OnOff}>
          <span></span>
          <span></span>
          <span></span>
        </MyInfo>
      </div>
    </NavigationBar>
  );
}

export { Navbar };
