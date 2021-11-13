import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #f4f6f8;
  position: relative;
`;

const SecondBackground = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffffff;
  z-index: 0;
`;

const Title = styled.div`
  padding: 58px 0;
  width: 82.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #204370;
  z-index: 1;
  @media screen and (max-width: 376px) {
    padding: 65px 0;
  }
`;

const TextContainer = styled.div`
  max-width: max-content;
  font-family: "Pathway Gothic One", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
  & h1 {
    padding-left: 20px;
    padding-bottom: 12px;
  }
  &.mobile {
    display: none;
  }
  &.normal {
    display: block;
  }
  @media screen and (max-width: 376px) {
    margin-left: 20px;
    h1 {
      padding: 0;
    }
    .mobile {
      display: block;
    }
    .normal {
      display: none;
    }
  }
`;

function ComponentSix() {
  return (
    <>
      <Wrapper>
        <SecondBackground />
        <Title>
          <TextContainer className="normal">
            <h1>Draper Startup House is on a mission to enable</h1>
            <h2>One million entrepreneurs worldwide by 2023</h2>
          </TextContainer>
          <TextContainer className="mobile">
            <h1>Draper Startup House is on a mission to enable</h1>
            <h2>1 million entrepreneurs worldwide by 2023</h2>
          </TextContainer>
        </Title>
      </Wrapper>
    </>
  );
}

export default ComponentSix;
