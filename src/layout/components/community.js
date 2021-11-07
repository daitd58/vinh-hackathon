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
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: #232327;
  padding-bottom: 24px;
`;

const CommunityContent = styled.div`
  display: flex;
  padding-bottom: 100px;
  width: 100%;
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
`;
const ContentRightCommunity = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 140px;
`;
const ContentCommunity = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: #232327;
  padding-right: 225px;
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
`;
const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
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
          <ContentCommunity style={{paddingBottom: '16px'}}>
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
