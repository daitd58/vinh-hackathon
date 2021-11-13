import React from "react";
import styled from "styled-components";
import photoThree from "../../../../asset/img/BgrThree.png";

const ContentThree = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 134px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 66.62px;
    padding-bottom: 40px;
  }
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 66.62px;
    padding-bottom: 40px;
  }
`;

const PhotoThree = styled.div`
  width: 50%;
  padding-left: 48px;
  padding-right: 16px;
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

const ImageThree = styled.div`
  & img {
    width: 100%;
    height: auto;
    display: inline-block;
    box-shadow: -59px 54px 0 #ffcc00;
  }
  @media screen and (max-width: 768px) {
    & img {
      width: 100%;
      height: 100%;
      box-shadow: -40px 36.62px 0 #4c8fcc;
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

const TextThree = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  border: 0;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 100%;
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
  color: #232327;
`;

const TextRight = styled.div`
  border: 0;
  width: 425px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    border: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 40px;
  }
  @media screen and (max-width: 376px) {
    border: 0;
    width: 335px;
    box-sizing: border-box;
    padding: 0 0px;
  }
`;
const TextAbove = styled.div`
  padding-bottom: 10px;
`;

const TextBelow = styled.div``;

export default function main3() {
  return (
    <ContentThree>
      <PhotoThree>
        <ImageThree>
          <img src={photoThree} />
        </ImageThree>
      </PhotoThree>
      <TextThree>
        <TextRight>
          <TextBig>ENTREPRENEURS JOIN THE DEN COMMUNITY</TextBig>
          <TextBetween>
            <TextAbove>
              Our members and their supporters include: founders and teams;
              mentors and advisors; remote workers and service providers; and
              angel investors and venture capitalists from around the world.
            </TextAbove>
            <TextBelow>
              As a DEN member, you can build a market-ready company much faster
              than ever before.
            </TextBelow>
          </TextBetween>
        </TextRight>
      </TextThree>
    </ContentThree>
  );
}
