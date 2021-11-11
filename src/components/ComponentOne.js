import React from "react";
import styled from "styled-components";
import party from "../assets/img/party.png";

const Wrapper = styled.div`
  padding: 50px 0 50px 0;
  background: #f4f6f8;
  width: 100%;
`;

const TextContent = styled.div`
  display: flex;
  color: #204370;
  align-items: center;
  justify-content: center;
  font-size: 90px;
  font-weight: 500;
  font-family: "Pathway Gothic One", sans-serif;
  line-height: 90px;
  text-align: center;
  font-style: normal;
  letter-spacing: -0.015em;
  text-transform: uppercase;

  // @media screen and (max-width: 1920px) {
  //   font-size: 100px !important;
  //   line-height: 100px !important;
  // }

  // @media screen and (max-width: 1551px) {
  //   font-size: 90px !important;
  //   line-height: 90px !important;
  // }
  @media screen and (max-width: 1024px) {
    font-size: 65px !important;
    line-height: 75px !important;
  }

  @media screen and (max-width: 480px) {
    font-size: 60px !important;
    line-height: 66px !important;
  }

  @media screen and (max-width: 376px) {
    font-size: 62px !important;
    line-height: 62px !important;
  }
`;

const Block = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  @media screen and (max-width: 376px) {
    flex-direction: column;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  padding-left: 40px;
  width: 50%;
  // @media screen and (max-width: 1920px) {
  //   padding-left: 40px !important;
  //   width: 54% !important;
  // }
  @media screen and (max-width: 1024px) {
    padding-left: 40px;
    width: 56%;
  }
  @media screen and (max-width: 768px) {
    width: 90% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    width: 85% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 376px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 87% !important;
  }
  & img {
    width: 100%;
    height: auto;
    display: inline-block;
    box-shadow: -50px 45px 0 #4c8fcc;
    @media screen and (max-width: 1024px) {
      box-shadow: -50px 35px 0 #4c8fcc !important;
    }
    @media screen and (max-width: 768px) {
      box-shadow: -50px 40px 0 #4c8fcc !important;
    }
    @media screen and (max-width: 480px) {
      box-shadow: -50px 35px 0 #4c8fcc !important;
    }
    @media screen and (max-width: 376px) {
      box-shadow: -50px 33px 0 #4c8fcc !important;
    }
  }
`;

const RightBlock = styled.div`
  width: 50%;
  padding: 0 40px;
  @media screen and (max-width: 768px) {
    width: 89% !important;
    padding: 0 40px !important;
  }

  @media screen and (max-width: 480px) {
    width: 80% !important;
    padding: 0 27px !important;
  }
  @media screen and (max-width: 376px) {
    width: 98% !important;
    padding: 0 0px !important;
  }
`;
const TextTitle = styled.div`
  font-weight: 500;
  font-size: 36px;
  padding-left: 110px;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #232327;
  margin-bottom: 24px;
  font-family: "Pathway Gothic One", sans-serif;
  // @media screen and (max-width: 1920px) {
  //   font-size: 42px !important;
  //   line-height: 42px !important;
  // }
  @media screen and (max-width: 1024px) {
    font-size: 38px !important;
    line-height: 38px !important;
    padding-left: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 43px !important;
    line-height: 43px !important;
    padding-left: 0;
    text-align: left;
    margin-top: 75px;
  }
  @media screen and (max-width: 480px) {
    text-align: center !important;
    font-size: 38px !important;
    line-height: 38px !important;
    padding-left: 0;
    margin-top: 55px;
  }
  @media screen and (max-width: 376px) {
    text-align: center !important;
    font-size: 33px !important;
    line-height: 36px !important;
    padding-left: 0;
    margin-top: 55px;
  }
`;

const TextDescription = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  padding-left: 112px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.7);
  margin-bottom: 24px;
  width: 63% !important;
  // @media screen and (max-width: 1920px) {
  //   font-size: 18px !important;
  //   line-height: 28px !important;
  //   width: 56% !important;
  // }
  @media screen and (max-width: 1024px) {
    font-size: 18px !important;
    line-height: 28px !important;
    width: 90% !important;
    padding-right: 0;
    padding-left: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 17px !important;
    line-height: 27px !important;
    width: 70% !important;
    padding-left: 0px;
  }
  @media screen and (max-width: 480px) {
    width: 100% !important;
    font-size: 18px !important;
    line-height: 28px !important;
    padding-left: 7px;
  }
  @media screen and (max-width: 376px) {
    width: 90% !important;
    padding: 0 0px 0px 22px !important;
    font-size: 16px !important;
    line-height: 26px !important;
  }
`;

const TextUl = styled.ul`
  list-style: inside;
  color: #a6b4c6;
  padding: 0;
  @media screen and (max-width: 376px) {
    padding-left: 10px !important;
  }
`;

const TextLi = styled.li`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #232327;
  padding-left: 110px;
  margin-bottom: 16px;
  &::marker {
    color: #a6b4c6;
  }
  // @media screen and (max-width: 1920px) {
  //   font-size: 15px !important;
  //   line-height: 23px !important;
  // }
  // @media screen and (max-width: 1551px) {
  //   font-size: 14px !important;
  //   line-height: 22px !important;
  // }
  @media screen and (max-width: 1024px) {
    font-size: 14px !important;
    line-height: 21px !important;
    padding-left: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px !important;
    line-height: 23px !important;
    padding-left: 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px !important;
    line-height: 22px !important;
    padding-left: 8px;
  }
  @media screen and (max-width: 376px) {
    font-size: 13px !important;
    line-height: 22px !important;
    padding-left: 13px;
  }
`;

const ComponentOne = () => {
  return (
    <Wrapper>
      <TextContent>JOIN THE DRAPER ENTREPRENEUR NETWORK</TextContent>
      <Block>
        <LeftBlock>
          <img src={party} alt={""} />
        </LeftBlock>
        <RightBlock>
          <TextTitle>Connect with a global network</TextTitle>
          <TextDescription>
            DEN membership connects you with inspiring people and ideas to
            empower your entrepreneurial or fundraising journey.
          </TextDescription>
          <TextUl>
            <TextLi>
              Discover useful resources, software credits, and perks
            </TextLi>
            <TextLi>Find the best events and training programs</TextLi>
            <TextLi>Meet co-founders, advisors, and partners</TextLi>
            <TextLi>Search and discover trending topics and insights</TextLi>
          </TextUl>
        </RightBlock>
      </Block>
    </Wrapper>
  );
};

export default ComponentOne;
