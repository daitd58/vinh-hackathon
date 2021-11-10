import React from "react";
import styled from "styled-components";
import image from "../img/diagram.png";

const Wrapper = styled.div`
  display: flex;
  padding: 0 130px 100px 130px;
  justify-content: space-between;
  background: #ffffff;
  align-items: center;
`;
const LeftBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  & p {
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.7);
    margin-bottom: 24px;
  }
  & button {
    max-width: max-content;
    height: 65px;
    background: #204370;
    border-radius: 40px;
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    padding: 0 45px;
    z-index: 1;
    border: none;
  }
`;
const RightBlcok = styled.div`
  width: 50%;
  display: flex;
  & img {
    width: 100%;
    height: auto;
  }
`;
const TextContent = styled.div`
  font-weight: 700;
  font-size: 60px;
  line-height: 80px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  font-family: "Pathway Gothic One", sans-serif;
`;
function ComponentFive() {
  return (
    <Wrapper>
      <LeftBlock>
        <TextContent>But First...</TextContent>
        <TextContent>you Have to Join</TextContent>
        <p>What are you waiting for? Join DEN today.</p>
        <button>join Den</button>
      </LeftBlock>
      <RightBlcok>
        <img src={image} alt={""} />
      </RightBlcok>
    </Wrapper>
  );
}

export default ComponentFive;
