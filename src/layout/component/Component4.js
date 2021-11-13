import React from "react";
import styled from "styled-components";
import Group5 from "../../asset/img/Group5.png";

const Wrapper = styled.div`
  width: 100%;
  background-color: #e5e5e5;
  display: flex;
  padding-bottom: 167.81px;
  @media screen and (max-width: 376px) {
    flex-direction: column;
    padding-top: 80px;
    gap: 40px;
    padding-bottom: 79px;
  }
`;

const ContentLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  border: 0;
  box-sizing: border-box;
  padding-left: 131px;
  @media screen and (max-width: 1366px) {
    align-items: flex-start;
    padding-left: 75px;
  }
  @media screen and (max-width: 1280px) {
    align-items: flex-start;
    padding-left: 65px;
  }
  @media screen and (max-width: 1280px) {
    align-items: flex-start;
    padding-left: 40px;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
  }
`;

const ContentReponsive = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: block;
  }
`;

const MainLeft = styled.div``;

const TextBig = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 376px) {
    border: 0;
    box-sizing: border-box;
  }
`;

const TextSmall = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.8);
  text-align: left;
  padding-bottom: 16px;
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const Btn = styled.div`
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const ContentRight = styled.div`
  width: 50%;
  border: 0;
  box-sizing: border-box;
  padding-right: 131px;
  @media screen and (max-width: 1366px) {
    padding-right: 75px;
  }
  @media screen and (max-width: 1280px) {
    padding-right: 48px;
  }
  @media screen and (max-width: 1024px) {
    padding-right: 65px;
  }
  @media screen and (max-width: 768px) {
    padding-right: 40px;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding: 0 20px;
  }
`;
const ImageRight = styled.img`
  width: 100%;
  @media screen and (max-width: 376px) {
    border: 0;
    box-sizing: border-box;
    width: 100%;
  }
`;
const Text = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  text-align: left;
  @media screen and (max-width: 376px) {
    text-align: left;
    font-size: 29px;
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
  font-family: "Oxygen", sans-serif;
`;
const MainLeftR = styled.div``;

const TextSmallR = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: block;
  }
`;
const BtnR = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: flex;
    justify-content: center;
    padding-top: 32px;
  }
`;

export default function ComponentFour() {
  return (
    <Wrapper>
      <ContentLeft>
        <MainLeft>
          <TextBig>
            <Text>But First...</Text>
            <Text>you Have to Join</Text>
          </TextBig>
          <TextSmall>What are you waiting for? Join DEN today.</TextSmall>
          <Btn>
            <Button>
              <TextButton>Join Den</TextButton>
            </Button>
          </Btn>
        </MainLeft>
      </ContentLeft>
      <ContentRight>
        <ImageRight src={Group5} />
      </ContentRight>
      <ContentReponsive>
        <MainLeft>
          <TextSmallR>What are you waiting for? Join DEN today.</TextSmallR>
          <BtnR>
            <Button>
              <TextButton>Join Den</TextButton>
            </Button>
          </BtnR>
        </MainLeft>
      </ContentReponsive>
    </Wrapper>
  );
}
