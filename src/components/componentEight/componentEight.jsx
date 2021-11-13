import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #204370;
  padding: 80px 0;
  text-align: center;
  & h1 {
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
  }
  h2 {
    display: none;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 34px;
    text-align: center;
    letter-spacing: -0.015em;
    text-transform: uppercase;
    color: #ffffff;
    font-family: "Pathway Gothic One", sans-serif;
    padding: 0 15px;
  }
  & button {
    margin-top: 40px;
    padding: 0 45px;
    height: 65px;
    background: #ffcc00;
    border-radius: 40px;
    font-family: "Oxygen";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    color: #232327;
    border: none;
    cursor: pointer;
    transition: all 1s;
    :hover {
      filter: brightness(150%);
    }
  }
  @media screen and (max-width: 376px) {
    & h1 {
      display: none;
    }
    h2 {
      display: block;
    }
    & button {
      margin-top: 40px;
      padding: 0 45px;
      height: 65px;
      background: #ffcc00;
      border-radius: 40px;
      font-family: "Oxygen";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 26px;
      color: #232327;
      border: none;
      cursor: pointer;
      transition: all 1s;
      :hover {
        filter: brightness(150%);
        
      }
    }
  }
`;

function ComponentEight() {
  return (
    <>
      <Wrapper>
        <h1>
          WHERE ENTREPRENEURS AROUND THE WORLD GET CONNECTED, INSPIRED, AND
          EMPOWERED
        </h1>
        <h2>
          WHERE STARTUP HEROS AROUND THE WORLD GET CONNECTED, INSPIRED AND
          EMPOWERED
        </h2>
        <button>Join DEN</button>
      </Wrapper>
    </>
  );
}

export default ComponentEight;
