import React from "react";
import styled from "styled-components";
import anh from "../../src/img/anhnen.png";
import anhone from "../img/Title.png";
import Mobile from "../img/mobile.png";

const Wrapper = styled.div`
  background-image: url(${anh});
  background-size: cover;
  background-position: center;
  object-fit: cover;
  width: 100%;
  height: 700px;

  @media screen and (max-width: 376px) {
    background-image: url(${Mobile});
    background-repeat: no-repeat;
    background-size: cover;
    width: auto;
  }
`;

const TitlleCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  padding: 180px 0px;
`;
const Img = styled.img`
  width: 183px;
  height: 73px;
  @media screen and (max-width: 376px) {
    margin-top: 0px;
  }
`;
const Title = styled.div`
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 500;
  line-height: 56px;
  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  width: 450px;
  height: 112px;
  @media screen and (max-width: 376px) {
    font-size: 30px;
    width: 310px;
    height: 90px;
    line-height: 36px;
  }
`;

const Titlepage = styled.div`
  font-family: Oxygen;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  width: 346px;
  height: 52px;
  margin-top: 24px;
  @media screen and (max-width: 376px) {
    font-size: 16px;
    width: 335px;
    line-height: 26px;
    margin-top: 24px;
  }
`;

const Linkbox = styled.div`
  width: 156px;
  height: 65px;
  background-color: #204370;
  border-radius: 40px;
  margin: 33px 30px;
  @media screen and (max-width: 376px) {
    width: 156px;
    margin-top: 40px;
  }
`;

const Link = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #fff;
  padding: 18px 45px;
`;

const Background = () => {
  return (
    <Wrapper>
      <TitlleCenter>
        <Img src={`${anhone}`} />;
        <Title>GLOBAL NETWORK FOR MENTORSHIP AND SUPPORT</Title>
        <Titlepage>
          Get all the support and education you need to achieve full potential
          as an entrepreneur.
        </Titlepage>
        <Linkbox>
          <Link>Join DEN</Link>
        </Linkbox>
      </TitlleCenter>
    </Wrapper>
  );
};
export default Background;
