import React from "react";
import styled from "styled-components";
import TalkShow from "../../assets/TalkShow.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #f4f6f8;
  @media screen and (max-width: 376px) {
    justify-content: flex-start;
    flex-direction: column-reverse;
  }
`;

const LeftContent = styled.div`
  max-width: max-content;
  width: 50%;

  padding: 150px 0 0 130px;
  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;
    letter-spacing: -0.015em;
    text-transform: uppercase;
    color: #232327;
    margin-bottom: 24px;
    font-family: "Pathway Gothic One", sans-serif;
  }

  h3 {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.7);
    margin-bottom: 24px;
    padding-right: 200px;
  }
  ul {
    list-style: inside;
    color: #a6b4c6;
    padding: 0;
  }
  li {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #232327;
    margin-bottom: 16px;
    &::marker {
      color: #a6b4c6;
    }
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding: 0;
    h1 {
      margin-left: 20px;
      font-size: 32px;
      line-height: 32px;
    }
    h3 {
      margin-left: 20px;
      padding: 0;
      padding-right: 20px;
    }
    li {
      margin-left: 20px;
      font-size: 13px;
    }
  }
`;
const RightContent = styled.div`
  width: 50%;
  z-index: 1;
  padding: 150px 48px 54px 0;
  & img {
    width: 100%;
    height: auto;
    box-shadow: 48px 54px 0 rgb(92, 198, 143);
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding: 60px 0 66px 0;
    display: flex;

    justify-content: center;
    align-items: center;
    & img {
      box-shadow: 20px 26px 0 rgb(92, 198, 143);
      width: 90%;
    }
  }
`;

function ComponentTwo() {
  return (
    <>
      <Wrapper>
        <LeftContent>
          <h1>GET INSPIRed By PEERS AND EXPERTS </h1>
          <h3>
            Becoming a successful entrepreneur means surrounding yourself with
            an inspiring ecosystem like DEN.
          </h3>
          <ul>
            <li>Get constructive feedback from industry experts</li>
            <li>Read startup stories, successes, and failures</li>
            <li>Get help on investor relations topics like term sheets</li>
            <li>Find best practices and professional templates</li>
          </ul>
        </LeftContent>
        <RightContent>
          <img src={TalkShow} alt="talkshow" />
        </RightContent>
      </Wrapper>
    </>
  );
}

export default ComponentTwo;
