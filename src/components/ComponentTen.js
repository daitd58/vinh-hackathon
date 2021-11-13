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
  padding: 0 40px 15px 130px;
  align-items: center;
  & span {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(35, 35, 39, 0.7);
    @media screen and (max-width: 1024px) {
      font-size: 12px;
    }
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
      @media screen and (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }

  & li:last-child {
    border-right: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const BoxList = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    gap: 13px;
  }
`;
const ComponentTen = ({ setOpen }) => {
  return (
    <>
      <Wrapper onClick={() => setOpen(false)}>
        <Box>
          <span>Copyright © Draper Startup House 2021</span>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Stories and news</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <BoxList>
            <a href="#">
              <img src={linkedin} />
            </a>
            <a href="">
              {" "}
              <img src={facebook} />
            </a>
            <a href="">
              {" "}
              <img src={twitter} />
            </a>
            <a href="">
              {" "}
              <img src={instagram} />
            </a>
          </BoxList>
        </Box>
      </Wrapper>
    </>
  );
};

export default ComponentTen;
