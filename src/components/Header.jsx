import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import anhnenone from "../img/anhnen.png";
import anhtwo from "../img/Title.png";
import Line from "../img/Line.png";
import menu from "../img/thanhbar.png";

const Headerbar = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;
  padding: 0 40px;
  background: #0e2c51;
  right: 0;
  top: 0;
  left: 0;
`;

const Headerbardouble = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 376px) {
    height: 60px;
  }
`;
const Listone = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.div`
  width: 25%;
  & img {
    width: 100%;
  }
  @media screen and (max-width: 376px) {
    width: 156px;
    height: 50px;
    justify-content: space-between;
  }
`;

const List = styled.div`
  display: flex;
  padding-left: 30px;
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const Barlist = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  white-space: nowrap;
  color: #ffffff;
  opacity: 0.7;
  padding: 0 30px;
  border-left: 1px solid #ffffff;
  @media screen and (max-width: 1280px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 12px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const StyleMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: flex;
    & img {
      width: 100%;
    }
  }
`;
const Linkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
    padding-right: 28px;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const Link = styled.button`
  height: 50px;
  padding: 0 35px;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  color: #2a2a2a;
  border: 1px solid #204370;
  border-radius: 25px;
  @media screen and (max-width: 1024px) {
    height: 45px;
    padding: 0 25px;
    font-size: 13px;
  }
  @media screen and (max-width: 769px) {
    height: 35px;
    padding: 0 12px;
    font-size: 10px;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const Header = () => {
  return (
    <Headerbar>
      <Headerbardouble>
        <Listone>
          <Img>
            <img src={logo} style={{ width: "100%" }} />
          </Img>
          <List>
            <Barlist>CITIES</Barlist>
            <Barlist>VENTURES</Barlist>
            <Barlist>ACDEMY</Barlist>
            <Barlist>SERVICES</Barlist>
            <Barlist>ACCELERATOR</Barlist>
            <Barlist>ABOUT US</Barlist>
          </List>
        </Listone>
        <Linkbox>
          <Link>Join our community</Link>
        </Linkbox>
        <StyleMenuIcon>
          <img src={menu} alt={""} />
        </StyleMenuIcon>
      </Headerbardouble>
    </Headerbar>
  );
};
export default Header;
