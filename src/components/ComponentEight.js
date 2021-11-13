import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const BackGroundSecond = styled.div`
  width: 100%;
  background: #204370;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 31px 0 65px 0;
  @media screen and (max-width: 1024px) {
    padding: 31px 0 62px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 31px 0 60px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 31px 0 40px 0;
  }
  @media screen and (max-width: 376px) {
    padding: 40px 0 50px 0;
  }
`;

const Title = styled.p`
  position: static;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 56px;
  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
  font-family: "Pathway Gothic One", sans-serif;
  padding: 0 300px;
  @media screen and (max-width: 1024px) {
    font-size: 52px;
    line-height: 52px;
    padding: 0 228px;
  }
  @media screen and (max-width: 768px) {
    font-size: 42px;
    line-height: 42px;
    padding: 0 158px;
  }
  @media screen and (max-width: 480px) {
    font-size: 36px;
    line-height: 36px;
    padding: 0 48px;
  }
  @media screen and (max-width: 376px) {
    font-size: 36px;
    line-height: 36px;
    padding: 0 17px;
  }
`;

const Box = styled.div`
  padding: 0px 0 16px 0px;
`;

const Button = styled.button`
  padding: 12px 45px;
  background: #ffcc00;
  border-radius: 40px;
  border: none;
  width: 156px;
  height: 65px;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
`;
const ComponentEight = ({ setOpen }) => {
  return (
    <>
      <Wrapper onClick={() => setOpen(false)}>
        <BackGroundSecond>
          <Title>
            WHERE ENTREPRENEURS AROUND THE WORLD GET CONNECTED, INSPIRED, AND
            EMPOWERED
          </Title>
          <Box>
            <Button>Join DEN</Button>
          </Box>
        </BackGroundSecond>
      </Wrapper>
    </>
  );
};

export default ComponentEight;
