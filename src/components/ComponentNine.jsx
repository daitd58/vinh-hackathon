import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageOne from "../img/upcomingOne.png";
import imageTwo from "../img/upcomingTwo.png";
import imageThree from "../img/upcomingThree.png";
import imageFour from "../img/upcomingFour.png";
import imageFive from "../img/upcomingFive.png";

const Wrapper = styled.div`
  padding: 0 100px 150px 100px;
  background: #ffffff;
  @media screen and (max-width: 1024px) {
    padding: 0 80px 150px 80px;
  }
  @media screen and (max-width: 769px) {
    padding: 0 50px 130px 50px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 30px 90px 30px;
  }
`;
const StyleScroll = styled.div`
  background: #e9ecf1;
  width: 100%;
  height: 10px;
`;
const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2%;
  padding-top: 50px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const StyleGridMobile = styled(Slider)`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline-block;
    width: 100%;
    padding-top: 50px;
    & ul {
      bottom: -40px;
    }
    .slick-slide > div {
      margin: 0 5px;
    }
  }
`;
const StyleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & img {
    width: 100%;
  }
  & p {
    font-weight: 550;
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    font-size: 13px;
    text-transform: uppercase;
    color: #204370;
    padding-top: 15px;
    letter-spacing: 2px;
    margin: 0;
  }
  @media screen and (max-width: 1024px) {
    & p {
      font-size: 12px;
    }
  }
`;
const TextTitle = styled.div`
  font-weight: 600;
  font-size: 38px;
  line-height: 38px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #232327;
  padding-top: 15px;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 1280px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 23px;
    line-height: 26px;
  }
  @media screen and (max-width: 769px) {
    font-size: 19px;
  }
  @media screen and (max-width: 376px) {
    font-size: 26px;
  }
`;
const StyleButton = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-top: 15px;
`;
const Button = styled.button`
  background: #ffcc00;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 550;
  padding: 10px 30px;
  border: none;
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  @media screen and (max-width: 1024px) {
    & p {
      font-size: 12px;
    }
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
  }
`;
const ButtonMobile = styled.button`
  height: 65px;
  padding: 0 55px;
  font-size: 17px;
  font-weight: 700;
  background: #ffffff;
  white-space: nowrap;
  color: #2a2a2a;
  border: 1px solid #204370;
  box-sizing: border-box;
  border-radius: 35px;
`;
function ComponentNine({setOpen}) {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
          dots: false,
        },
      },
    ],
  };
  return (
    <Wrapper onClick={() => setOpen(false)}>
      <StyleScroll></StyleScroll>
      <StyleGrid>
        <StyleBox>
          <img src={imageOne} alt={""} />
          <p>15 jan 2021</p>
          <TextTitle>How to Test Ideas with No Money or Time</TextTitle>
          <StyleButton>
            <Button>Register</Button>
          </StyleButton>
        </StyleBox>
        <StyleBox>
          <img src={imageTwo} alt={""} />
          <p>08 jun 2021</p>
          <TextTitle>
            CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
          </TextTitle>
          <StyleButton>
            <Button>Register</Button>
          </StyleButton>
        </StyleBox>
        <StyleBox>
          <img src={imageThree} alt={""} />
          <p>17 may 2021</p>
          <TextTitle>
            Yoga – first cass for beginer – feel free to sign up here.
          </TextTitle>
          <StyleButton>
            <Button>Register</Button>
          </StyleButton>
        </StyleBox>
        <StyleBox>
          <img src={imageFour} alt={""} />
          <p>15 jan 2021</p>
          <TextTitle>How to Test Ideas with No Money or Time</TextTitle>
          <StyleButton>
            <Button>Register</Button>
          </StyleButton>
        </StyleBox>
        <StyleBox>
          <img src={imageFive} alt={""} />
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
          <img src={imageOne} alt={""} />
          <p>15 jan 2021</p>
          <TextTitle>How to Test Ideas with No Money or Time</TextTitle>
          <StyleButton>
            <Button>Register</Button>
          </StyleButton>
        </StyleBox>
        <StyleBox>
          <img src={imageTwo} alt={""} />
          <p>08 jun 2021</p>
          <TextTitle>
            CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
          </TextTitle>
          <StyleButton>
            <Button>Register</Button>
          </StyleButton>
        </StyleBox>
        <StyleBox>
          <img src={imageThree} alt={""} />
          <p>17 may 2021</p>
          <TextTitle>
            Yoga – first cass for beginer – feel free to sign up here.
          </TextTitle>
          <StyleButton>
            <Button>Register</Button>
          </StyleButton>
        </StyleBox>
        <StyleBox>
          <img src={imageFour} alt={""} />
          <p>15 jan 2021</p>
          <TextTitle>How to Test Ideas with No Money or Time</TextTitle>
          <StyleButton>
            <Button>Register</Button>
          </StyleButton>
        </StyleBox>
        <StyleBox>
          <img src={imageFive} alt={""} />
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
  );
}
export default ComponentNine;
