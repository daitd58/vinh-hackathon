import React from "react";
import styled from "styled-components";

const Mainone = styled.div`
  width: 100%;
`;

const Retang = styled.div`
  width: 100%;
  height: 377px;
  background-color: #204370;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: "Pathway Gothic One", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 56px;
  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
  padding: 30px 280px;
`;

const Linkbox = styled.div`
  width: 156px;
  height: 65px;
  background-color: #ffcc00;
  border-radius: 40px;
`;

const Link = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #232327;
  padding: 20px 45px;
`;
const Mainnight = () => {
  return (
    <Mainone>
      <Retang>
        <Title>
          WHERE ENTREPRENEURS AROUND THE WORLD GET CONNECTED, INSPIRED, AND
          EMPOWERED
        </Title>
        <Linkbox>
          <Link>Register</Link>
        </Linkbox>
      </Retang>
    </Mainone>
  );
};
export default Mainnight;
