import React from "react";
import styled from "styled-components";
import Team from "../../assets/Team.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f6f8;
  position: relative;
`;

const Content = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 376px) {
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 60px;
  }
`;

const LeftContent = styled.div`
  width: 50%;
  padding: 40px;
  z-index: 999;
  & img {
    width: 100%;
    height: auto;
    box-shadow: -40px 40px 0 rgb(255, 204, 0);
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
    & img {
      width: 90%;
      height: auto;
      box-shadow: -20px 26px 0 rgb(255, 204, 0);
    }
  }
`;
const RightContent = styled.div`
  width: 50%;
  padding: 40px;
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
    padding-right: 230px;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding: 0px;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding-bottom: 120px;
  transition: all 1s;
  :hover {
    filter: brightness(150%);
    
  }
  @media screen and (max-width: 376px) {
    margin-top: 40px;
    padding-bottom: 80px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  transition: all 1s;
  :hover {
    filter: brightness(150%);
    
  }
  max-width: max-content;
  height: 65px;
  background: #204370;
  border-radius: 40px;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  padding: 0 45px;
  z-index: 1;
  border: none;
`;

function ComponentThree() {
  return (
    <>
      <Wrapper>
        <Content>
          <LeftContent>
            <img src={Team} alt="party" />
          </LeftContent>
          <RightContent>
            <h1>ENTREPRENEURS JOIN THE DEN COMMUNITY</h1>
            <h3>
              Our members and their supporters include: founders and teams;
              mentors and advisors; remote workers and service providers; and
              angel investors and venture capitalists from around the world. As
              a DEN member, you can build a market-ready company much faster
              than ever before.
            </h3>
            <h3>
              As a DEN member, you can build a market-ready company much faster
              than ever before.
            </h3>
          </RightContent>
        </Content>
        <ButtonContainer>
          <Button>Join DEN</Button>
        </ButtonContainer>
      </Wrapper>
    </>
  );
}

export default ComponentThree;
