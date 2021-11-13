import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Container = styled.div`
  position: relative;
  background: #f4f6f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackGround = styled.div`
  width: 83%;
  height: 100%;
  background: #204370;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  z-index: 1;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 87%;
  }
  @media screen and (max-width: 768px) {
    width: 83%;
    padding: 20px 26px;
  }
  @media screen and (max-width: 480px) {
    width: 81%;
    padding: 20px 26px;
  }
  @media screen and (max-width: 376px) {
    width: 75%;
    padding: 20px 25px;
  }
`;
const WhiteBackground = styled.div`
  background: #ffffff;
  width: 100%;
  height: 50%;
  position: absolute;
  z-index: 0;
  top: 50%;
  @media screen and (max-width: 376px) {
    top: 80%;
    height: 20%;
  }
`;
const TextTitleOne = styled.div`
  font-weight: 500;
  color: #ffffff;
  font-size: 56px;
  line-height: 56px;
  text-transform: uppercase;
  font-family: "Pathway Gothic One", sans-serif;
  letter-spacing: -0.015em;
  font-style: normal;
  @media screen and (max-width: 1024px) {
    font-size: 45px;
    line-height: 50px;
  }
  @media screen and (max-width: 769px) {
    font-size: 35px;
    line-height: 40px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const TextTitleTwo = styled.div`
  font-weight: 500;
  color: #ffffff;
  font-size: 56px;
  line-height: 56px;
  text-transform: uppercase;
  font-family: "Pathway Gothic One", sans-serif;
  letter-spacing: -0.015em;
  font-style: normal;
  padding-right: 70px;
  @media screen and (max-width: 1024px) {
    font-size: 45px;
    line-height: 50px;
    padding-right: 55px;
  }
  @media screen and (max-width: 769px) {
    font-size: 35px;
    line-height: 40px;
    padding-right: 45px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const TextTitleThree = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: inline-block;
    font-size: 58px;
    font-weight: 500;
    text-transform: uppercase;
    color: #ffffff;
    font-family: "Pathway Gothic One", sans-serif;
    line-height: 56px;
    letter-spacing: -0.015em;
    font-style: normal;
  }

  @media screen and (max-width: 376px) {
    display: inline-block;
    font-size: 47px;
    font-weight: 500;
    text-transform: uppercase;
    color: #ffffff;
    font-family: "Pathway Gothic One", sans-serif;
    line-height: 56px;
    letter-spacing: -0.015em;
    font-style: normal;
  }
`;
const Describe = ({ setOpen }) => {
  return (
    <Wrapper onClick={() => setOpen(false)}>
      <Container>
        <BackGround>
          <TextTitleOne>
            Draper Startup House is on a mission to enable{" "}
          </TextTitleOne>
          <TextTitleTwo>
            ONE million entrepreneurs worldwide by 2023
          </TextTitleTwo>
          <TextTitleThree>
            Draper Startup House is on a mission to enable 1 million
            entrepreneurs worldwide by 2023
          </TextTitleThree>
        </BackGround>
        <WhiteBackground />
      </Container>
    </Wrapper>
  );
};

export default Describe;
