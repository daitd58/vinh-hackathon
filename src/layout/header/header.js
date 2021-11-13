import React, { useState } from "react";
import logo from "../../asset/img/logo-dark.png";
import styled from "styled-components";
import imgMenu from "../../asset/img/navigation-menu.png";
import { NavBar } from "../sidebar";

const Logo = styled.div`
  padding-right: 40px;
  @media screen and (max-width: 1280px) {
    padding-right: 48px;
  }
  @media screen and (max-width: 1024px) {
    padding-right: 20px;
  }
`;
const Headerr = styled.div`
  background: rgba(14, 44, 81, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(35px);
  height: 90px;
  z-index: 999;
  @media screen and (max-width: 768px) {
    padding: 0 22px;
    height: 80px;
    margin-top: -80px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 22px;
    height: 80px;
    margin-top: -80px;
  }
`;
const Select = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
`;
const Menu = styled.div`
  display: flex;
  height: 22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuSelect = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.7;
  color: #ffffff;
  text-transform: uppercase;
  border-left: 2px solid #ffffff;
  padding: 0 20px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    padding: 0 15px;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding-right: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const TextSearch = styled.div`
  border: 1px solid #204370;
  box-sizing: border-box;
  border-radius: 25px;
  background: #fff;
  line-height: 26px;
  font-size: 16px;
  font-style: normal;
  padding: 12px 35px;
  font-family: "Oxygen", sans-serif;
  text-align: center;
  font-weight: bold;
`;

const ImgMenu = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    width: 24px;
    display: block;
    margin-right: 50px;
    border: 0;
    box-sizing: border-box;
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Headerr onClick={() => setOpen(!open)}>
      <Select>
        <Logo>
          <img src={logo} alt={""} />
        </Logo>
        <Menu>
          <MenuSelect>Cities</MenuSelect>
          <MenuSelect>Ventures</MenuSelect>
          <MenuSelect>Academy</MenuSelect>
          <MenuSelect>Services</MenuSelect>
          <MenuSelect>Accelerator</MenuSelect>
          <MenuSelect>About us</MenuSelect>
        </Menu>
      </Select>
      <Search>
        <TextSearch>Join our community</TextSearch>
      </Search>
      <ImgMenu src={imgMenu} />
      <NavBar open={open} />
    </Headerr>
  );
}
