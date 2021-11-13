import React, { Component } from "react";
import styled from "styled-components";
import simon from "../../asset/img/simon.png";
import janecooper from "../../asset/img/janecooper.png";
import albertflores from "../../asset/img/albertflores.png";
import Icon from "../../asset/img/Icon.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arrowleft from "../../asset/img/arrowleft.png";
import arrowright from "../../asset/img/arrowright.png";

const TitleContent =
  "Ornare massa eget egestas purus viverrasan in nisl. Sit amet luctus venenatis lectus magna fring ut venenatis tellus in metus vulputate eu scelerisque felis. Felis done.";
const TitleContentLast =
  "Felis donec et odio pellentesque di scelerisque felis. Ornare massa eget egest.";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(244, 246, 248, 1);
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 130px 130px 0;
  align-items: center;
  @media screen and (max-width: 1280px) {
    padding: 80px 80px 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 80px 40px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 80px 0 40px;
  }
`;
const ContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 90px 130px 275px;
  column-gap: 30px;
  @media screen and (max-width: 1280px) {
    padding: 90px 80px 275px;
  }
  @media screen and (max-width: 1024px) {
    padding: 90px 40px 275px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const TitleHeader = styled.div`
  text-transform: uppercase;
  color: #204370;
  font-family: "Didact Gothic", sans-serif;
  font-size: 50px;
  line-height: 60px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -0.015em;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
  }
`;
const IconHeader = styled.img`
  width: 60px;
  height: 60px;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 1);
  margin-top: 50px;
  padding-bottom: 40px;
  @media screen and (max-width: 768px) {
    margin-bottom: 28px;
  }
