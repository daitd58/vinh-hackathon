import React from "react";
import styled from "styled-components";

const HeaderFooter = styled.div`
  background: rgba(32, 67, 112, 1);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const TitleHeader = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 40px;
  line-height: 50px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -0.015em;
  text-align: center;
  padding: 80px 0 40px;
  width: 80%;
  @media screen and (max-width: 1200px) {
    font-size: 34px;
    line-height: 44px;
  }
  @media screen and (max-width: 1020px) {
    font-size: 28px;
    line-height: 38px;
  }
  @media screen and (max-width: 850px) {
    font-size: 24px;
    line-height: 34px;
  }
  @media screen and (max-width: 720px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
const BtnTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
`;
const BtnClick = styled.button`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  letter-spacing: 0em;
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
  color: #000;
  border: 0;
  :hover {
    cursor: pointer;
  }
`;

const Connected = () => {
  return (
    <HeaderFooter>
      <TitleHeader>
        WHERE ENTREPRENEURS AROUND THE WORLD GET CONNECTED, INSPIRED, AND
        EMPOWERED
      </TitleHeader>
      <BtnTitle>
        <BtnClick>Join Den</BtnClick>
      </BtnTitle>
    </HeaderFooter>
  );
};

export default Connected;
