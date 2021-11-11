import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #204370;
  width: 100%;
  height: 100%;
  padding: 80px 0;
  @media screen and (max-width: 1024px) {
    padding: 70px 0;
  }
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LeftBlock = styled.div`
  font-weight: 500;
  padding: 0 340px;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 50px;
  text-align: center;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 1280px) {
    padding: 0 270px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 150px;
    font-size: 40px;
  }
  @media screen and (max-width: 769px) {
    padding: 0 125px;
    font-size: 35px;
  }
  @media screen and (max-width: 376px) {
    padding: 0px;
  }
`;
const RightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;
const Button = styled.button`
  background: #ffcc00;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 550;
  height: 65px;
  padding: 10px 55px;
  border: none;
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  @media screen and (max-width: 376px) {
    padding: 10px 50px;
  }
`;
function ComponentTen() {
  return (
    <Wrapper>
      <Block>
        <LeftBlock>
          WHERE ENTREPRENEURS AROUND THE WORLD GET CONNECTED, INSPIRED, AND
          EMPOWERED
        </LeftBlock>
        <RightBlock>
          <Button>join DEN</Button>
        </RightBlock>
      </Block>
    </Wrapper>
  );
}

export default ComponentTen;
