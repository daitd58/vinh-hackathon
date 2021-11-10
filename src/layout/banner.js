import React from "react";
import styled from "styled-components";
import BgrAcademy from "../asset/img/BgrAcademy.png";
import Den from "../asset/img/Den.png";

const Container = styled.div`
  background: url(${BgrAcademy});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  object-fit: cover;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  @media screen and (max-width: 376px) {
    background-position: center;
    margin-top: 80px;
  }
`;
const Logo_Den = styled.div`
  padding-top: 190px;
  padding-bottom: 28px;
  @media screen and (max-width: 376px) {
    padding: 97px 0 0;
  }
`;
const TitleHeader = styled.div`
  font-family: "Didact Gothic", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 40px;
  color: #fff;
  line-height: 50px;
  text-align: center;
  padding: 0 0 24px;
  letter-spacing: -0.015em;
  text-align: center;
  width: 35%;
  @media screen and (max-width: 1370px) {
    width: 40%;
  }
  @media screen and (max-width: 1220px) {
    width: 50%;
  }
  @media screen and (max-width: 970px) {
    width: 55%;
  }
  @media screen and (max-width: 880px) {
    width: 65%;
  }
  @media screen and (max-width: 780px) {
    width: 75%;
  }
  @media screen and (max-width: 680px) {
    font-size: 34px;
    line-height: 34px;
  }
  @media screen and (max-width: 620px) {
    font-size: 30px;
    line-height: 30px;
  }
  @media screen and (max-width: 510px) {
    font-size: 24px;
    line-height: 24px;
  }
  @media screen and (max-width: 390px) {
    padding: 24px 20px;
    font-size: 20px;
    line-height: 20px;
  }
`;

const TitleContent = styled.div`
  font-weight: 700;
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  color: #fff;
  font-style: normal;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0em;
  padding: 0 0 30px;
  width: 25%;
  @media screen and (max-width: 1260px) {
    width: 30%;
  }
  @media screen and (max-width: 1020px) {
    width: 35%;
  }
  @media screen and (max-width: 880px) {
    width: 40%;
  }
  @media screen and (max-width: 780px) {
    width: 45%;
  }
  @media screen and (max-width: 680px) {
    width: 50%;
  }
  @media screen and (max-width: 620px) {
    width: 60%;
  }
  @media screen and (max-width: 520px) {
    width: 70%;
  }
  @media screen and (max-width: 440px) {
    width: 82%;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding: 0 0 40px;
  }
`;
const BtnTitle = styled.div`
  display: flex;
  padding-bottom: 125px;
`;
const BtnClick = styled.button`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  letter-spacing: 0em;
  width: 156px;
  height: 65px;
  background: #204370;
  border-radius: 40px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 0;
  :hover {
    cursor: pointer;
  }
`;

const Banner = () => {
  return (
    <Container>
      <Logo_Den>
        <img src={Den} alt={""} />
      </Logo_Den>
      <TitleHeader>global network for mentorship and support</TitleHeader>
      <TitleContent>
        Get all the support and education you need to achieve full potential as
        an entrepreneur.
      </TitleContent>
      <BtnTitle>
        <BtnClick>Join DEN</BtnClick>
      </BtnTitle>
    </Container>
  );
};

export default Banner;
