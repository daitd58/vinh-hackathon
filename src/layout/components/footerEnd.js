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
`;
const Icons = styled.div`
  display: flex;
  gap: 20px;
`;

const End = () => {
  return (
    <FooterEnd>
      <TitleEnd>Copyright © Draper Startup House 2021</TitleEnd>
      <Menu>
        <HomeMenuItem href="#">Home</HomeMenuItem>
        <MenuItem href="#">About</MenuItem>
        <MenuItem href="#">Stories and News</MenuItem>
        <MenuItem href="#">Contact</MenuItem>
        <MenuItem href="#">Privacy Policy</MenuItem>
      </Menu>
      <Icons>
        <img src={linkedin} alt={""} />
        <img src={facebook} alt={""} />
        <img src={twitter} alt={""} />
        <img src={instagram} alt={""} />
      </Icons>
    </FooterEnd>
  );
};

export default End;
