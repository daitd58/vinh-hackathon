import React from "react";
import styled from "styled-components";
import photoOne from "../../../../asset/img/BgrOne.png";

const ContentOne = styled.div`
  display: flex;
  padding-bottom: 204px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 66.62px;
    padding-bottom: 60px;
  }
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 66.62px;
    padding-bottom: 60px;
  }
`;

const PhotoOne = styled.div`
  width: 50%;
  padding-left: 41px;
  padding-right: 23px;
  border: 0;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 40px;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const ImageOne = styled.div`
  & img {
    width: 100%;
    height: auto;
    display: inline-block;
    box-shadow: -52px 54px 0 #4c8fcc;
  }
  @media screen and (max-width: 768px) {
    & img {
      width: 100%;
      height: 100%;
      box-shadow: -40px 37px 0 #4c8fcc;
    }
  }
  @media screen and (max-width: 376px) {
    & img {
      width: 100%;
      height: 100%;
      box-shadow: -30.37px 26.62px 0 #4c8fcc;
    }
  }
`;

const TextOne = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  border: 0;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 40px;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
  }
`;
const TextBig = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #232327;
  padding-bottom: 24px;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 376px) {
    font-size: 18px;
  }
`;

const TextBetween = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.7);
  padding-bottom: 24px;
`;
const TextLast = styled.div``;
const Last = styled.li`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #232327;
  padding-bottom: 16px;
  @media screen and (max-width: 376px) {
    font-size: 13px;
  }
`;
const TextRight = styled.div`
  border: 0;
  width: 425px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    border: 0;
    width: 100%;
    box-sizing: border-box;
  }
  @media screen and (max-width: 376px) {
    border: 0;
    width: 335px;
    box-sizing: border-box;
  }
`;
export default function main1() {
  return (
    <ContentOne>
      <PhotoOne>
        <ImageOne>
          <img src={photoOne} />
        </ImageOne>
      </PhotoOne>
      <TextOne>
        <TextRight>
          <TextBig>Connect with a global network</TextBig>
          <TextBetween>
            DEN membership connects you with inspiring people and ideas to
            empower your entrepreneurial or fundraising journey.
          </TextBetween>
          <TextLast>
            <Last>Discover useful resources, software credits, and perks</Last>
            <Last>Find the best events and training programs</Last>
            <Last>Meet co-founders, advisors, and partners</Last>
            <Last>Search and discover trending topics and insights</Last>
          </TextLast>
        </TextRight>
      </TextOne>
    </ContentOne>
  );
}
