import React from "react";
import styled from "styled-components";
import logo_dark from "../asset/img/logo-dark.png";

const Nav = styled.div`
  display: flex;
  background: #0e2c51;
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`;
const Logo_Dark = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
`;
const Menu = styled.div`
  display: flex;
  gap: 10px;
`;
const MenuItem = styled.div`
  border-left: 1px solid #ffffff;
  color: #fff;
  padding: 0 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12px;
  line-height: 22px;
`;
const Search = styled.div`
  padding-right: 40px;
`;
const SearchContent = styled.div`
  font-size: 16px;
  line-height: 26px;
  font-weight: bold;
  color: #2a2a2a;
  display: flex;
  align-items: center;
  background: #fff;
  height: 50px;
  width: 220px;
  justify-content: center;
  border-radius: 30px;
  box-sizing: border-box;
  border: 1px solid #204370;
`;

const Header = () => {
  return (
    <Nav>
      <Logo_Dark>
        <img src={logo_dark} preview={false} alt={""} />
        <Menu>
          <MenuItem href="#">CITIES</MenuItem>
          <MenuItem href="#">VENTURES</MenuItem>
          <MenuItem href="#">ACADEMY</MenuItem>
          <MenuItem href="#">SERVICES</MenuItem>
          <MenuItem href="#">ACCELERATOR</MenuItem>
          <MenuItem href="#">ABOUT US</MenuItem>
        </Menu>
      </Logo_Dark>
      <Search>
        <SearchContent>Join our community</SearchContent>
      </Search>
    </Nav>
  );
};

export default Header;
