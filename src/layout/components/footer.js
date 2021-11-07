import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 80px 0 0;
`;
const HeaderFooter = styled.div`
  background: rgba(32, 67, 112, 1);
`;
const TitleHeader = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 36px;
  line-height: 56px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -0.015em;
  text-align: center;
  padding: 80px 220px 40px 220px;
`;
const BtnTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
`;
const BtnClick = styled.button`
  width: 156px;
  height: 65px;
  background: rgba(255, 204, 0, 1);
  border-radius: 40px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 0;
`;
const ViewFooter = styled.div`
    padding-top: 100px;
`;

const Footer = () => {
  return (
    <Container>
      <HeaderFooter>
        <TitleHeader>
          WHERE ENTREPRENEURS AROUND THE WORLD GET CONNECTED, INSPIRED, AND
          EMPOWERED
        </TitleHeader>
        <BtnTitle>
          <BtnClick>Join Den</BtnClick>
        </BtnTitle>
      </HeaderFooter>
      <ViewFooter></ViewFooter>
    </Container>
  );
};

export default Footer;
