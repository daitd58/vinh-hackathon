import React from "react";
import styled from "styled-components";
import _course from "../../asset/img/_course.png";
import _together from "../../asset/img/_together.png";
import slack from "../../asset/img/slack.png";
import Global from "../../asset/img/Global.png";

const Container = styled.div`
  padding: 0 130px 130px;
  @media screen and (max-width: 1200px) {
    padding: 80px 80px;
  }
  @media screen and (max-width: 890px) {
    padding: 80px 40px;
  }
  @media screen and (max-width: 768px) {
    padding: 80px 20px;
  }
`;

const TitleHeader = styled.div`
  text-transform: uppercase;
  color: #204370;
  font-family: "Didact Gothic", sans-serif;
  font-size: 50px;
  line-height: 60px;
  font-weight: 700;
  padding: 135px 0 50px 0;
  font-style: normal;
  letter-spacing: -0.015em;
  @media screen and (max-width: 768px) {
    padding: 0 0 40px;
    font-size: 30px;
    line-height: 30px;
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px;
  @media screen and (max-width: 1435px) {
    grid-gap: 30px;
  }
  @media screen and (max-width: 1356px) {
    grid-gap: 15px;
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 0;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const BoxItem = styled.div`
  width: 100%;
  height: 100%;
  background: #f4f6f8;
  padding: 20px 30px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border: 0;
  box-sizing: border-box;
  @media screen and (max-width: 1310px) {
    padding: 10px 10px 30px 20px;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 20px 40px 30px;
    gap: 36px;
  }
`;
const Title = styled.div`
  width: 100%;
  font-size: 20px;
  line-height: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  /* @media screen and (max-width: 1050px) {
    font-size: 16px;
  }
  @media screen and (max-width: 810px) {
    font-size: 22px;
  } */
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
`;
const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Number = styled.div`
  font-family: "Didact Gothic", sans-serif;
  font-size: 56px;
  line-height: 56px;
  color: rgba(23, 41, 64, 0.1);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.015em;
  text-align: right;
`;

const HowDenWork = () => {
  return (
    <Container>
      <TitleHeader>how den works</TitleHeader>
      <Box>
        <BoxItem>
          <TopContent>
            <Image src={slack} preview={false} alt={""} />
            <Number>01</Number>
          </TopContent>
          <Title>Say hello and interact on the DEN Slack channel</Title>
        </BoxItem>
        <BoxItem>
          <TopContent>
            <Image src={_course} preview={false} alt={""} />
            <Number>02</Number>
          </TopContent>
          <Title>Explore free high-quality on-demand learning content</Title>
        </BoxItem>
        <BoxItem>
          <TopContent>
            <Image src={_together} preview={false} alt={""} />
            <Number>03</Number>
          </TopContent>
          <Title>
            Meet co-founders, advisors, partners, customers, and investors
          </Title>
        </BoxItem>
        <BoxItem>
          <TopContent>
            <Image src={Global} preview={false} alt={""} />
            <Number>04</Number>
          </TopContent>
          <Title>Find opportunities in the global Draper ecosystem</Title>
        </BoxItem>
      </Box>
    </Container>
  );
};

export default HowDenWork;
