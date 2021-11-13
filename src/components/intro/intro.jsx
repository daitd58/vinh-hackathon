import React from "react";
import styled from "styled-components";
import Academy from "../../assets/Academy.png";
import Den from "../../assets/DEN.png";
// import { Container } from './styles';
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  background-image: url(${Academy});
  padding: 180px 0 130px 0;
  background-size: cover;
  background-position: center;
  background-repeat: none;

  @media screen and (max-width: 376px) {
    margin-top: 80px;
    height: 100%;
    width: auto;
    padding: 97px 0 119px 0;
  }
`;

const Content = styled.div`
  max-width: max-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h1 {
    font-family: "Pathway Gothic One", sans-serif;
    margin-bottom: 25px;
    margin-top: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 56px;
    line-height: 56px;
    color: #ffffff;
    letter-spacing: -0.015em;
    padding: 0 500px;
    text-align: center;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  }
  & p {
    font-family: "Oxygen", sans-serif;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
    line-height: 26px;
    text-align: center;
    padding: 0 580px;
  }
  & button {
    height: 65px;
    padding: 0 45px;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    background: #204370;
    border-radius: 40px;
    color: #ffffff;
    border: none;
    cursor: pointer;
    transition: all 1s;
    :hover {
      filter: brightness(150%);
    }
  }
  @media screen and (max-width: 376px) {
    h1 {
      font-weight: 500;
      font-size: 32px;
      line-height: 36px;
      padding: 0 20px;
    }
    p {
      padding: 0;
    }
  }
`;

function Intro() {
  return (
    <>
      <Wrapper>
        <Content>
          <img src={Den} />
          <h1>GLOBAL NETWORK FOR MENTORSHIP AND SUPPORT</h1>
          <p>
            Get all the support and education you need to achieve full potential
            as an entrepreneur.
          </p>
          <button>Join DEN</button>
        </Content>
      </Wrapper>
    </>
  );
}

export default Intro;