`;
const HeaderItem = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 30px;
  margin-top: -50px;
  padding: 0 30px 40px;
  @media screen and (max-width: 1280px) {
    gap: 20px;
    padding: 0 20px 40px;
  }
  @media screen and (max-width: 1024px) {
    gap: 15px;
    padding: 0 15px 30px;
    padding-bottom: 30px;
  }
`;
const BoxTitle = styled.div``;
const ImageIcon = styled.img`
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    margin-bottom: 28px;
  }
  @media screen and (max-width: 376px) {
    margin-bottom: 5px;
  }
`;
const ImagePeople = styled.img``;
const TitleName = styled.div`
  font-family: "Oxygen", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  vertical-align: Top;
  color: #232327;
  font-style: normal;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media screen and (max-width: 376px) {
    font-size: 20px;
    line-height: 28px;
  }
`;
const TitleWork = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #232327;
  opacity: 67%;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width: 1024px) {
    font-size: 10px;
    line-height: 20px;
  }
  @media screen and (max-width: 376px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
const ViewItem = styled.div`
  font-size: 16px;
  font-family: "Oxygen", sans-serif;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.9);
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  padding: 0 30px 20px;
  @media screen and (max-width: 1280px) {
    gap: 20px;
    padding: 0 20px 20px;
  }
  @media screen and (max-width: 1024px) {
    gap: 15px;
    padding: 0 15px;
    font-size: 14px;
    line-height: 24px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 376px) {
    font-size: 16px;
    line-height: 26px;
  }
`;
const LearnMore = styled.a`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: #204370;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  padding: 0 30px;
  @media screen and (max-width: 1280px) {
    gap: 20px;
    padding: 0 20px;
  }
  @media screen and (max-width: 1024px) {
    gap: 15px;
    padding: 0 15px;
    font-size: 14px;
    line-height: 24px;
  }
  @media screen and (max-width: 375px) {
    font-size: 16px;
    line-height: 26px;
  }
`;
const FooterBox = styled.div`
  position: absolute;
  top: 89%;
  width: 100%;
  @media screen and (max-width: 768px) {
    position: relative;
    margin-bottom: -100px;
    margin-top: 80px;
  }
`;
const ListFooter = styled.div`
  margin: 0 130px;
  background: rgba(32, 67, 112, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media screen and (max-width: 1280px) {
    margin: 0 80px;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 40px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const FooterTitle = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 40px;
  line-height: 50px;
  color: #fff;
  text-transform: uppercase;
  padding-top: 58px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.015em;
  text-align: left;
  @media screen and (max-width: 1024px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 20px 10px;
    font-size: 26px;
    line-height: 36px;
  }
  @media screen and (max-width: 376px) {
    font-size: 29px;
    line-height: 50px;
    padding: 65px 20px;
  }
`;
const LastFooterTitle = styled.div`
  padding-bottom: 58px;
  padding-right: 50px;
  @media screen and (max-width: 768px) {
    padding-right: 30px;
    padding-bottom: 40px;
  }
`;
const TitleLast = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-size: 40px;
  line-height: 50px;
  font-weight: 500;
  letter-spacing: -0.015em;
  text-align: left;
  color: #fff;
  text-transform: uppercase;
  @media screen and (max-width: 1024px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 36px;
  }
`;
const SlideCarousel = styled(Slider)`
  display: flex;
  justify-content: center;
  padding: 90px 130px 275px;
  .slick-dots {
    bottom: 220px;
  }
  .slick-slide > div {
    margin: 0 10px;
  }
  @media screen and (max-width: 1280px) {
    padding: 90px 80px 275px;
  }
  @media screen and (max-width: 1024px) {
    padding: 90px 40px 275px;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    .slick-slide > div {
      margin: 0 5px;
    }
    .slick-dots {
      bottom: -20px;
    }
  }
`;
const ListFooterMobile = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    background: rgba(32, 67, 112, 1);
    display: block;
  }
`;
const ArrowItem = styled.div`
  display: flex;
`;
const ItemArrowRight = styled.div`
  @media screen and (max-width: 1900px) {
    right: 140px;
  }
  @media screen and (max-width: 1500px) {
    right: 121px;
  }
  display: block;
  background-image: url(${arrowright});
  width: 60px;
  height: 60px;
  top: -50px;
  ::before {
    display: none;
  }
  :hover {
    background-image: url(${arrowright});
  }
  @media screen and (max-width: 1280px) {
    right: 90px;
  }
  @media screen and (max-width: 1024px) {
    right: 54px;
  }
`;
const ItemArrowLeft = styled.div`
  @media screen and (max-width: 1900px) {
    left: 1639px;
  }
  @media screen and (max-width: 1550px) {
    left: 1258px;
  }
  display: block;
  background-image: url(${arrowleft});
  width: 60px;
  height: 60px;
  top: -50px;
  :hover {
    background-image: url(${arrowleft});
  }
  ::before {
    display: none;
  }
  @media screen and (max-width: 1280px) {
    left: 1069px;
  }
  @media screen and (max-width: 1024px) {
    left: 849px;
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowItem>
      <ItemArrowRight
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    </ArrowItem>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowItem>
      <ItemArrowLeft
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    </ArrowItem>
  );
}

export default class WhatPeople extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      // slidesToScroll: 1,
      // autoplaySpeed: 7000,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 7000,
            autoplay: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
        {
          breakpoint: 769,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 7000,
            autoplay: true,
            arrows: false,
          },
        },
        {
          breakpoint: 376,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplaySpeed: 7000,
            arrows: false,
            autoplay: true,
            dots: true,
            speed: 500,
          },
        },
      ],
    };
    return (
      <Container>
        <HeaderBox>
          <TitleHeader>
            What PEOPLE ARE
            <br />
            SAYING ABOUT DEN
          </TitleHeader>
        </HeaderBox>

        <SlideCarousel {...settings}>
          <ListItem>
            <HeaderItem>
              <ImagePeople src={simon} alt={""} />
              <BoxTitle>
                <ImageIcon src={Icon} alt={""} />
                <TitleName>Simon JD</TitleName>
                <TitleWork>Co-Founder and CEO, Travelio</TitleWork>
              </BoxTitle>
            </HeaderItem>
            <ViewItem>{TitleContent}</ViewItem>
            <ViewItem>{TitleContentLast}</ViewItem>
            <LearnMore href="#">Learn more</LearnMore>
          </ListItem>
          <ListItem>
            <HeaderItem>
              <ImagePeople src={janecooper} alt={""} />
              <BoxTitle>
                <ImageIcon src={Icon} alt={""} />
                <TitleName>Simon JD</TitleName>
                <TitleWork>Co-Founder and CEO, Travelio</TitleWork>
              </BoxTitle>
            </HeaderItem>
            <ViewItem>{TitleContent}</ViewItem>
            <ViewItem>{TitleContentLast}</ViewItem>
            <LearnMore href="#">Learn more</LearnMore>
          </ListItem>
          <ListItem>
            <HeaderItem>
              <ImagePeople src={albertflores} alt={""} />
              <BoxTitle>
                <ImageIcon src={Icon} alt={""} />
                <TitleName>Albert Flores</TitleName>
                <TitleWork>Marketing Coordinator, Gillette </TitleWork>
              </BoxTitle>
            </HeaderItem>
            <ViewItem>{TitleContent}</ViewItem>
            <ViewItem>{TitleContentLast}</ViewItem>
            <LearnMore href="#">Learn more</LearnMore>
          </ListItem>
          <ListItem>
            <HeaderItem>
              <ImagePeople src={simon} alt={""} />
              <BoxTitle>
                <ImageIcon src={Icon} alt={""} />
                <TitleName>Simon JD</TitleName>
                <TitleWork>Co-Founder and CEO, Travelio</TitleWork>
              </BoxTitle>
            </HeaderItem>
            <ViewItem>{TitleContent}</ViewItem>
            <ViewItem>{TitleContentLast}</ViewItem>
            <LearnMore href="#">Learn more</LearnMore>
          </ListItem>
          <ListItem>
            <HeaderItem>
              <ImagePeople src={janecooper} alt={""} />
              <BoxTitle>
                <ImageIcon src={Icon} alt={""} />
                <TitleName>Simon JD</TitleName>
                <TitleWork>Co-Founder and CEO, Travelio</TitleWork>
              </BoxTitle>
            </HeaderItem>
            <ViewItem>{TitleContent}</ViewItem>
            <ViewItem>{TitleContentLast}</ViewItem>
            <LearnMore href="#">Learn more</LearnMore>
          </ListItem>
          <ListItem>
            <HeaderItem>
              <ImagePeople src={albertflores} alt={""} />
              <BoxTitle>
                <ImageIcon src={Icon} alt={""} />
                <TitleName>Albert Flores</TitleName>
                <TitleWork>Marketing Coordinator, Gillette </TitleWork>
              </BoxTitle>
            </HeaderItem>
            <ViewItem>{TitleContent}</ViewItem>
            <ViewItem>{TitleContentLast}</ViewItem>
            <LearnMore href="#">Learn more</LearnMore>
          </ListItem>
        </SlideCarousel>
        <FooterBox>
          <ListFooter>
            <FooterTitle>
              Draper Startup House is on a mission to enable
            </FooterTitle>
            <LastFooterTitle>
              <TitleLast>
                ONE million
                <span style={{ paddingLeft: "5px" }}>
                  {" "}
                  entrepreneurs worldwide by
                </span>{" "}
                <span style={{ paddingLeft: "3px" }}>2023</span>
              </TitleLast>
            </LastFooterTitle>
          </ListFooter>
          <ListFooterMobile>
            <FooterTitle>
              Draper Startup House is on a mission to enable 1 million
              entrepreneurs worldwide by 2023
            </FooterTitle>
          </ListFooterMobile>
        </FooterBox>
      </Container>
    );
  }
}
