import React from "react";
import styled from "styled-components";
import imgNetwork from "../../asset/img/imgNetwork.png";

const Container = styled.div`
  background: #f4f6f8;
  width: 100%;
  height: 100%;
`;
const TitleHeader = styled.div`
  color: #204370;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  font-weight: 500;
  padding: 150px 0 100px;
`;
const NetworkContent = styled.div`
  display: flex;
  padding-bottom: 150px;
  width: 100%;
`;
const ContentLeftNetwork = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 40px;
  & img {
    width: 100%;
    display: inline-block;
    height: auto;
    box-shadow: -41px 54px 0 rgba(76, 143, 204, 1);
  }
`;
const ContentRightNetwork = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 140px;
`;
const HeaderContent = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: #232327;
  padding-bottom: 24px;
`;
const ContentNetwork = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.7);
  padding-right: 225px;
  padding-bottom: 24px;
`;
const Item = styled.li`
  font-size: 14px;
  line-height: 22px;
  color: #232327;
  padding-bottom: 16px;
`;

const Entrepreneur = () => {
  return (
    <Container>
      <TitleHeader>Join the Draper entrepreneur network</TitleHeader>
      <NetworkContent>
        <ContentLeftNetwork>
          <img src={imgNetwork} alt={""} />
        </ContentLeftNetwork>
        <ContentRightNetwork>
          <HeaderContent>Connect with a global network</HeaderContent>
          <ContentNetwork>
            DEN membership connects you with inspiring people and ideas to
            empower your entrepreneurial or fundraising journey.
          </ContentNetwork>
          <Item>Discover useful resources, software credits, and perks</Item>
          <Item>Find the best events and training programs</Item>
          <Item>Meet co-founders, advisors, and partners</Item>
          <Item>Search and discover trending topics and insights</Item>
        </ContentRightNetwork>
      </NetworkContent>
    </Container>
  );
};

export default Entrepreneur;
