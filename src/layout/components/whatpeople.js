import React from "react";
import styled from "styled-components";
import simon from "../../asset/img/simon.png";
import janecooper from "../../asset/img/janecooper.png";
import albertflores from "../../asset/img/albertflores.png";
import arrow from "../../asset/img/arrow.png";

const TitleContent =
  "Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut venenatis tellus in metus vulputate eu scelerisque felis. Felis done. Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(244, 246, 248, 1);
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 120px;
  padding-top: 100px;
  align-items: center;
`;
const ContentBox = styled.div`
  display: flex;
  padding: 100px 120px 0;
  gap: 30px;
`;
const TitleHeader = styled.div`
  font-family: Alternate;
  font-style: normal;
  font-size: 60px;
  line-height: 60px;
  font-weight: 500;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
`;
const IconHeader = styled.img`
  width: 121px;
  height: 60px;
`;
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 1);
  padding: 0 30px;
`;
const HeaderItem = styled.div`
  display: flex;
  & img {
    left: 30px;
    bottom: 43px;
  }
`;
const BoxTitle = styled.div``;
const TitleName = styled.div`
  font-weight: Bold;
  font-size: 20px;
  line-height: 28px;
  vertical-align: Top;
  color: #232327;
`;
const TitleWork = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #232327;
  opacity: 67%;
`;
const ViewItem = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.9);
`;
const LearnMore = styled.a`
  font-weight: Bold;
  font-size: 16px;
  line-height: 26px;
  color: #204370;
`;

const WhatPeople = () => {
  return (
    <Container>
      <HeaderBox>
        <TitleHeader>
          What PEOPLE ARE
          <br />
          SAYING ABOUT DEN
        </TitleHeader>
        <IconHeader src={arrow} alt={""} />
      </HeaderBox>
      <ContentBox>
        <ListItem>
          <HeaderItem>
            <img src={simon} alt={""} />
            <BoxTitle>
              <TitleName>Simon JD</TitleName>
              <TitleWork>Co-Founder and CEO, Travelio</TitleWork>
            </BoxTitle>
          </HeaderItem>
          <ViewItem>{TitleContent}</ViewItem>
          <LearnMore href="#">Learn more</LearnMore>
        </ListItem>
        <ListItem>
          <HeaderItem>
            <img src={janecooper} alt={""} />
            <BoxTitle>
              <TitleName>Simon JD</TitleName>
              <TitleWork>Co-Founder and CEO, Travelio</TitleWork>
            </BoxTitle>
          </HeaderItem>
          <ViewItem>{TitleContent}</ViewItem>
          <LearnMore href="#">Learn more</LearnMore>
        </ListItem>
        <ListItem>
          <HeaderItem>
            <img src={albertflores} alt={""} />
            <BoxTitle>
              <TitleName>Simon JD</TitleName>
              <TitleWork>Marketing Coordinator, Gillette </TitleWork>
            </BoxTitle>
          </HeaderItem>
          <ViewItem>{TitleContent}</ViewItem>
          <LearnMore href="#">Learn more</LearnMore>
        </ListItem>
      </ContentBox>
    </Container>
  );
};

export default WhatPeople;
