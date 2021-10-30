import React from "react";
import styled from "styled-components";
import Team from "../../assets/Team.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f6f8;
  position: relative;
`;

const BlueSquare = styled.div`
  width: 675px;
  height: 424px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffcc00;
  z-index: 0;
`;

const Content = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const LeftContent = styled.div`
  width: 50%;
  padding: 40px;
  z-index: 999;
  & > img {
  }
`;
const RightContent = styled.div`
  width: 50%;
  padding: 40px;
  h1 {
    font-weight: 500;
    ffont-size: 36px;
    line-height: 36px;
    letter-spacing: -0.015em;
    text-transform: uppercase;
    color: #232327;
    margin-bottom: 24px;
    font-family: "Pathway Gothic One", sans-serif;
  }

  h3 {
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.7);
    margin-bottom: 24px;
  }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding-bottom: 120px;
`;
const Button = styled.button`
  max-width: max-content;
  height: 65px;
  background: #204370;
  border-radius: 40px;
  font-family: Oxygen;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  padding: 0 45px;
  z-index: 1;
  border: none;
`;

function ComponentThree() {
  return (
    <>
      <Wrapper>
        <Content>
          <BlueSquare />
          <LeftContent>
            <img src={Team} alt="" />
          </LeftContent>
          <RightContent>
            <h1>ENTREPRENEURS JOIN THE DEN COMMUNITY</h1>
            <h3>
              Our members and their supporters include: founders and teams;
              mentors and advisors; remote workers and service providers; and
              angel investors and venture capitalists from around the world. As
              a DEN member, you can build a market-ready company much faster
              than ever before.
            </h3>
            <h3>
              As a DEN member, you can build a market-ready company much faster
              than ever before.
            </h3>
          </RightContent>
        </Content>
        <ButtonContainer>
          <Button>Join DEN</Button>
        </ButtonContainer>
      </Wrapper>
    </>
  );
}

export default ComponentThree;
