import React from "react";
import styled from "styled-components";
import iconLinkedin from "../assets/iconLinkedin.png";
import iconFB from "../assets/iconFB.png";
import iconTwitter from "../assets/iconTwitter.png";
import iconInstagram from "../assets/iconInstagram.png";

const Wrapper = styled.div`
  padding: 0 30px 50px 100px;
  background: #f4f6f8;
  @media screen and (max-width: 769px) {
    padding: 0 30px 30px 100px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 30px 40px 30px;
  }
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  padding-top: 30px;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid rgba(35, 35, 39, 0.1);
  @media screen and (max-width: 376px) {
    flex-direction: column;
  }
`;
const TitleText = styled.div`
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  color: rgba(35, 35, 39, 0.7);
  font-size: 16px;
  font-weight: 500;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 769px) {
    font-size: 10px;
  }
  @media screen and (max-width: 376px) {
    font-size: 14px;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & p {
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: rgba(23, 41, 64, 0.9);
    padding-right: 15px;
    border-right: 1.5px solid #d2d9e2;
    :last-child {
      border-right: none;
    }
  }
  @media screen and (max-width: 1024px) {
    gap: 8px;
    & p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 769px) {
    gap: 6px;
    & p {
      padding-right: 10px;
      font-size: 10px;
    }
  }
  @media screen and (max-width: 376px) {
    display: none;
    & p {
      font-size: 14px;
    }
  }
`;
const MenuMobile = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
  }
`;
const MenuMobileText = styled.div`
  display: flex;
  gap: 20px;
  & p {
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: rgba(23, 41, 64, 0.9);
    padding-right: 15px;
    border-right: 1.5px solid #d2d9e2;
    :last-child {
      border-right: none;
    }
  }
`;
const Icon = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 769px) {
    gap: 10px;
    & img {
      width: 80%;
    }
  }
  @media screen and (max-width: 376px) {
    gap: 30px;
    padding-top: 15px;
    & img {
      width: 130%;
    }
  }
`;
function Footer() {
  return (
    <Wrapper>
      <Box>
        <TitleText>Copyright © Draper Startup House 2021</TitleText>
        <Menu>
          <p>Home</p>
          <p>About</p>
          <p>Stories and News</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
        </Menu>
        <MenuMobile>
          <MenuMobileText>
            <p>Home</p>
            <p>About</p>
            <p>Stories and News</p>
          </MenuMobileText>
          <MenuMobileText>
            <p>Contact</p>
            <p>Privacy Policy</p>
          </MenuMobileText>
        </MenuMobile>
        <Icon>
          <div>
            <img src={iconLinkedin} alt={""} />
          </div>
          <div>
            <img src={iconFB} alt={""} />
          </div>
          <div>
            <img src={iconTwitter} alt={""} />
          </div>
          <div>
            <img src={iconInstagram} alt={""} />
          </div>
        </Icon>
      </Box>
    </Wrapper>
  );
}

export default Footer;
