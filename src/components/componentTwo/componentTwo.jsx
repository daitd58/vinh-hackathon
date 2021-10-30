import React from "react";
import styled from "styled-components";
import TalkShow from "../../assets/TalkShow.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  background:#F4F6F8;
`;

const GreenSquare = styled.div`
  width: 675px;
  height: 424px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: #5cc68f;
  z-index: 0;
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
    font-family: Oxygen;
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
    font-family: Oxygen;
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
`;
const RightContent = styled.div`
  width: 50%;
  z-index:1;
  padding: 150px 48px 54px 0;
  & img {
    width: 100%;
    height: auto;
  }
`;

function ComponentTwo() {
  return (
    <>
      <Wrapper>
        <GreenSquare />
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
          <img src={TalkShow} />
        </RightContent>
      </Wrapper>
    </>
  );
}

export default ComponentTwo;
