import React from "react";
import Den from "../../asset/img/Den.png";
import styled from "styled-components";
import bgr from "../../asset/img/Bgr1.png";

const LogoDen = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0 28px;
  width: 183px;
  height: 73px;
  @media screen and (max-width: 768px){

  }
`;
const Container = styled.div`
  width: 100%;
  background: url(${bgr});
  background-size: cover;
  object-fit: cover;
  height: auto;
  padding-top: 90px;
  background-position: center;
  @media screen and (max-width: 768px) {
    padding-top: 0px;
    margin-top: 80px;
  }
  @media screen and (max-width: 376px) {
    margin-top: 80px;
  }
`;
const Main_Den = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBig = styled.div`
  border: 0;
  box-sizing: border-box;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
  @media screen and (max-width: 376px) {
    width: 100%;
  }
`;
const TextContentBig = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  @media screen and (max-width: 768px) {
    width: 335px;
    border: 0;
    box-sizing: border-box;
    font-size: 19px;
    line-height: 30px;
  }
  @media screen and (max-width: 376px) {
  }
`;
const TextSmall = styled.div`
  border: 1px none none;
  box-sizing: border-box;
  width: 346px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    width: 335px;
  }
  @media screen and (max-width: 376px) {
  }
`;
const TextContentSmall = styled.div`
  color: #ffffff;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 26px;
  text-align: center;
  @media screen and(max-width: 376px) {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    width: 335px;
    border: 0;
    box-sizing: border-box;
  }
`;
const Btn = styled.div`
  padding-bottom: 126px;
`;
const Button = styled.div`
  width: 156px;
  height: 65px;
  border: 0;
  background: #204370;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextButton = styled.div`
  margin: 0px 10px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  color: #fff;
  font-family: "Oxygen", sans-serif;
`;

const ComponentOne = () => {
  return (
    <Container>
      <Main_Den>
        <LogoDen>
          <img src={Den} />
        </LogoDen>
        <TextBig>
          <TextContentBig>
            GLOBAL NETWORK FOR MENTORSHIP AND SUPPORT
          </TextContentBig>
        </TextBig>
        <TextSmall>
          <TextContentSmall>
            Get all the support and education you need to achieve full potential
            as an entrepreneur.
          </TextContentSmall>
        </TextSmall>
        <Btn>
          <Button>
            <TextButton>Join Den</TextButton>
          </Button>
        </Btn>
      </Main_Den>
    </Container>
  );
};
export default ComponentOne;
