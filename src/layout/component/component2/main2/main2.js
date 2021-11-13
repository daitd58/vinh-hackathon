import React from "react";
import styled from "styled-components";
import photoTwo from "../../../../asset/img/BgrTwo.png";

const ContentTwo = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 204px;
  @media screen and (max-width: 768px) {
    align-items: center;
    gap: 66.62px;
    flex-direction: column-reverse;
    padding-bottom: 60px;
    @media screen and (max-width: 376px) {
      align-items: center;
      gap: 66.62px;
      flex-direction: column-reverse;
      padding-bottom: 60px;
    }
  }
`;

const PhotoTwo = styled.div`
  width: 50%;
  padding-left: 16px;
  padding-right: 48px;
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

const ImageTwo = styled.div`
  & img {
    width: 100%;
    height: auto;
    display: inline-block;
    box-shadow: 61px 54px 0 #5cc68f;
  }
  @media screen and (max-width: 768px) {
    & img {
      width: 100%;
      height: 100%;
      box-shadow: 40px 36px 0 #5cc68f;
    }
  }
  @media screen and (max-width: 376px) {
    & img {
      width: 100%;
      height: 100%;
      box-shadow: 30px 26px 0 #5cc68f;
    }
  }
`;

const TextTwo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  border: 0;
  box-sizing: border-box;
  @media screen and (max-width: 1280px) {
  }
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
const TextLeft = styled.div`
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
  }
`;

export default function main2() {
  return (
    <ContentTwo>
      <TextTwo>
        <TextLeft>
          <TextBig>GET INSPIRed By PEERS AND EXPERTS </TextBig>
          <TextBetween>
            Becoming a successful entrepreneur means surrounding yourself with
            an inspiring ecosystem like DEN.
          </TextBetween>
          <TextLast>
            <Last>Get constructive feedback from industry experts</Last>
            <Last>Read startup stories, successes, and failures</Last>
            <Last>Get help on investor relations topics like term sheets</Last>
            <Last>Find best practices and professional templates</Last>
          </TextLast>
        </TextLeft>
      </TextTwo>
      <PhotoTwo>
        <ImageTwo>
          <img src={photoTwo} />
        </ImageTwo>
      </PhotoTwo>
    </ContentTwo>
  );
}
