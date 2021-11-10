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
  text-transform: uppercase;
  font-family: "Didact Gothic", sans-serif;
  font-size: 50px;
  line-height: 60px;
  text-align: center;
  font-weight: 700;
  padding: 157px 0 100px;
  font-style: normal;
  letter-spacing: -0.015em;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 80px 20px 60px;
    font-size: 30px;
    line-height: 30px;
  }
`;
const NetworkContent = styled.div`
  display: flex;
  padding-bottom: 150px;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 60px;
    align-items: center;
  }
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
  @media screen and (max-width: 1100px) {
    padding: 0 30px;
    & img {
      box-shadow: -30px 36px 0 rgba(76, 143, 204, 1);
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
    & img {
      width: 95%;
      margin-left: 20px;
      box-shadow: -20px 26px 0 rgba(76, 143, 204, 1);
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
const ContentRightNetwork = styled.div`
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
const ContentNetwork = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.7);
  width: 65%;
  padding-bottom: 24px;
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
const Item = styled.li`
  font-size: 14px;
  line-height: 22px;
  color: rgba(35, 35, 39, 1);
  padding-bottom: 16px;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width: 768px) {
    padding-bottom: 16px;
  }
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
