import React from "react";
import styled from "styled-components";
import Group from "../img/Group.png";
import global from "../img/global.png";
import gradure from "../img/gradure.png";
import hand from "../img/hand.png";

const MainOne = styled.div`
  width: 100%;
  padding-bottom: 100px;
  margin-top: 150px;
  @media screen and (max-width: 376px) {
    padding-bottom: 10px;
  }
`;

const Title = styled.div`
  font-family: "Pathway Gothic One", sans-serif;
  font-style: normal;
  font-weight: Bold;
  font-size: 90px;
  line-height: 90px;
  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  padding-top: 40px;
  text-align: left;
  padding-left: 50px;
  @media screen and (max-width: 376px) {
    font-size: 62px;
    padding: 0 20px;
  }
`;

const Douple = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 50px;

  @media screen and (max-width: 376px) {
    padding: 0 20px;
    flex-wrap: wrap;
    padding-top: 40px;
  }
`;

const Comimage = styled.div`
  /* color: #f4f6f8; */
  width: 264px;
  height: 264px;
  background-color: #f4f6f8;
  padding: 40px;
  @media screen and (max-width: 376px) {
    width: 305px;
    height: 200px;
    padding: 0px 20px;
    margin-top: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 376px) {
    padding: 20px 20px;
  }
`;
const Numbers = styled.div`
  font-family: Alternate;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.015em;
  width: 30px;
  height: 56px;
  color: rgba(23, 41, 64, 0.1);
  @media screen and (max-width: 376px) {
    padding: 0px 20px;
  }
`;

const Titless = styled.div`
  font-family: "Oxygen";
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: #232327;
  font-weight: 700px;
  @media screen and (max-width: 376px) {
    width: 280px;
  }
`;

const Mainfour = () => {
  return (
    <MainOne>
      <Title>How Den works</Title>
      <Douple>
        <Comimage>
          <Logo>
            <img src={`${Group}`} style={{ width: "40px", height: "40px" }} />
            <Numbers>01</Numbers>
          </Logo>
          <Titless>Say hello and interact on the DEN Slack channel</Titless>
        </Comimage>

        <Comimage>
          <Logo>
            <img src={`${gradure}`} style={{ width: "40px", height: "40px" }} />
            <Numbers>02</Numbers>
          </Logo>
          <Titless>Say hello and interact on the DEN Slack channel</Titless>
        </Comimage>

        <Comimage>
          <Logo>
            <img src={`${hand}`} style={{ width: "40px", height: "40px" }} />
            <Numbers>03</Numbers>
          </Logo>
          <Titless>Say hello and interact on the DEN Slack channel</Titless>
        </Comimage>

        <Comimage>
          <Logo>
            <img src={`${global}`} style={{ width: "40px", height: "40px" }} />
            <Numbers>04</Numbers>
          </Logo>
          <Titless>Say hello and interact on the DEN Slack channel</Titless>
        </Comimage>
      </Douple>
    </MainOne>
  );
};
export default Mainfour;
