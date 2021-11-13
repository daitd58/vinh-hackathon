import React from "react";
import styled from "styled-components";
import Main1 from "./main1/main1";
import Main2 from "./main2/main2";
import Main3 from "./main3/main3";

const Wrapper = styled.div`
  width: 100%;
  background-color: #f4f6f8;
  padding-top: 157px;
  @media screen and (max-width: 376px) {
    padding-top: 80px;
  }
`;
const TextHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  @media screen and (max-width: 768px) {
    padding-bottom: 70px;
  }
  @media screen and (max-width: 376px) {
    padding-bottom: 60px;
  }
`;

const Text = styled.div``;

const Title = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 90px;
  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  border: 0;
  box-sizing: border-box;
  width: 956px;
  @media screen and (max-width: 768px) {
    width: 500px;
    border: 0;
    box-sizing: border-box;
    font-size: 40px;
  }
  @media screen and (max-width: 376px) {
    width: 335px;
    border: 0;
    box-sizing: border-box;
    font-size: 40px;
  }
`;

const Main = styled.div``;
const Btn = styled.div`
  padding-bottom: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 376px) {
    padding-bottom: 79px;
  }
`;
const Button = styled.div`
  width: 156px;
  height: 65px;
  border: 0;
  background: #204370;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextButton = styled.div`
  margin: 0px 10px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  color: #fff;
  font-family: "Gothic A1", sans-serif;
`;

const ComponentTwo = () => {
  return (
    <Wrapper>
      <TextHeader>
        <Text>
          <Title>Join the Draper entrepreneur network</Title>
        </Text>
      </TextHeader>
      <Main>
        <Main1></Main1>
        <Main2></Main2>
        <Main3></Main3>
      </Main>
      <Btn>
        <Button>
          <TextButton>Join Den</TextButton>
        </Button>
      </Btn>
    </Wrapper>
  );
};

export default ComponentTwo;
