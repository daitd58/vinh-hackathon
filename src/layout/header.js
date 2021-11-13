import React, { useState } from "react";
import styled from "styled-components";
import logo_dark from "../asset/img/logo-dark.png";
import menu from "../asset/img/menu.png";
import { NavBar } from "./sideBar";
import close from "../asset/img/close.png";

const Nav = styled.div`
  display: flex;
  background: rgba(14, 44, 81, 0.8);
  backdrop-filter: blur(35px);
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  top: 0;
  @media screen and (max-width: 376px) {
    height: 80px;
  }
`;
const Logo_Dark = styled.div`
  display: flex;
  gap: 44px;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
  @media screen and (max-width: 376px) {
    justify-content: space-between;
    padding-left: 22px;
  }
`;
const Menu = styled.div`
  display: flex;
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const MenuItem = styled.div`
  border-left: 1px solid #ffffff;
  color: #fff;
  padding: 0 32px;
  font-family: "Oxygen", sans-serif;
  font-size: 12px;
  line-height: 22px;
  opacity: 70%;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: center;
  :hover {
    cursor: pointer;
    background: #0d2538;
  }
  @media screen and (max-width: 1280px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 12px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 8px;
    display: none;
  }
`;
const MenuIcon = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    padding-right: 28px;
  }
`;
const CloseIcon = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    padding-right: 28px;
  }
`;
const Search = styled.div`
  padding-right: 30px;
  @media screen and (max-width: 768px) {
    padding-right: 28px;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const SearchContent = styled.div`
  font-size: 16px;
  font-family: "Oxygen", sans-serif;
  line-height: 26px;
  font-weight: 700;
  color: #2a2a2a;
  display: flex;
  font-style: normal;
  letter-spacing: 0em;
  align-items: center;
  background: #fff;
  padding: 10px 30px;
  justify-content: center;
  border-radius: 30px;
  box-sizing: border-box;
  border: 1px solid #204370;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo_Dark>
        <img src={logo_dark} alt={""} />
        <Menu>
          <MenuItem href="#">CITIES</MenuItem>
          <MenuItem href="#">VENTURES</MenuItem>
          <MenuItem href="#">ACADEMY</MenuItem>
          <MenuItem href="#">SERVICES</MenuItem>
          <MenuItem href="#">ACCELERATOR</MenuItem>
          <MenuItem href="#">ABOUT US</MenuItem>
        </Menu>
      </Logo_Dark>
      {open ? (
        <CloseIcon onClick={() => setOpen(!open)} src={close} alt={""} />
      ) : (
        <MenuIcon
          onClick={() => setOpen(!open)}
          open={open}
          src={menu}
          alt={""}
        />
      )}

      <NavBar open={open} />
      <Search>
        <SearchContent>Join our community</SearchContent>
      </Search>
    </Nav>
  );
};

export default Header;
