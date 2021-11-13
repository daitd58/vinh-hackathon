import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import navigationMenu from "../../assets/navigationMenu.png";
const Wrapper = styled.div`
  height: 90px;
  background: rgba(14, 44, 81, 0.8);
  backdrop-filter: blur(80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;
  left: 0;
  z-index: 99999;
  @media screen and (max-width: 376px) {
    height: 80px;
    justify-content: space-between;
    padding: 0;
  }
`;
const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  @media screen and (max-width: 376px) {
    padding: 0;
    margin-left: 22px;
  }
`;

const RightHeader = styled.div`
  padding: 0 30px;
  @media screen and (max-width: 376px) {
    padding: 0;
    margin-right: 30px;
  }
`;

const LogoContaner = styled.div`
  padding: 0 45px 0 10px;
  @media screen and (max-width: 376px) {
    padding: 0;
  }
`;

const LogoImage = styled.img`
  @media screen and (max-width: 376px) {
    height: 50px;
    width: auto;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const Category = styled.div`
  padding: 0 32px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
  border-left: 1px solid #ffffff;
  opacity: 0.7;
  font-family: "Oxygen", sans-serif;
  cursor: pointer;
`;

const CommunityButton = styled.button`
  height: 50px;
  max-width: max-content;
  padding: 0 35px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  color: #2a2a2a;
  border: 1px solid #204370;
  box-sizing: border-box;
  border-radius: 25px;
  cursor: pointer;
  transition: all 1s;
  :hover {
    filter: brightness(150%);
    
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const NavigationMenu = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 376px) {
    display: block;
  }
`;

const SideBar = styled.div`
display:none;
@media screen and (max-width: 376px) {
  backdrop-filter: blur(35px);
  display:block
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 80px;
  right: -5%;
  background: rgba(14, 44, 81, 0.8);
  display: block;
  z-index: 99999999;
  transition: all 1s;
}
  
`;

const SideBarMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  transition: ease-in-out 1s;
`;

const SideBarItem = styled.div`
  font-style: normal;
  font-weight: bold;
  line-height: 25px;
  color: #ffffff;
  opacity: 0.7;
  font-family: "Oxygen", sans-serif;
  cursor: pointer;
  padding-bottom: 20px;
  :hover {
    filter: brightness(150%);
  }
`;

function Header() {
  const [active, setActive] = useState(false);
  const toggleSideBar = () => {
    setActive(!active);
  };
  return (
    <>
      <Wrapper>
        <LeftHeader>
          <LogoContaner>
            <LogoImage src={Logo} />
          </LogoContaner>
          <CategoryContainer>
            <Category>CITIES</Category>
            <Category>VENTURES</Category>
            <Category>ACADEMY</Category>
            <Category>SERVICES</Category>
            <Category>ACCELERATOR</Category>
            <Category>ABOUT US</Category>
          </CategoryContainer>
        </LeftHeader>
        <RightHeader>
          <CommunityButton>Join our community</CommunityButton>
          <NavigationMenu onClick={toggleSideBar}>
            <img src={navigationMenu} alt="navigationMenu" />
          </NavigationMenu>
        </RightHeader>
      </Wrapper>
      <SideBar style={{ width: active ? "300px" : "0" }}>
        <SideBarMenu style={{ fontSize: active ? "20px" : "0px" }}>
          <SideBarItem>CITIES</SideBarItem>
          <SideBarItem>VENTURES</SideBarItem>
          <SideBarItem>ACADEMY</SideBarItem>
          <SideBarItem>SERVICES</SideBarItem>
          <SideBarItem>ACCELERATOR</SideBarItem>
          <SideBarItem>ABOUT US</SideBarItem>
        </SideBarMenu>
      </SideBar>
    </>
  );
}

export default Header;
