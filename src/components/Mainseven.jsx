import React from "react";
import styled from "styled-components";

const Mainone = styled.div`
  width: 100%;
`;

const Douplemain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  margin-top: -120px;
`;
const Retang = styled.div`
  top: 5531px;
  width: 100%;
  height: 240px;
  background-color: #204370;
  text-align: center;
`;

const Title = styled.div`
  font-family: "Pathway Gothic One", sans-serif;
  font-weight: 500;
  font-size: 56px;
  line-height: 56px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
  padding-top: 70px;
`;

const Event = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  margin-bottom: 45px;
`;

const Titleevent = styled.div`
  font-family: "Pathway Gothic One", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 90px;
  line-height: 90px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
`;

const Linkbox = styled.div`
  width: 197px;
  height: 26px;
  background: #fff;
  padding: 20px;
  border-radius: 40px;
  border: 1px solid #204370;
`;

const Link = styled.div`
  font-family: Oxygen;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  align-items: center;
  text-align: center;
  color: #2a2a2a;
  margin: 0px 10px;
`;

const Bar = styled.div`
  width: 1420px;
  height: 10px;
  background: #e9ecf1;
  margin-left: 50px;
`;

const Mainseven = () => {
  return (
    <Mainone>
      <Douplemain>
        <Retang>
          <Title>
            Draper Startup House is on a mission to enable
            <br /> ONE million entrepreneurs worldwide by 2023.
          </Title>
        </Retang>
        <Event>
          <Titleevent>upcoming events</Titleevent>
          <p
            style={{
              fonSize: "16px",
              lineHeight: "26px",
              color: "rgba(35, 35, 39, 0.8)",
              width: "310px",
            }}
          >
            Find the best offline and online events and training programs right
            here.
          </p>
          <Linkbox>
            <Link>See all upcoming events</Link>
          </Linkbox>
        </Event>
      </Douplemain>
      <Bar></Bar>
    </Mainone>
  );
};
export default Mainseven;
