import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #f4f6f8;
  position: relative;
`;

export const SecondBackground = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffffff;
`;

export const Title = styled.div`
  width: 80%;
  height: 240px;
  font-family: "Pathway Gothic One", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 56px;
  line-height: 56px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
  
`;

function ComponentSix() {
  return (
    <>
      <Wrapper>
        <SecondBackground />
        <Title>
          <h1>Draper Startup House is on a mission to enable</h1>
          <h2>ONE million entrepreneurs worldwide by 2023</h2>
        </Title>
      </Wrapper>
    </>
  );
}

export default ComponentSix;
