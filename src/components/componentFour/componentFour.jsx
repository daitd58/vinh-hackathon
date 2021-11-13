import React from "react";
import styled from "styled-components";
import Slack from "../../assets/slack.png";
import Global from "../../assets/Global.png";
import Together from "../../assets/Together.png";
import Course from "../../assets/course.png";
import Group from "../../assets/Group.png";

const Wrapper = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  padding: 130px 0 0 135px;
  font-style: normal;
  font-weight: 500;
  font-size: 90px;
  line-height: 90px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 376px) {
    padding: 80px 0 0 0px;
    margin-left: 20px;
    font-size: 62px;
    line-height: 62px;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 130px 130px 135px;
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin-top: 40px;
  }
`;

const ListItem = styled.div`
  width: 264px;
  height: 264px;
  background: #f4f6f8;
  position: relative;
  & p {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #232327;
    padding-top: 33px;
    padding-right: 50px;
  }
  @media screen and (max-width: 376px) {
    width: 335px;
    height: 208px;
    margin-bottom: 20px;
    p {
      padding-right: 30px;
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

const ListNumber = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-family: "Pathway Gothic One", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 56px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: rgba(23, 41, 64, 0.1);
`;

const ListImage = styled.div`
  padding-top: 40px;
  padding-left: 44px;
  & img {
    width: 40px;
    height: auto;
  }
  @media screen and (max-width: 376px) {
    padding-left: 30px;
    padding-top: 34px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position:relative;
  padding-bottom: 167px;
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 80px;
  }
`;

const LeftContent = styled.div`
  width: 50%;
  padding: 150px 0 0 130px;
  & h1 {
    font-family: "Pathway Gothic One", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 90px;
    line-height: 90px;
    letter-spacing: -0.015em;
    text-transform: uppercase;
    color: #204370;
  }
  & p {
    padding: 24px 0;
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.8);
  }
  & button {
    padding: 0 45px;
    height: 65px;
    background: #204370;
    border-radius: 40px;
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    border:none;
  cursor: pointer;
  transition: all 1s;
  :hover {
    filter: brightness(150%);
    
  }

  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding: 80px 0 0 0px;
    h1 {
      margin-left: 20px;
      font-size: 62px;
      line-height: 80px;
    }
  }
`;
const Bottom= styled.div`
 @media screen and (max-width: 376px) {
  width: 100%;
  padding: 430px 0 0 0px;
  text-align:center;
}`

const RightContent = styled.div`
  width: 50%;

  padding: 0 135px 0 0;
  @media screen and (max-width: 376px) {
    width: 100%;
    & img {
      width: 335px;
      height: auto;
      position:absolute;
      padding: 0;
      top:275px;
      left:20px;
    }
  }
`;

function ComponentFour() {
  return (
    <>
      <Wrapper>
        <Title>HOW DEN WORKS</Title>
        <List>
          <ListItem>
            <ListNumber>01</ListNumber>
            <ListImage>
              <img src={Slack} alt="" />
              <p>Say hello and interact on the DEN Slack channel</p>
            </ListImage>
          </ListItem>
          <ListItem>
            <ListNumber>02</ListNumber>
            <ListImage>
              <img src={Course} alt="" />
              <p>Explore free high-quality on-demand learning content</p>
            </ListImage>
          </ListItem>{" "}
          <ListItem>
            <ListNumber>03</ListNumber>
            <ListImage>
              <img src={Together} alt="" />
              <p>
                Meet co-founders, advisors, partners, customers, and investors
              </p>
            </ListImage>
          </ListItem>{" "}
          <ListItem>
            <ListNumber>04</ListNumber>
            <ListImage>
              <img src={Global} alt="" />
              <p>Find opportunities in the global Draper ecosystem</p>
            </ListImage>
          </ListItem>
        </List>
        <Content>
          <LeftContent>
            <h1>
              But First... <br /> you Have to Join
            </h1>
            <Bottom>
            <p>What are you waiting for? Join DEN today.</p>
            <button>Join DEN</button>
            </Bottom>
          </LeftContent>
          <RightContent>
            <img src={Group} alt="" />
          </RightContent>
        </Content>
      </Wrapper>
    </>
  );
}

export default ComponentFour;
