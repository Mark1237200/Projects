import { NavigationBar, MyInfo, NavBtn } from "./styles";

function Navbar() {
  return (
    <NavigationBar>
      <div>
        <NavBtn>a</NavBtn>
        <NavBtn>b</NavBtn>
        <NavBtn>c</NavBtn>
      </div>
      <p>Mark1237200's Portfolio</p>
      <div>
        <MyInfo>m</MyInfo>
      </div>
    </NavigationBar>
  );
}

export { Navbar };
