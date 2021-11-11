import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffff;
  margin-top: 84px;
`;

const Container = styled.div`
  padding: 0 123px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding: 0 64px;
    display: flex;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 40px;
    display: flow-root;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0 20px;
    display: flow-root;
  }
  @media screen and (max-width: 376px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const TitleLeft = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 90px;
  line-height: 90px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 65px;
    line-height: 75px;
  }
  @media screen and (max-width: 768px) {
    font-size: 65px;
    line-height: 75px;
  }
  @media screen and (max-width: 480px) {
    font-size: 62px;
    line-height: 62px;
  }
  @media screen and (max-width: 376px) {
    font-size: 62px;
    line-height: 62px;
  }
`;

const TitleBetween = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.8);
  width: 28%;
  @media screen and (max-width: 1024px) {
    width: 30%;
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    width: 82%;
    font-size: 16px;
  }
  @media screen and (max-width: 376px) {
    width: 98%;
    font-size: 16px;
  }
`;

const ButtonRight = styled.div`
  width: 276px;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 227px;
    height: 58px;
  }
  @media screen and (max-width: 769px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const Button = styled.button`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #2a2a2a;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
  border: 1px solid #204370;
  box-sizing: border-box;
  border-radius: 40px;
  width: 276px;
  height: 65px;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    width: 216px;
    height: 58px;
    font-size: 14px;
  }
`;

const Line = styled.hr`
  position: absolute;
  width: 83%;
  height: 10px;
  left: 130px;
  background: #e9ecf1;
  opacity: 0.7;
  margin-top: 65px;
  border: none;
  @media screen and (max-width: 1024px) {
    position: static;
    width: 88%;
    margin-top: 27px;
  }
  @media screen and (max-width: 768px) {
    position: static;
    width: 90%;
    margin-top: 27px;
  }
  @media screen and (max-width: 480px) {
    position: static;
    width: 92%;
    margin-top: 27px;
  }
  @media screen and (max-width: 376px) {
    position: static;
    width: 87%;
    margin-top: 30px;
  }
`;

const ComponentSix = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <TitleLeft>
            <span>upcoming events</span>
          </TitleLeft>
          <TitleBetween>
            <p>
              Find the best offline and online events and training programs
              right here.
            </p>
          </TitleBetween>
          <ButtonRight>
            <Button>See all upcoming events</Button>
          </ButtonRight>
        </Container>
        <Line />
      </Wrapper>
    </>
  );
};

export default ComponentSix;
