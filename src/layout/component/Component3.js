import React from "react";
import styled from "styled-components";
import Group1 from "../../asset/img/slack.png";
import Group2 from "../../asset/img/course.png";
import Group3 from "../../asset/img/together.png";
import Group4 from "../../asset/img/network.png";

const Wrapper = styled.div`
  background-color: #e5e5e5;
  padding-bottom: 131px;
  @media screen and (max-width: 376px) {
    padding-bottom: 0;
  }
`;

const Text = styled.div`
  padding-top: 137px;
  padding-bottom: 48px;
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 376px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

const TextHeader = styled.div`
  width: auto;
  padding-left: 131px;
  @media screen and (max-width: 1366px) {
    padding-left: 75px;
  }
  @media screen and (max-width: 1280px) {
    padding-left: 48px;
    @media screen and (max-width: 768px) {
      padding-left: 40px;
    }
  }
  @media screen and (max-width: 376px) {
    padding-left: 20px;
  }
`;

const Title = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  text-align: left;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  @media screen and (max-width: 376px) {
    font-size: 30px;
  }
`;

const Main = styled.div`
  display: grid;
  grid-gap: 0px 70px;
  grid-template-columns: repeat(4, 1fr);
  background-color: #e5e5e5;
  padding: 0 134px;
  @media screen and (max-width: 1366px) {
    padding: 0 75px;
    grid-gap: 0px 60px;
  }
  @media screen and (max-width: 1280px) {
    padding: 0 48px;
    grid-gap: 0px 50px;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px 60px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 40px;
    grid-gap: 20px 40px;
  }
  @media screen and (max-width: 376px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
    grid-gap: 20px 0;
  }
`;

const Content = styled.div`
  background-color: #f4f6f8;
  border: 0;
  text-align: left;
`;
const Group = styled.div`
  align-self: flex-end;
  padding-left: 44px;
  padding-top: 40px;
  &img {
  }
  @media screen and (max-width: 1280px) {
    /* padding-left: 20px;
    padding-top: 30px; */
  }
  @media screen and (max-width: 376px) {
    padding-left: 30px;
    padding-top: 30px;
  }
`;

const Number = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  text-align: right;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: rgba(23, 41, 64, 0.1);
  align-self: flex-start;
  padding-right: 20px;
  padding-top: 19px;
  @media screen and (max-width: 1280px) {
    /* padding-top: 20px;
    padding-right: 15px; */
  }
  @media screen and (max-width: 376px) {
    padding-top: 20px;
  }
`;

const TextGroup = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #232327;
  padding: 32px 36px 25px 44px;
  border: 0;
  box-sizing: border-box;
  @media screen and (max-width: 1280px) {
    padding: 32px 40px 25px 44px;
  }
  @media screen and (max-width: 1280px) {
    /* padding: 32px 15px 30px 20px; */
  }
  @media screen and (max-width: 376px) {
    padding: 42px 20px 40px 30px;
  }
`;
const HeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function ComponetThree() {
  return (
    <Wrapper>
      <Text>
        <TextHeader>
          <Title>How Den works</Title>
        </TextHeader>
      </Text>
      <Main>
        <Content>
          <HeaderGroup>
            <Group>
              <img src={Group1} />
            </Group>
            <Number>01</Number>
          </HeaderGroup>
          <TextGroup>Say hello and interact on the DEN Slack channel</TextGroup>
        </Content>
        <Content>
          <HeaderGroup>
            <Group>
              <img src={Group2} />
            </Group>
            <Number>02</Number>
          </HeaderGroup>
          <TextGroup>
            Explore free high-quality on-demand learning content
          </TextGroup>
        </Content>
        <Content>
          <HeaderGroup>
            <Group>
              <img src={Group3} />
            </Group>
            <Number>03</Number>
          </HeaderGroup>
          <TextGroup>
            Meet co-founders, advisors, partners, customers, and investors
          </TextGroup>
        </Content>
        <Content>
          <HeaderGroup>
            <Group>
              <img src={Group4} />
            </Group>
            <Number>04</Number>
          </HeaderGroup>
          <TextGroup>
            Find opportunities in the global Draper ecosystem
          </TextGroup>
        </Content>
      </Main>
    </Wrapper>
  );
}
