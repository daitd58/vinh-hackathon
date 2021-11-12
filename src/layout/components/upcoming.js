import React, { Component } from "react";
import styled from "styled-components";
import upcommingone from "../../asset/img/upcommingone.png";
import upcommingtwo from "../../asset/img/upcommingtwo.png";
import upcommingthree from "../../asset/img/upcommingthree.png";
import upcommingfour from "../../asset/img/upcommingfour.png";
import upcommingfive from "../../asset/img/upcommingfive.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Container = styled.div`
  padding: 250px 130px 0 130px;
  @media screen and (max-width: 1280px) {
    padding: 230px 80px 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 210px 40px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 190px 20px 0;
  }
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 45px;
  border-bottom: 10px solid rgba(233, 236, 241, 1);
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 25px;
    padding-bottom: 30px;
  }
  @media screen and (max-width: 376px) {
    padding-bottom: 24px;
  }
`;
const ViewContent = styled.div`
  padding-top: 65px;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 56px 36px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 376px) {
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
  width: 35%;
  @media screen and (max-width: 1280px) {
    width: 45%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
  }
`;
const TitleContent = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.8);
  width: 28%;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const ListItem = styled.div`
  box-sizing: border-box;
`;
const TitleDate = styled.div`
  font-family: "Oxygen", sans-serif;
  color: rgba(32, 67, 112, 1);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.2em;
  text-align: left;
  padding: 24px 0 16px;
`;
const TitleList = styled.div`
  font-family: "Didact Gothic", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: -0.015em;
  text-align: left;
  width: 90%;
  text-transform: uppercase;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;
const BtnTitle = styled.div`
  display: flex;
  padding-top: 20px;
  @media screen and (max-width: 376px) {
    padding-bottom: 50px;
  }
`;
const BtnTitleSeeAll = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const BtnClick = styled.button`
  border-radius: 25px;
  padding: 7px 35px;
  background: rgba(255, 204, 0, 1);
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 1);
  font-weight: 700;
  border: 0;
  :hover {
    cursor: pointer;
  }
`;
const BtnClickSeeAll = styled.button`
  border-radius: 25px;
  padding: 7px 35px;
  background: #fff;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 1);
  font-weight: 700;
  border: 2px solid #e5e5e5;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  letter-spacing: 0em;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;
const Image = styled.img`
  width: 100%;
`;
const BtnTitleSeeAllMobile = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    padding-top: 50px;
  }
  @media screen and (max-width: 376px) {
    padding-top: 0;
  }
`;
const SlideCarousel = styled(Slider)`
  display: none;
  @media screen and (max-width: 376px) {
    display: block;
    margin-top: 46px;
  }
`;

export default class Upcoming extends Component {
  state = {
    slideIndex: 0,
    updateCount: 0,
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      autoplay: true,
      cssEase: "linear",
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };
    return (
      <Container>
        <HeaderContent>
          <TitleHeader>upcoming events</TitleHeader>
          <TitleContent>
            Find the best offline and online events and training programs right
            here.
          </TitleContent>
          <BtnTitleSeeAll>
            <BtnClickSeeAll>See all upcoming events</BtnClickSeeAll>
          </BtnTitleSeeAll>
        </HeaderContent>
        <ViewContent>
          <ListItem>
            <Image src={upcommingone} alt={""} />
            <TitleDate>15 jan 2021</TitleDate>
            <TitleList>How to test ideas with no money or time</TitleList>
            <BtnTitle>
              <BtnClick>Register</BtnClick>
            </BtnTitle>
          </ListItem>
          <ListItem>
            <Image src={upcommingtwo} alt={""} />
            <TitleDate>08 jun 2021</TitleDate>
            <TitleList>
              Cleantech startups from finland and estonia to enter malaysia
            </TitleList>
            <BtnTitle>
              <BtnClick>Register</BtnClick>
            </BtnTitle>
          </ListItem>
          <ListItem>
            <Image src={upcommingthree} alt={""} />
            <TitleDate>17 may 2021</TitleDate>
            <TitleList>
              Yoga – first cass for beginer – feel free to sign up here
            </TitleList>
            <BtnTitle>
              <BtnClick>Register</BtnClick>
            </BtnTitle>
          </ListItem>
          <ListItem>
            <Image src={upcommingfour} alt={""} />
            <TitleDate>15 jan 2021</TitleDate>
            <TitleList>How to test ideas with no money or time</TitleList>
            <BtnTitle>
              <BtnClick>Register</BtnClick>
            </BtnTitle>
          </ListItem>
          <ListItem>
            <Image src={upcommingfive} alt={""} />
            <TitleDate>08 jun 2021</TitleDate>
            <TitleList>
              Cleantech startups from finland and estonia to enter malaysia
            </TitleList>
            <BtnTitle>
              <BtnClick>Register</BtnClick>
            </BtnTitle>
          </ListItem>
        </ViewContent>
        <SlideCarousel ref={(slider) => (this.slider = slider)} {...settings}>
          <ListItem>
            <Image src={upcommingone} alt={""} />
            <TitleDate>15 jan 2021</TitleDate>
            <TitleList>How to test ideas with no money or time</TitleList>
            <BtnTitle>
              <BtnClick>Register</BtnClick>
            </BtnTitle>
          </ListItem>
          <ListItem>
            <Image src={upcommingtwo} alt={""} />
            <TitleDate>08 jun 2021</TitleDate>
            <TitleList>
              Cleantech startups from finland and estonia to enter malaysia
            </TitleList>
            <BtnTitle>
              <BtnClick>Register</BtnClick>
            </BtnTitle>
          </ListItem>
          <ListItem>
            <Image src={upcommingthree} alt={""} />
            <TitleDate>17 may 2021</TitleDate>
            <TitleList>
              Yoga – first cass for beginer – feel free to sign up here
            </TitleList>
            <BtnTitle>
              <BtnClick>Register</BtnClick>
            </BtnTitle>
          </ListItem>
          <ListItem>
            <Image src={upcommingfour} alt={""} />
            <TitleDate>15 jan 2021</TitleDate>
            <TitleList>How to test ideas with no money or time</TitleList>
            <BtnTitle>
              <BtnClick>Register</BtnClick>
            </BtnTitle>
          </ListItem>
          <ListItem>
            <Image src={upcommingfive} alt={""} />
            <TitleDate>08 jun 2021</TitleDate>
            <TitleList>
              Cleantech startups from finland and estonia to enter malaysia
            </TitleList>
            <BtnTitle>
              <BtnClick>Register</BtnClick>
            </BtnTitle>
          </ListItem>
        </SlideCarousel>
        <BtnTitleSeeAllMobile>
          <BtnClickSeeAll>See all upcoming events</BtnClickSeeAll>
        </BtnTitleSeeAllMobile>
      </Container>
    );
  }
}
