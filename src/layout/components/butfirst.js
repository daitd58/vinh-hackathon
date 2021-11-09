import React from "react";
import styled from "styled-components";
import Entrepreneurs from "../../asset/img/Entrepreneurs.png";

const Container = styled.div`
  display: flex;
`;

const LeftBox = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 130px;
  gap: 30px;
`;

const RightBox = styled.div`
  flex: 50%;
  padding-right: 130px;
  padding-bottom: 160px;
`;
const TitleHeader = styled.div`
  font-family: Alternate;
  font-style: normal;
  font-size: 60px;
  line-height: 60px;
  font-weight: 500;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
`;
const TitleContent = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.8);
`;
const BtnTitle = styled.div`
  display: flex;
  padding-bottom: 100px;
`;
const Image = styled.img``;
const BtnClick = styled.button`
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
`;

const ButFirst = () => {
  return (
    <Container>
      <LeftBox>
        <TitleHeader>
          But First... <br />
          you Have to Join
        </TitleHeader>
        <TitleContent>What are you waiting for? Join DEN today.</TitleContent>
        <BtnTitle>
          <BtnClick>Join Den</BtnClick>
        </BtnTitle>
      </LeftBox>
      <RightBox>
        <Image src={Entrepreneurs} preview={false} alt={""} />
      </RightBox>
    </Container>
  );
};

export default ButFirst;
