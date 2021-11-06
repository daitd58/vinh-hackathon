import React from "react";
import styled from "styled-components";
import _course from "../../asset/img/_course.png";
import _together from "../../asset/img/_together.png";
import slack from "../../asset/img/slack.png";
import Global from "../../asset/img/Global.png";

const Container = styled.div`
  padding-bottom: 100px;
`;

const TitleHeader = styled.div`
  text-transform: uppercase;
  color: #204370;
  font-size: 60px;
  line-height: 60px;
  font-weight: 500;
  padding: 100px 0 50px 100px;
`;

const Box = styled.div`
  display: flex;
  gap: 75px;
  padding: 0 100px;
`;
const BoxItem = styled.div`
  width: 100%;
  height: 160px;
  background: #f4f6f8;
  padding: 30px 30px 50px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
`;
const Image = styled.img``;
const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Number = styled.div`
  font-weight: 500;
  font-size: 56px;
  line-height: 56px;
  color: rgba(23, 41, 64, 0.1);
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
