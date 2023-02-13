import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-scroll";
import { NavigationBar, MyInfo, NavBtn, ScrollBar } from "./styles";
import { Sidebar } from "./Sidebar";

function Navbar() {
  const [OnOff, SetOnOff] = useState(false);

  const activate = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    SetOnOff(!OnOff);
  };

  return (
    <Fragment>
      <NavigationBar>
        <p>Mark1237200's Portfolio</p>

        <ScrollBar>
          <Link to="경력" spy={true} smooth={true}>
            <NavBtn>경력</NavBtn>
          </Link>
          <Link to="기술스택" spy={true} smooth={true}>
            <NavBtn>기술스택</NavBtn>
          </Link>
          <Link to="프로젝트" spy={true} smooth={true}>
            <NavBtn>프로젝트</NavBtn>
          </Link>
        </ScrollBar>

        <div>
          <MyInfo onClick={activate} activate={OnOff}>
            <span></span>
            <span></span>
            <span></span>
          </MyInfo>
        </div>
      </NavigationBar>
      {OnOff ? <Sidebar /> : ""}
    </Fragment>
  );
}

export { Navbar };
