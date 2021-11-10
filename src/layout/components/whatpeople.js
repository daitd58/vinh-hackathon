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
  padding: 130px 130px 0;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 80px 20px 40px;
  }
`;
const ContentBox = styled.div`
  display: flex;
  padding: 90px 130px 120px;
  gap: 30px;
`;
const TitleHeader = styled.div`
  text-transform: uppercase;
  color: #204370;
  font-family: "Didact Gothic", sans-serif;
  font-size: 50px;
  line-height: 60px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -0.015em;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
  }
`;
const IconHeader = styled.img`
  width: 121px;
  height: 60px;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 1);
  padding: 0 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  font-family: "Oxygen", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  vertical-align: Top;
  color: #232327;
  font-style: normal;
  letter-spacing: 0em;
  text-align: left;
`;
const TitleWork = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #232327;
  opacity: 67%;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
`;
const ViewItem = styled.div`
  font-size: 16px;
  font-family: "Oxygen", sans-serif;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.9);
  padding-bottom: 20px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
`;
const LearnMore = styled.a`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: #204370;
  padding-bottom: 40px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
`;
const FooterBox = styled.div`
  position: absolute;
  top: 89%;
  width: 100%;
  @media screen and (max-width: 768px) {
    position: relative;
    margin-bottom: -100px;
  }
`;
const ListFooter = styled.div`
  margin: 0 130px;
  background: rgba(32, 67, 112, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;
const FooterTitle = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 40px;
  line-height: 50px;
  color: #fff;
  text-transform: uppercase;
  padding: 58px 120px 0 120px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.015em;
  text-align: left;
  @media screen and (max-width: 768px) {
    padding: 65px 20px;
  }
`;
const LastFooterTitle = styled.div`
  display: flex;
  gap: 15px;
  padding: 0 150px 58px 80px;
`;
const TitleOne = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 40px;
  line-height: 50px;
  font-weight: 500;
  letter-spacing: -0.015em;
  text-align: left;
  color: #fff;
  text-transform: uppercase;
`;
const TitleTwo = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 40px;
  line-height: 50px;
  font-weight: 500;
  letter-spacing: -0.015em;
  text-align: left;
  color: #fff;
  text-transform: uppercase;
`;
const TitleThree = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 40px;
  line-height: 50px;
  font-weight: 500;
  letter-spacing: -0.015em;
  text-align: left;
  color: #fff;
  text-transform: uppercase;
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
