import React from "react";
import styled from "styled-components";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import linkedin from "../assets/img/linkedin.png";
import twitter from "../assets/img/twitter.png";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 13px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px 0 130px;
  align-items: center;
  & span {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(35, 35, 39, 0.7);
  }

  & ul {
    list-style-type: none;
    padding: 0;
    overflow: hidden;
  }
  & li {
    float: left;
    border-right: 1px solid #d2d9e2;
    height: 12px;
    padding: 0px 0 12px 0px;
    & a {
      display: block;
      color: rgba(23, 41, 64, 0.9);
      text-align: center;
      padding: 0px 16px;
      text-decoration: none;
      display: flex;
      font-family: "Oxygen", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: rgba(23, 41, 64, 0.9);
    }
  }

  & li:last-child {
    border-right: none;
  }
`;

const BoxList = styled.div`
  display: flex;
  gap: 20px;
`;
const ComponentTen = () => {
  return (
    <>
      <Wrapper>
        <Box>
          <span>Copyright © Draper Startup House 2021</span>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#news">About</a>
            </li>
            <li>
              <a href="#contact">Stories and news</a>
            </li>
            <li>
              <a href="#about">Contact</a>
            </li>
            <li>
              <a href="#about">Privacy Policy</a>
            </li>
          </ul>
          <BoxList>
            <img src={linkedin} />
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
          </BoxList>
        </Box>
      </Wrapper>
    </>
  );
};

export default ComponentTen;
