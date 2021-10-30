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
  padding-left: 100px;
`;

const CommunityContent = styled.div`
  display: flex;
  gap: 150px;
  padding-bottom: 100px;
`;
const ContentLeftCommunity = styled.div`
  background: #ffcc00;
  width: 100%;
  height: 424px;
  position: relative;
`;
const ImageCommunity = styled.img`
  position: absolute;
  left: 40px;
  bottom: 40px;
`;
const ContentRightCommunity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ContentCommunity = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: #232327;
  padding-right: 225px;
  padding-left: 100px;
`;
const BtnClick = styled.button`
  width: 156px;
  height: 65px;
  background: #204370;
  border-radius: 40px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
`;

const Community = () => {
  return (
    <Container>
      <CommunityContent>
        <ContentLeftCommunity>
          <ImageCommunity src={imgCommunity} preview={false} alt={""} />
        </ContentLeftCommunity>
        <ContentRightCommunity>
          <HeaderContent>ENTREPRENEURS JOIN THE DEN COMMUNITY</HeaderContent>
          <ContentCommunity>
            Our members and their supporters include: founders and teams;
            mentors and advisors; remote workers and service providers; and
            angel investors and venture capitalists from around the world.
          </ContentCommunity>
          <ContentCommunity>
            Our members and theiAs a DEN member, you can build a market-ready
            company much faster than ever before.
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
