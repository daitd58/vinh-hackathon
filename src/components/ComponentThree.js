import styled from "styled-components";
import laugh from "../assets/img/laugh.png";

const Wrapper = styled.div`
  padding: 80px 0 80px 0;
  background: #f4f6f8;
  width: 100%;

  @media screen and (max-width: 480px) {
    padding-top: 35px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 0 50px 0;
    padding-top: 48px;
  }
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  width: 50%;
  padding-left: 40px;
  & img {
    width: 100%;
    height: auto;
    display: inline-block;
    box-shadow: -45px 45px 0 #ffcc00;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 53%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 87%;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
  }
  @media screen and (max-width: 376px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      box-shadow: -45px 30px 0 #ffcc00;
    }
  }
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
  @media screen and (max-width: 376px) {
    padding-top: 80px;
  }
`;
const TextTitle = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #232327;
  margin-bottom: 24px;
  padding-left: 100px;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 37px;
    padding-left: 71px;
  }
  @media screen and (max-width: 768px) {
    font-size: 43px;
    padding-left: 38px;
    padding-top: 75px;
  }
  @media screen and (max-width: 480px) {
    font-size: 38px;
    padding-top: 70px;
    padding-left: 30px;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    font-size: 33px;
    padding-left: 14px;
    padding-top: 0px;
  }
`;

const TextDescription = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  width: 360px;
  font-size: 14px;
  line-height: 25px;
  padding-left: 100px;
  color: #232327;
  @media screen and (max-width: 1024px) {
    width: 320px;
    font-size: 18px;
    padding-left: 71px;
  }
  @media screen and (max-width: 768px) {
    width: 81%;
    font-size: 17px;
    padding-left: 38px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
    padding-left: 32px;
    padding-bottom: 15px;
  }
  @media screen and (max-width: 376px) {
    font-size: 16px;
    padding-left: 14px;
    padding-bottom: 25px;
    width: 86%;
  }
`;
const StyleButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  @media screen and (max-width: 480px) {
    margin-top: 45px;
  }
  @media screen and (max-width: 376px) {
    margin-top: 10px;
  }
`;

const Button = styled.button`
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
const ComponentThree = () => {
  return (
    <Wrapper>
      <Block>
        <LeftBlock>
          <img src={laugh} alt={""} />
        </LeftBlock>
        <RightBlock>
          <TextTitle>ENTREPRENEURS JOIN THE DEN COMMUNITY</TextTitle>
          <TextDescription>
            Our members and their supporters include: founders and teams;
            mentors and advisors; remote workers and service providers; and
            angel investors and venture capitalists from around the world.
          </TextDescription>
          <TextDescription>
            As a DEN member, you can build a market-ready company much faster
            than ever before.
          </TextDescription>
        </RightBlock>
      </Block>
      <StyleButton>
        <Button>join DEN</Button>
      </StyleButton>
    </Wrapper>
  );
};

export default ComponentThree;
