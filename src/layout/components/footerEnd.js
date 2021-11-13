import React from "react";
import styled from "styled-components";
import linkedin from "../../asset/img/linkedin.png";
import facebook from "../../asset/img/facebook.png";
import twitter from "../../asset/img/twitter.png";
import instagram from "../../asset/img/instagram.png";

const FooterEnd = styled.div`
  padding: 35px 40px 40px 130px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1280px) {
    padding: 35px 40px 40px 80px;
  }
  @media screen and (max-width: 1024px) {
    padding: 35px 40px 40px 40px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px 50px;
    align-items: center;
  }
`;
const TitleEnd = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(35, 35, 39, 0, 7);
`;
const Menu = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (max-width: 768px) {
    padding: 18px 0 40px;
    justify-content: center;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
const MenuItem = styled.div`
  border-left: 1px solid rgba(210, 217, 226, 1);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  padding: 0 24px;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 10px;
  }
`;
const HomeMenuItem = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  padding: 0 24px;
  :hover {
    cursor: pointer;
  }  
  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 376px) {
    padding-left: 0;
  }
`;
const ContactMenuItem = styled.div`
  border-left: 1px solid rgba(210, 217, 226, 1);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  padding: 0 24px;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 376px) {
    border: none;
  }
`;
const StoriesMenuItem = styled.div`
  border-left: 1px solid rgba(210, 217, 226, 1);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  padding: 0 24px;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 376px) {
    padding-right: 0;
  }
`;
const Icons = styled.div`
  display: flex;
  gap: 20px;
  & img {
    :hover {
      cursor: pointer;
    }
  }
`;

const End = () => {
  return (
    <FooterEnd>
      <TitleEnd>Copyright © Draper Startup House 2021</TitleEnd>
      <Menu>
        <HomeMenuItem href="#">Home</HomeMenuItem>
        <MenuItem href="#">About</MenuItem>
        <StoriesMenuItem href="#">Stories and News</StoriesMenuItem>
        <ContactMenuItem href="#">Contact</ContactMenuItem>
        <MenuItem href="#">Privacy Policy</MenuItem>
      </Menu>
      <Icons>
        <a href="https://www.linkedin.com/">
          <img src={linkedin} alt={""} />
        </a>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt={""} />
        </a>
        <a href="https://www.twitter.com/">
          <img src={twitter} alt={""} />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagram} alt={""} />
        </a>
      </Icons>
    </FooterEnd>
  );
};

export default End;
