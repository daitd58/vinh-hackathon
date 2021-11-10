import React from "react";
import styled from "styled-components";
import Entrepreneurs from "../../asset/img/Entrepreneurs.png";

const Container = styled.div`
  display: flex;
  padding: 0 130px;
  @media screen and (max-width: 970px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1200px) {
    padding: 80px 80px 0 80px;
  }
  @media screen and (max-width: 890px) {
    padding: 80px 40px 0 40px;
  }
  @media screen and (max-width: 768px) {
    padding: 80px 20px 0 20px;
  }
`;

const LeftBox = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;

const RightBox = styled.div`
  flex: 50%;
  padding-bottom: 165px;
  @media screen and (max-width: 970px) {
    padding: 60px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;
const TitleHeader = styled.div`
  text-transform: uppercase;
  color: #204370;
  font-family: "Didact Gothic", sans-serif;
  font-size: 50px;
  line-height: 60px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -0.015em;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
  }
`;
const TitleContent = styled.div`
  font-style: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.8);
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
`;
const ViewDesktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 970px) {
    display: none;
  }
`;
const BtnTitle = styled.div`
  display: flex;
  padding-bottom: 100px;
`;
const Image = styled.img`
  @media screen and (max-width: 1270px) {
    width: 90%;
    padding-left: 10%;
  }
  @media screen and (max-width: 970px) {
    width: 100%;
    padding: 0;
  }
`;
const BtnClick = styled.button`
  font-family: "Oxygen", sans-serif;
  width: 156px;
  height: 65px;
  background: #204370;
  border-radius: 40px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: 0;
  :hover {
    cursor: pointer;
  }
`;
const ViewMobile = styled.div`
  display: none;
  @media screen and (max-width: 970px) {
    flex-direction: column;
    display: flex;
    gap: 32px;
    padding: 0 80px;
  }
  @media screen and (max-width: 890px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;
const BtnTitleMobile = styled.div`
  display: flex;
  padding-bottom: 100px;
  justify-content: center;
`;

const ButFirst = () => {
  return (
    <div>
      <Container>
        <LeftBox>
          <TitleHeader>
            But First... <br />
            you Have to Join
          </TitleHeader>
          <ViewDesktop>
            <TitleContent>
              What are you waiting for? Join DEN today.
            </TitleContent>
            <BtnTitle>
              <BtnClick>Join Den</BtnClick>
            </BtnTitle>
          </ViewDesktop>
        </LeftBox>
        <RightBox>
          <Image src={Entrepreneurs} preview={false} alt={""} />
        </RightBox>
      </Container>
      <ViewMobile>
        <TitleContent>What are you waiting for? Join DEN today.</TitleContent>
        <BtnTitleMobile>
          <BtnClick>Join Den</BtnClick>
        </BtnTitleMobile>
      </ViewMobile>
    </div>
  );
};

export default ButFirst;
