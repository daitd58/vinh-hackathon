import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const BackGroundSecond = styled.div`
  width: 100%;
  height: 377px;
  background: #204370;
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
  padding: 61px 300px 0px 300px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
const ComponentEight = () => {
  return (
    <>
      <Wrapper>
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
