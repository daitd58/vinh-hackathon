import React from "react";
import styled from "styled-components";
import simon from "../../asset/img/simon.png";
import janecooper from "../../asset/img/janecooper.png";
import albertflores from "../../asset/img/albertflores.png";
import arrow from "../../asset/img/arrow.png";
import Icon from "../../asset/img/Icon.png";

const TitleContent =
  "Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut venenatis tellus in metus vulputate eu scelerisque felis. Felis done.";
const TitleContentLast =
  "Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(244, 246, 248, 1);
  position: relative;
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 130px 0;
  align-items: center;
`;
const ContentBox = styled.div`
  display: flex;
  padding: 100px 130px 280px;
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
  align-items: flex-end;
  padding-bottom: 40px;
  gap: 30px;
  & img {
    margin-top: -50px;
  }
`;
const BoxTitle = styled.div``;
const ImageIcon = styled.img`
  margin-bottom: 20px;
`;
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
  padding-bottom: 20px;
`;
const LearnMore = styled.a`
  font-weight: Bold;
  font-size: 16px;
  line-height: 26px;
  color: #204370;
  padding-bottom: 40px;
`;
const FooterBox = styled.div`
  position: absolute;
  top: 89%;
  width: 100%;
`;
const ListFooter = styled.div`
  margin: 0 130px;
  background: rgba(32, 67, 112, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const FooterTitle = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 36px;
  line-height: 36px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  padding: 58px 150px 0 150px;
`;
const LastFooterTitle = styled.div`
  font-family: "Gothic A1", sans-serif;
  display: flex;
  gap: 15px;
  font-size: 36px;
  line-height: 36px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  padding: 0 180px 58px 120px;
`;
const TitleOne = styled.div``;
const TitleTwo = styled.div``;
const TitleThree = styled.div``;
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
              <ImageIcon src={Icon} alt={""} />
              <TitleName>Simon JD</TitleName>
              <TitleWork>Co-Founder and CEO, Travelio</TitleWork>
            </BoxTitle>
          </HeaderItem>
          <ViewItem>{TitleContent}</ViewItem>
          <ViewItem>{TitleContentLast}</ViewItem>
          <LearnMore href="#">Learn more</LearnMore>
        </ListItem>
        <ListItem>
          <HeaderItem>
            <img src={janecooper} alt={""} />
            <BoxTitle>
              <ImageIcon src={Icon} alt={""} />
              <TitleName>Simon JD</TitleName>
              <TitleWork>Co-Founder and CEO, Travelio</TitleWork>
            </BoxTitle>
          </HeaderItem>
          <ViewItem>{TitleContent}</ViewItem>
          <ViewItem>{TitleContentLast}</ViewItem>
          <LearnMore href="#">Learn more</LearnMore>
        </ListItem>
        <ListItem>
          <HeaderItem>
            <img src={albertflores} alt={""} />
            <BoxTitle>
              <ImageIcon src={Icon} alt={""} />
              <TitleName>Albert Flores</TitleName>
              <TitleWork>Marketing Coordinator, Gillette </TitleWork>
            </BoxTitle>
          </HeaderItem>
          <ViewItem>{TitleContent}</ViewItem>
          <ViewItem>{TitleContentLast}</ViewItem>
          <LearnMore href="#">Learn more</LearnMore>
        </ListItem>
      </ContentBox>
      <FooterBox>
        <ListFooter>
          <FooterTitle>
            Draper Startup House is on a mission to enable
          </FooterTitle>
          <LastFooterTitle>
            <TitleOne>ONE million </TitleOne>
            <TitleTwo>entrepreneurs worldwide by</TitleTwo>
            <TitleThree>2023</TitleThree>
          </LastFooterTitle>
        </ListFooter>
      </FooterBox>
    </Container>
  );
};

export default WhatPeople;
