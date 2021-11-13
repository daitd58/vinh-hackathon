import React from "react";
import styled from "styled-components";
import slack from "../assets/img/slack.png";
import course from "../assets/img/_course.png";
import together from "../assets/img/_together.png";
import global from "../assets/img/global.png";
import group from "../assets/img/group.png";

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

  @media screen and (max-width: 1024px) {
    font-size: 65px;
    line-height: 75px;
    padding: 60px 0 0 57px;
  }
  @media screen and (max-width: 768px) {
    font-size: 65px;
    line-height: 75px;
    padding: 75px 0 41px 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 62px;
    line-height: 62px;
    padding: 75px 0 41px 20px;
  }

  @media screen and (max-width: 376px) {
    font-size: 62px;
    line-height: 62px;
    padding: 76px 0 31px 15px;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 130px 130px 135px;
  @media screen and (max-width: 1024px) {
    padding: 48px 65px 30px 65px;
    gap: 15px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 16px 45px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 16px 22px;
  }
  @media screen and (max-width: 376px) {
    flex-direction: column;
    padding: 16px 22px;
  }
`;

const ListItem = styled.div`
  width: 264px;
  height: 264px;
  background: #f4f6f8;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 679px;
    height: 188px;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 480px) {
    width: 436px;
    height: 236px;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 376px) {
    width: 340px;
    height: 208px;
    margin-bottom: 25px;
  }
  & p {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #232327;
    padding-top: 10px;
    padding-right: 40px;
    @media screen and (max-width: 1024px) {
      padding-right: 17px;
    }
    @media screen and (max-width: 376px) {
      padding-right: 31px;
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
  @media screen and (max-width: 1024px) {
    padding-top: 30px;
    padding-left: 24px;
  }
  @media screen and (max-width: 376px) {
    padding-left: 35px;
  }
  & img {
    width: 40px;
    height: auto;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 167px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 70px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding-bottom: 55px;
  }
  @media screen and (max-width: 376px) {
    flex-direction: column;
    padding-bottom: 100px;
  }
`;

const LeftContent = styled.div`
  width: 50%;
  padding: 150px 0 0 130px;
  @media screen and (max-width: 1024px) {
    width: 50%;
    padding: 74px 0 0 60px;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    padding: 0px 0 0 40px;
  }
  @media screen and (max-width: 480px) {
    width: auto;
    padding: 20px 0 0 20px;
  }
  @media screen and (max-width: 376px) {
    width: auto;
    padding: 0;
  }
  & h1 {
    font-family: "Pathway Gothic One", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 90px;
    line-height: 90px;
    letter-spacing: -0.015em;
    text-transform: uppercase;
    color: #204370;
    @media screen and (max-width: 1024px) {
      font-size: 65px;
      line-height: 75px;
      padding-left: 0;
    }
    @media screen and (max-width: 768px) {
      font-size: 65px;
      line-height: 75px;
      padding-left: 0;
    }
    @media screen and (max-width: 480px) {
      font-size: 62px;
      line-height: 62px;
      padding-left: 0px;
    }
    @media screen and (max-width: 376px) {
      font-size: 62px;
      line-height: 62px;
      padding-left: 16px;
    }
  }
  & p {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.8);

    @media screen and (max-width: 1024px) {
      display: inline;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
    @media screen and (max-width: 480px) {
      display: none;
    }
    @media screen and (max-width: 376px) {
      display: none;
    }
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

    @media screen and (max-width: 1024px) {
      display: inline;
      margin-top: 25px;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
    @media screen and (max-width: 480px) {
      display: none;
    }
    @media screen and (max-width: 376px) {
      display: none;
    }
  }
`;

const RightContent = styled.div`
  padding: 0 135px 0 0;
  @media screen and (max-width: 1024px) {
    padding: 41px 63px 0 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    padding: 0 35px;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    padding: 0 20px;
    flex-direction: column;
  }
  @media screen and (max-width: 376px) {
    padding: 0 20px;
    flex-direction: column;
    text-align: center;
    align-items: center;
    display: flex;
  }
  & img {
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    @media screen and (max-width: 480px) {
      width: 100%;
      padding-bottom: 40px;
    }
    @media screen and (max-width: 376px) {
      width: 100%;
      padding-bottom: 40px;
    }
  }
`;

const Line = styled.p`
  padding: 24px 0;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.8);
  @media screen and (max-width: 1550px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: inline;
  }
  @media screen and (max-width: 480px) {
    display: inline;
    padding: 0;
  }
  @media screen and (max-width: 376px) {
    display: inline;
    padding: 0;
  }
`;
const Button = styled.button`
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
  @media screen and (max-width: 1550px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: inline;
    margin-top: 0;
  }
  @media screen and (max-width: 480px) {
    display: inline;
    margin-top: 25px;
  }
  @media screen and (max-width: 376px) {
    display: inline;
    margin-top: 25px;
  }
`;

const BoxCover = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
  }
  @media screen and (max-width: 376px) {
    text-align: center;
  }
`;
const ComponentFour = ({ setOpen }) => {
  return (
    <>
      <Wrapper onClick={() => setOpen(false)}>
        <Title>HOW DEN WORKS</Title>
        <List>
          <ListItem>
            <ListNumber>01</ListNumber>
            <ListImage>
              <img src={slack} alt="" />
              <p>Say hello and interact on the DEN Slack channel</p>
            </ListImage>
          </ListItem>
          <ListItem>
            <ListNumber>02</ListNumber>
            <ListImage>
              <img src={course} alt="" />
              <p>Explore free high-quality on-demand learning content</p>
            </ListImage>
          </ListItem>
          <ListItem>
            <ListNumber>03</ListNumber>
            <ListImage>
              <img src={together} alt="" />
              <p>
                Meet co-founders, advisors, partners, customers, and investors
              </p>
            </ListImage>
          </ListItem>
          <ListItem>
            <ListNumber>04</ListNumber>
            <ListImage>
              <img src={global} alt="" />
              <p>Find opportunities in the global Draper ecosystem</p>
            </ListImage>
          </ListItem>
        </List>
        <Content>
          <LeftContent>
            <h1>
              But First... <br /> you Have to Join
            </h1>
            <p>What are you waiting for? Join DEN today.</p>
            <button>Join DEN</button>
          </LeftContent>
          <RightContent>
            <img src={group} alt="" />
            <BoxCover>
              <Line>What are you waiting for? Join DEN today.</Line>
              <Button>Join DEN</Button>
            </BoxCover>
          </RightContent>
        </Content>
      </Wrapper>
    </>
  );
};

export default ComponentFour;
