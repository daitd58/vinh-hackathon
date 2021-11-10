import React from "react";
import styled from "styled-components";
import imgCommunity from "../../asset/img/imgCommunity.png";

const Container = styled.div`
  background: #f4f6f8;
  width: 100%;
  height: 100%;
`;

const HeaderContent = styled.div`
  text-transform: uppercase;
  font-family: "Gothic A1", sans-serif;
  font-size: 20px;
  line-height: 20px;
  color: #232327;
  padding-bottom: 24px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: -0.015em;
  text-align: left;
  font-style: normal;
  letter-spacing: -0.015em;
`;

const CommunityContent = styled.div`
  display: flex;
  padding-bottom: 80px;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 40px;
    align-items: center;
  }
`;
const ContentLeftCommunity = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 40px;
  & img {
    width: 100%;
    display: inline-block;
    height: auto;
    box-shadow: -41px 54px 0 rgba(255, 204, 0, 1);
  }
  @media screen and (max-width: 1100px) {
    padding: 0 30px;
    & img {
      box-shadow: -30px 36px 0 rgba(255, 204, 0, 1);
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
    & img {
      width: 95%;
      margin-left: 20px;
      box-shadow: -20px 26px 0 rgba(255, 204, 0, 1);
    }
  }
  @media screen and (max-width: 620px) {
    & img {
      width: 93%;
    }
  }
  @media screen and (max-width: 375px) {
    & img {
      width: 90%;
    }
  }
`;
const ContentRightCommunity = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 140px;
  @media screen and (max-width: 1200px) {
    margin-left: 80px;
  }
  @media screen and (max-width: 950px) {
    margin-left: 30px;
  }
  @media screen and (max-width: 850px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 790px) {
    margin-left: -10px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0;
    padding: 66px 0 0;
  }
`;
const ContentCommunity = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 1);
  width: 65%;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width: 1370px) {
    width: 75%;
  }
  @media screen and (max-width: 1280px) {
    width: 82%;
  }
  @media screen and (max-width: 1195px) {
    width: 85%;
  }
  @media screen and (max-width: 1099px) {
    width: 92%;
  }
  @media screen and (max-width: 970px) {
    width: 95%;
  }
`;
const BtnClick = styled.button`
  width: 156px;
  height: 65px;
  background: #204370;
  border-radius: 40px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 0;
  :hover {
    cursor: pointer;
  }
`;
const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
  @media screen and (max-width: 768px) {
    padding-bottom: 80px;
  }
`;

const Community = () => {
  return (
    <Container>
      <CommunityContent>
        <ContentLeftCommunity>
          <img src={imgCommunity} preview={false} alt={""} />
        </ContentLeftCommunity>
        <ContentRightCommunity>
          <HeaderContent>ENTREPRENEURS JOIN THE DEN COMMUNITY</HeaderContent>
          <ContentCommunity style={{ paddingBottom: "16px" }}>
            Our members and their supporters include: founders and teams;
            mentors and advisors; remote workers and service providers; and
            angel investors and venture capitalists from around the world.
          </ContentCommunity>
          <ContentCommunity>
            As a DEN member, you can build a market-ready company much faster
            than ever before.
          </ContentCommunity>
        </ContentRightCommunity>
      </CommunityContent>
      <Btn>
        <BtnClick>Join Den</BtnClick>
      </Btn>
    </Container>
  );
};

export default Community;
