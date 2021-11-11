import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo-dark.png";
import navigation from "../assets/img/navigation.png";

const Wrapper = styled.div`
  height: 90px;
  background-color: #0e2c51;
  opacity: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  right: 0;
  top: 0;
  left: 0;
  z-index: 99999;

  // @media screen and (max-width: 2500px) {
  //   height: 120px;
  // }

  // @media screen and (max-width: 1920px) {
  //   height: 90px;
  // }

  // @media screen and (max-width: 1550px) {
  //   height: 90px;
  // }

  @media screen and (max-width: 480px) {
    height: 80px;
  }

  @media screen and (max-width: 376px) {
    height: 80px;
  }
`;
const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  @media screen and (max-width: 1024px) {
    padding: 0 0px;
  }
`;

const RightHeader = styled.div`
  padding: 0 30px;
  // @media screen and (max-width: 2500px) {
  //   width: 272px;
  //   height: 59px;
  //   margin-top: -15px;
  //   margin-right: 15px;
  // }

  // @media screen and (max-width: 1920px) {
  //   width: 218px;
  //   height: 50px;
  //   margin-top: 5px;
  // }
  @media screen and (max-width: 1024px) {
    width: 183px;
  }
  @media screen and (max-width: 480px) {
    width: 0;
    height: 0px;
    margin-top: 0;
  }

  @media screen and (max-width: 376px) {
    width: 0;
    height: 0px;
    margin-top: 0;
  }
`;

const LogoContaner = styled.div`
  padding: 0 45px 0 10px;
  @media screen and (max-width: 768px) {
    padding: 0 45px 0 37px;
  }
`;

const LogoImage = styled.img`
  @media screen and (max-width: 376px) {
    width: 154px;
    height: 50px;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Navigation = styled.div`
  padding: 0 32px;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  color: #ffffff;
  font-size: 12px !important;
  border-left: 1px solid #ffffff;
  opacity: 0.7;
  font-family: "Oxygen", sans-serif;

  // @media screen and (max-width: 2500px) {
  //   font-size: 20px !important;
  // }

  // @media screen and (max-width: 1920px) {
  //   font-size: 15px !important;
  // }

  // @media screen and (max-width: 1551px) {
  //   font-size: 12px !important;
  // }

  @media screen and (max-width: 1024px) {
    padding: 0 17px;
    font-size: 10px !important;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const CommunityButton = styled.button`
  height: 50px;
  max-width: max-content;
  padding: 0 35px;
  font-size: 16px;
  line-height: 26px;
  font-weight: bold;
  font-family: "Oxygen", sans-serif;
  color: #2a2a2a;
  border: 1px solid #204370;
  box-sizing: border-box;
  border-radius: 25px;

  // @media screen and (max-width: 2500px) {
  //   width: 259px;
  //   height: 79px;
  //   font-size: 20px;
  //   border-radius: 50px;
  // }

  // @media screen and (max-width: 1920px) {
  //   height: 50px;
  //   font-size: 16px;
  //   border-radius: 25px;
  // }

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    height: 47px;
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

const HideImg = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: inline;
    margin: -6px 0px 0 405px;
  }

  @media screen and (max-width: 480px) {
    margin: -6px 0px 0 126px;
  }

  @media screen and (max-width: 376px) {
    display: inline;
    margin: -6px 0px 0 49px;
  }
`;
const Header = () => {
  return (
    <Wrapper>
      <LeftHeader>
        <LogoContaner>
          <LogoImage src={logo} />
        </LogoContaner>
        <NavigationContainer>
          <Navigation>CITIES</Navigation>
          <Navigation>VENTURES</Navigation>
          <Navigation>ACADEMY</Navigation>
          <Navigation>SERVICES</Navigation>
          <Navigation>ACCELERATOR</Navigation>
          <Navigation>ABOUT US</Navigation>
        </NavigationContainer>
      </LeftHeader>
      <HideImg src={navigation} />
      <RightHeader>
        <CommunityButton>Join our community</CommunityButton>
      </RightHeader>
    </Wrapper>
  );
};

export default Header;

// @media screen and (max-width: 2500px) {
//   padding-left: 140px;
//   font-size: 40px;
// }
// @media screen and (max-width: 1920px) {
//   padding-left: 132px;
//   font-size: 30px;
// }
// @media screen and (max-width: 1550px) {
//   padding-left: 110px;
// }
// @media screen and (max-width: 768px) {
//   font-size: 30px;
//   padding-left: 33px;
// }
// @media screen and (max-width: 480px) {
//   font-size: 25px;
//   padding-left: 0;
// }
