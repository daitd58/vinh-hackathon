import React from "react";
import styled from "styled-components";
import Party from "../../assets/Party.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F4F6F8;
  position: relative;
`;

const BlueSquare = styled.div`
  width: 675px;
  height: 424px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #4c8fcc;
  z-index: 0;
`;

const Title = styled.div`
display:flex
font-family: "Pathway Gothic One", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
    background:none;
  color: #204370;
  padding: 130px 0 60px 0 ;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  width: 50%;
  padding: 40px;
  z-index: 999;
  & > img {
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
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.7);
    margin-bottom: 24px; 
  }
  ul{
    list-style: inside;
    color:#A6B4C6;
    padding:0;
  }
  li {
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #232327;
    margin-bottom: 16px;
    &::marker{
        color:#A6B4C6;
    }
  }
`;

function ComponentOne() {
  return (
    <>
      <Wrapper>
        <BlueSquare />
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
