import React from "react";
import styled from "styled-components";
import background from "../assets/img/background.png";
import Den from "../assets/img/word.png";
import background_mobile from "../assets/img/background_mobile.png";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${background});
  padding: 180px 0 110px 0;

  // @media screen and (max-width: 2500px) {
  //   padding: 300px 0 !important;
  // }
  // @media screen and (max-width: 1920px) {
  //   padding: 195px 0 !important;
  // }
  // @media screen and (max-width: 1551px) {
  //   padding: 180px 0 110px 0 !important;
  // }
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 376px) {
    background-image: url(${background_mobile});
    width: auto;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
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
    margin-bottom: 25px;
    margin-top: 30px;
    width: 30%;
    font-style: normal;
    font-weight: 500;
    font-size: 56px;
    line-height: 56px;
    color: #ffffff;
    letter-spacing: -0.015em;
    padding: 0 300px;
    font-family: "Pathway Gothic One", sans-serif;
    text-align: center;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);

    // @media screen and (max-width: 2500px) {
    //   font-size: 79px;
    //   line-height: 79px;
    //   margin: 0 0 54px 0;
    // }
    // @media screen and (max-width: 1920px) {
    //   font-size: 60px !important;
    //   line-height: 60px !important;
    //   margin: -37px 0 54px 0;
    // }

    // @media screen and (max-width: 1551px) {
    //   font-size: 56px !important;
    //   line-height: 56px !important;
    // }
    @media screen and (max-width: 1024px) {
      width: 69%;
      padding: 0 0;
    }
    @media screen and (max-width: 768px) {
      padding: 0 0;
      font-style: normal;
      font-weight: 500;
      font-size: 46px;
      line-height: 46px;
      text-align: center;
      letter-spacing: -0.015em;
      text-transform: uppercase;
      color: #ffffff;
      text-shadow: 0px 0px 10px rgb(0 0 0 / 5%);
      font-family: "Pathway Gothic One", sans-serif;
      width: 65%;
    }

    @media screen and (max-width: 480px) {
      width: 80%;
      font-size: 36px !important;
      line-height: 40px !important;
    }

    @media screen and (max-width: 376px) {
      padding: 0 0;
      font-style: normal;
      font-weight: 500;
      font-size: 30px !important;
      line-height: 36px !important;
      text-align: center;
      letter-spacing: -0.015em;
      text-transform: uppercase;
      color: #ffffff;
      text-shadow: 0px 0px 10px rgb(0 0 0 / 5%);
      font-family: "Pathway Gothic One", sans-serif;
      width: 89%;
    }
  }

  & p {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
    line-height: 26px;
    text-align: center;
    font-family: "Oxygen", sans-serif;
    padding: 0 590px;
    margin-top: -1px;
    // @media screen and (max-width: 2500px) {
    //   width: 24%;
    //   font-size: 25px;
    //   line-height: 40px;
    // }

    // @media screen and (max-width: 1920px) {
    //   width: 21% !important;
    //   font-size: 19px !important;
    //   line-height: 30px !important;
    // }
    // @media screen and (max-width: 1551px) {
    //   font-size: 16px !important;
    //   line-height: 26px !important;
    //   width: 22% !important;
    // }
    @media screen and (max-width: 1024px) {
      margin-bottom: 30px;
      font-weight: bold;
      font-size: 16px !important;
      color: #ffffff;
      line-height: 26px !important;
      text-align: center;
      font-family: "Oxygen", sans-serif;
      margin-top: -1px;
      padding: 0 0px;
      width: 44% !important;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 30px;
      font-weight: bold;
      font-size: 16px;
      color: #ffffff;
      line-height: 26px;
      text-align: center;
      font-family: "Oxygen", sans-serif;
      margin-top: -1px;
      padding: 0 0;
      width: 50% !important;
    }
    @media screen and (max-width: 480px) {
      width: 72% !important;
    }

    @media screen and (max-width: 376px) {
      margin-bottom: 30px;
      font-weight: bold;
      font-size: 16px;
      color: #ffffff;
      line-height: 26px;
      text-align: center;
      font-family: "Oxygen", sans-serif;
      margin-top: -1px;
      padding: 0 0;
      width: 89% !important;
    }
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
    display: flex;
    align-items: center;
    text-align: center;
    width: 156px;
    font-family: "Oxygen", sans-serif;
    // @media screen and (max-width: 2500px) {
    //   height: 81px;
    //   padding: 0 53px;
    //   font-size: 23px;
    //   line-height: 28px;
    //   width: 201px;
    //   margin: 21px 0 -82px 0;
    // }
    // @media screen and (max-width: 1920px) {
    //   height: 68px;
    //   font-size: 18px;
    //   width: 165px;
    //   padding: 0 45px;
    // }
    // @media screen and (max-width: 1551px) {
    //   height: 65px;
    //   font-size: 16px;
    //   width: 156px;
    // }
    @media screen and (max-width: 1024px) {
      height: 65px;
      font-size: 16px;
      width: 156px;
    }
    @media screen and (max-width: 376px) {
      height: 65px;
      padding: 0 45px;
      font-weight: bold;
      font-size: 16px;
      line-height: 26px;
      background: #204370;
      border-radius: 40px;
      color: #ffffff;
      border: none;
      display: flex;
      align-items: center;
      text-align: center;
      width: 156px;
      font-family: "Oxygen", sans-serif;
    }
  }
`;

const Img = styled.img`
  // @media screen and (max-width: 1920px) {
  //   width: 11%;
  //   margin: 0 0 84px 0;
  // }
  // @media screen and (max-width: 1551px) {
  //   width: auto;

  // }
  @media screen and (max-width: 480px) {
    margin-top: -25px;
  }

  @media screen and (max-width: 376px) {
    margin-top: -9px;
  }
`;
const Background = ({ setOpen }) => {
  return (
    <>
      <Wrapper onClick={() => setOpen(false)}>
        <Content>
          <Img src={Den} />
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
};

export default Background;
