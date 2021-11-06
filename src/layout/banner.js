import React from "react";
import styled from "styled-components";
import BgrAcademy from "../asset/img/BgrAcademy.png";
import Den from "../asset/img/Den.png";

const Container = styled.div`
  background: url(${BgrAcademy});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-bottom: 190px;
  padding-top: 90px;
`;
const Logo_Den = styled.div`
  padding-top: 190px;
`;
const TitleHeader = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 36px;
  color: #fff;
  line-height: 48px;
  text-align: center;
  padding: 0 455px;
`;

const TitleContent = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  line-height: 26px;
  text-align: center;
  padding: 0 555px;
`;
const BtnClick = styled.button`
  width: 156px;
  height: 65px;
  background: #204370;
  border-radius: 40px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 0;
`;

const Banner = () => {
  return (
    <Container>
      <Logo_Den>
        <img src={Den} preview={false} alt={""} />
      </Logo_Den>
      <TitleHeader>global network for mentorship and support</TitleHeader>
      <TitleContent>
        Get all the support and education you need to achieve full potential as
        an entrepreneur.
      </TitleContent>
      .
      <BtnClick>Join Den</BtnClick>
    </Container>
  );
};

export default Banner;
