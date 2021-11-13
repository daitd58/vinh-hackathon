import React from "react";
import styled from "styled-components";
import Party from "../../assets/Party.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f6f8;
`;

const Title = styled.div`
display:flex
font-family: "Pathway Gothic One", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  background:none;
  color: #204370;
  padding: 130px 0 60px 0 ;
  @media screen and (max-width: 376px) {
    padding: 80px 50px 60px 50px ;
    font-size: 30px;
  line-height: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const LeftContent = styled.div`
  width: 50%;
  padding: 40px;
  z-index: 2;
  & img {
    display: inline-block;
    box-shadow: -40px 40px 0 rgb(76, 143, 204);
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding: 0;
    padding-bottom: 67px;
    display:flex;
    justify-content: center;
    align-items:center;

    & img {
      width: 90%;
      box-shadow: -20px 26px 0 rgb(76, 143, 204);
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
    padding-right: 220px;
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
    & h1 {
      margin-left: 20px;
      font-size: 32px;
      line-height: 32px;
    }
    h3 {
      margin-left: 20px;
      padding: 0;
    }
    li {
      margin-left: 20px;
      font-size: 13px;
    }
  }
`;

function ComponentOne() {
  return (
    <>
      <Wrapper>
        <Title>Join the Draper entrepreneur network</Title>
        <Content>
          <LeftContent>
            <img src={Party} alt="" />
          </LeftContent>
          <RightContent>
            <h1>Connect with a global network</h1>
            <h3>
              DEN membership connects you with inspiring people and ideas to
              empower your entrepreneurial or fundraising journey.
            </h3>
            <ul>
              <li>Discover useful resources, software credits, and perks</li>
              <li>Find the best events and training programs</li>
              <li>Meet co-founders, advisors, and partners</li>
              <li>Search and discover trending topics and insights</li>
            </ul>
          </RightContent>
        </Content>
      </Wrapper>
    </>
  );
}

export default ComponentOne;
