import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo-dark.png";
import navigation from "../assets/img/navigation.png";
import SideBar from "./SideBar";

const Wrapper = styled.div`
  background-color: #0e2c51;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 90px;
  opacity: 90%;
  right: 0;
  top: 0;
  left: 0;
  z-index: 99999;
  padding: 0 30px;
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

const RightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  img {
    width: 170px;
    @media (max-width: 768px) {
      width: 145px;
    }
    @media (max-width: 376px) {
      width: 135px;
    }
  }
`;
const Menu = styled.div`
  display: flex;
  padding-left: 40px;
  gap: 5px;
  @media screen and (max-width: 1024px) {
    padding-left: 30px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const TextTitle = styled.div`
  color: #ffffff;
  font-size: 12px;
  white-space: nowrap;
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  font-weight: 700;
  border-left: 1px solid #ffffff;
  padding: 5px 10px 5px 10px;
  line-height: 8px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 1024px) {
    font-size: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;
const StyledButton = styled.button`
  height: 50px;
  padding: 0 35px;
  font-size: 16px;
  line-height: 26px;
  white-space: nowrap;
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  font-weight: bold;
  color: #2a2a2a;
  border: 1px solid #204370;
  border-radius: 25px;
  @media screen and (max-width: 1024px) {
    height: 45px;
    padding: 0 25px;
    font-size: 13px;
  }
  @media screen and (max-width: 768px) {
    height: 35px;
    padding: 0 12px;
    font-size: 10px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const Icon = styled.img`
  display: none;
  @media screen and (max-width: 480px) {
    display: inline-block;
    width: 30px;
  }
  @media screen and (max-width: 376px) {
    display: inline-block;
    width: 30px;
  }
`;
const Header = ({ open, setOpen }) => {
  return (
    <Wrapper>
      <Block>
        <LeftBlock>
          <Logo>
            <img src={logo} alt={""} />
          </Logo>
          <Menu>
            <TextTitle>CITIES</TextTitle>
            <TextTitle>VENTURES</TextTitle>
            <TextTitle>ACADEMY</TextTitle>
            <TextTitle>SERVICES</TextTitle>
            <TextTitle>ACCELERATOR</TextTitle>
            <TextTitle>ABOUT US</TextTitle>
          </Menu>
        </LeftBlock>
        <RightBlock>
          <StyledButton>Join our community</StyledButton>
          <Icon src={navigation} open={open} onClick={() => setOpen(!open)} />
        </RightBlock>
      </Block>
      <SideBar open={open} />
    </Wrapper>
  );
};

export default Header;
