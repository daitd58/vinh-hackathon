import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
const Wrapper = styled.div`
  height: 90px;
  background-color: #0e2c51;
  opacity: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;
  left: 0;
  z-index:99999;
`;
const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

const RightHeader = styled.div`
  padding: 0 30px;
`;

const LogoContaner = styled.div`
  padding: 0 45px 0 10px;
`;

const LogoImage = styled.img``;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
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
`;
function Header() {
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
        </RightHeader>
      </Wrapper>
    </>
  );
}

export default Header;
