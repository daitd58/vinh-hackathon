import React from "react";
import styled from "styled-components";
import talk from "../assets/img/talk.png";
import picnic from "../assets/img/picnic.png";
import yoga from "../assets/img/yoga.png";
import meet from "../assets/img/meet.png";
import activity from "../assets/img/activity.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  padding: 130px 130px 150px 130px;
  background: #ffffff;
  @media screen and (max-width: 1024px) {
    padding: 0 64px 150px 64px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 40px 130px 40px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 20px 10px 20px;
  }
`;

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2%;
  padding-top: 50px;

  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const StyleGridMobile = styled(Slider)`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    padding-top: 50px;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    & ul {
      bottom: -40px;
    }
  }
  @media screen and (max-width: 376px) {
    display: flex;
    padding-top: 50px;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    & ul {
      bottom: -40px;
    }
  }
`;

const StyleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 25px;
  & img {
    width: 100%;
  }
  & p {
    font-weight: 700;
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    color: #204370;
    padding-top: 15px;
    margin: 0;
    line-height: 22px;
    letter-spacing: 0.2em;
  }
  @media screen and (max-width: 1024px) {
    & p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    & p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 480px) {
    & p {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

const TextTitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #232327;
  padding-top: 15px;
  font-family: "Pathway Gothic One", sans-serif;

  @media screen and (max-width: 1024px) {
    font-size: 23px;
  }
  @media screen and (max-width: 768px) {
    font-size: 19px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

const StyleButton = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-top: 15px;
  @media screen and (max-width: 480px) {
    padding-top: 30px;
  }
`;

const Button = styled.button`
  background: #ffcc00;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  line-height: 26px;
  padding: 10px 30px;
  border: none;
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  @media screen and (max-width: 1024px) {
    & p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 6px 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding: 10px 30px;
  }
`;

const StyledButtonMobile = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 50px;
    & button {
      &.slick-next:before {
        display: none;
      }
      right: 0;
      display: none;
      left: 0;
    }
  }
`;

const ButtonMobile = styled.button`
  height: 65px;
  padding: 0 67px;
  font-size: 17px;
  font-weight: 700;
  background: #ffffff;
  white-space: nowrap;
  color: #2a2a2a;
  border: 1px solid #204370;
  box-sizing: border-box;
  border-radius: 35px;
`;

const ComponentSeven = ({ setOpen }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Wrapper onClick={() => setOpen(false)}>
        <StyleGrid>
          <StyleBox>
            <img src={picnic} alt={""} />
            <p>15 jan 2021</p>
            <TextTitle>How to Test Ideas with No Money or Time</TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={talk} alt={""} />
            <p>08 jun 2021</p>
            <TextTitle>
              CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
            </TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={yoga} alt={""} />
            <p>17 may 2021</p>
            <TextTitle>
              Yoga – first cass for beginer – feel free to sign up here.
            </TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={meet} alt={""} />
            <p>15 jan 2021</p>
            <TextTitle>How to Test Ideas with No Money or Time</TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={activity} alt={""} />
            <p>08 jun 2021</p>
            <TextTitle>
              CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
            </TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
        </StyleGrid>
        <StyleGridMobile {...settings}>
          <StyleBox>
            <img src={picnic} alt={""} />
            <p>15 jan 2021</p>
            <TextTitle>How to Test Ideas with No Money or Time</TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={talk} alt={""} />
            <p>08 jun 2021</p>
            <TextTitle>
              CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
            </TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={yoga} alt={""} />
            <p>17 may 2021</p>
            <TextTitle>
              Yoga – first cass for beginer – feel free to sign up here.
            </TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={meet} alt={""} />
            <p>15 jan 2021</p>
            <TextTitle>How to Test Ideas with No Money or Time</TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={activity} alt={""} />
            <p>08 jun 2021</p>
            <TextTitle>
              CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
            </TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
        </StyleGridMobile>
        <StyledButtonMobile>
          <ButtonMobile>See all upcoming events</ButtonMobile>
        </StyledButtonMobile>
      </Wrapper>
    </>
  );
};

export default ComponentSeven;
