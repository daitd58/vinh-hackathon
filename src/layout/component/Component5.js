import React, { Component } from "react";
import styled from "styled-components";
import Group17 from "../../asset/img/Group 17.png";
import Group18 from "../../asset/img/Group 18.png";
import AvtOne from "../../asset/img/Rectangle1.png";
import AvtTwo from "../../asset/img/Rectangle2.png";
import AvtThree from "../../asset/img/Rectangle3.png";
import icon from "../../asset/img/“.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  background-color: #f4f6f8;
  padding-top: 130px;
  padding-bottom: 276.81px;
  @media screen and (max-width: 376px) {
    padding: 80px 0 300px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 131px 103.19px 131px;
  @media screen and (max-width: 1366px) {
    padding: 0 75px 103.19px 75px;
  }
  @media screen and (max-width: 1280px) {
    padding: 0 48px 103.19px 48px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 40px 103.19px 40px;
  }
  @media screen and (max-width: 376px) {
    display: block;
    padding: 0 0 40px 0;
  }
`;

const TextHeader = styled.div`
  border: 0;
  box-sizing: border-box;
  width: 544px;
  @media screen and (max-width: 376px) {
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 376px) {
    padding: 0 20px;
  }
`;
const Text = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  text-align: left;
  @media screen and (max-width: 376px) {
    font-size: 29px;
  }
`;

const Transfer = styled.div`
  display: flex;
  border: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const TransferLeft = styled.div`
  border: 1px solid white;
  box-sizing: border-box;
  &img {
    width: 100%;
  }
`;

const TransferRight = styled.div`
  border: 1px solid white;
  box-sizing: border-box;
  &img {
    width: 100%;
  }
`;
const Content = styled.div`
  background-color: #ffffff;
  border: 0;
  margin-top: 43px;
`;
const ContentHeader = styled.div`
  display: flex;
  margin-top: -43px;
`;

const ImageAvatar = styled.div`
  padding: 0 30px;
  @media screen and (max-width: 1280px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 20px;
  }
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: 1280px) {
    padding-right: 32px;
  }
  @media screen and (max-width: 1024px) {
    padding-right: 0px;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: left;
  padding-bottom: 40px;
  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 38px;
  }
`;

const TextProfile = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2px;
`;

const TextBig = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #232327;
  border: 0;
  box-sizing: border-box;
`;

const TextSmall = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #232327;
  opacity: 0.67;
  border: 0;
  box-sizing: border-box;
  @media screen and (max-width: 1280px) {
    font-size: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ContainerContent = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(35, 35, 39, 0.9);
  text-align: left;
  padding-left: 30px;
  padding-right: 32px;
  @media screen and (max-width: 1280px) {
    padding-left: 20px;
    padding-right: 22px;
  }
`;

const FooterContent = styled.div`
  text-decoration: underline;
  color: #204370;
  text-align: left;
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 40px;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #204370;
  @media screen and (max-width: 1280px) {
    padding-left: 20px;
  }
`;

const SliderSlick = styled(Slider)`
  margin: 0 131px;
  .slick-slide > div {
    margin-right: 10px;
  }
  @media screen and (max-width: 1280px) {
    margin: 0 48px;
    .slick-slide > div {
      margin-right: 20px;
    }
  }
  @media screen and (max-width: 1024px) {
    display: grid;
    .slick-slide > div {
      margin-right: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 40px;
    .slick-slide > div {
      margin-right: 20px;
    }
  }
  @media screen and (max-width: 376px) {
    display: block;
    padding: 0;
    margin: 0 20px;
    .slick-slide > div {
      margin-right: 5px;
    }
  }
`;

const Arrow = styled.div``;
const ArrowRight = styled.div`
  display: block;
  background-image: url(${Group17});
  width: 60px;
  height: 60px;
  top: -155px;
  right: 69px;
  :hover {
    background-image: url(${Group17});
  }
  ::before {
    display: none;
  }
  @media screen and (max-width: 1280px) {
    right: 75px;
  }
`;
const ArrowLeft = styled.div`
  display: block;
  background-image: url(${Group18});
  width: 60px;
  height: 60px;
  top: -155px;
  right: 100px;
  left: 1170px;
  :hover {
    background-image: url(${Group18});
  }
  ::before {
    display: none;
  }
  @media screen and (max-width: 1280px) {
    left: 1110px;
  }
  @media screen and (max-width: 1024px) {
    left: 854px;
  }
`;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow>
      <ArrowRight
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    </Arrow>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow>
      <ArrowLeft className={className} style={{ ...style }} onClick={onClick} />
    </Arrow>
  );
}

export default class ComponentFive extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
            arrows: false,
          },
        },
        {
          breakpoint: 376,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 2000,
            arrows: false,
          },
        },
      ],
    };
    return (
      <Wrapper>
        <Header>
          <TextHeader>
            <Title>
              <Text>What PEOPLE ARE</Text>
              <Text>SAYING ABOUT DEN</Text>
            </Title>
          </TextHeader>
        </Header>
        <SliderSlick {...settings}>
          <Content>
            <ContentHeader>
              <ImageAvatar>
                <img src={AvtOne} />
              </ImageAvatar>
              <ContentRight>
                <Icon>
                  <img src={icon} />
                </Icon>
                <TextProfile>
                  <TextBig>Simon JD</TextBig>
                  <TextSmall>Co-Founder and CEO, Travelio</TextSmall>
                </TextProfile>
              </ContentRight>
            </ContentHeader>
            <ContainerContent>
              <p>
                Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                luctus venenatis lectus magna fring ut venenatis tellus in metus
                vulputate eu scelerisque felis. Felis done.
              </p>
              Felis donec et odio pellentesque di scelerisque felis. Ornare
              massa eget egest.
            </ContainerContent>
            <FooterContent>Learn more</FooterContent>
          </Content>
          <Content>
            <ContentHeader>
              <ImageAvatar>
                <img src={AvtTwo} />
              </ImageAvatar>
              <ContentRight>
                <Icon>
                  <img src={icon} />
                </Icon>
                <TextProfile>
                  <TextBig>Jane Cooper</TextBig>
                  <TextSmall>Co-Founder and CEO, Travelio</TextSmall>
                </TextProfile>
              </ContentRight>
            </ContentHeader>
            <ContainerContent>
              <p>
                Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                luctus venenatis lectus magna fring ut venenatis tellus in metus
                vulputate eu scelerisque felis. Felis done.
              </p>
              Felis donec et odio pellentesque di scelerisque felis. Ornare
              massa eget egest.
            </ContainerContent>
            <FooterContent>Learn more</FooterContent>
          </Content>
          <Content>
            <ContentHeader>
              <ImageAvatar>
                <img src={AvtThree} />
              </ImageAvatar>
              <ContentRight>
                <Icon>
                  <img src={icon} />
                </Icon>
                <TextProfile>
                  <TextBig>Albert Flores</TextBig>
                  <TextSmall>Marketing Coordinator, Gillette </TextSmall>
                </TextProfile>
              </ContentRight>
            </ContentHeader>
            <ContainerContent>
              <p>
                Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                luctus venenatis lectus magna fring ut venenatis tellus in metus
                vulputate eu scelerisque felis. Felis done.
              </p>
              Felis donec et odio pellentesque di scelerisque felis. Ornare
              massa eget egest.
            </ContainerContent>
            <FooterContent>Learn more</FooterContent>
          </Content>
          <Content>
            <ContentHeader>
              <ImageAvatar>
                <img src={AvtOne} />
              </ImageAvatar>
              <ContentRight>
                <Icon>
                  <img src={icon} />
                </Icon>
                <TextProfile>
                  <TextBig>Simon JD</TextBig>
                  <TextSmall>Co-Founder and CEO, Travelio</TextSmall>
                </TextProfile>
              </ContentRight>
            </ContentHeader>
            <ContainerContent>
              <p>
                Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                luctus venenatis lectus magna fring ut venenatis tellus in metus
                vulputate eu scelerisque felis. Felis done.
              </p>
              Felis donec et odio pellentesque di scelerisque felis. Ornare
              massa eget egest.
            </ContainerContent>
            <FooterContent>Learn more</FooterContent>
          </Content>
          <Content>
            <ContentHeader>
              <ImageAvatar>
                <img src={AvtTwo} />
              </ImageAvatar>
              <ContentRight>
                <Icon>
                  <img src={icon} />
                </Icon>
                <TextProfile>
                  <TextBig>Jane Cooper</TextBig>
                  <TextSmall>Co-Founder and CEO, Travelio</TextSmall>
                </TextProfile>
              </ContentRight>
            </ContentHeader>
            <ContainerContent>
              <p>
                Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                luctus venenatis lectus magna fring ut venenatis tellus in metus
                vulputate eu scelerisque felis. Felis done.
              </p>
              Felis donec et odio pellentesque di scelerisque felis. Ornare
              massa eget egest.
            </ContainerContent>
            <FooterContent>Learn more</FooterContent>
          </Content>
          <Content>
            <ContentHeader>
              <ImageAvatar>
                <img src={AvtThree} />
              </ImageAvatar>
              <ContentRight>
                <Icon>
                  <img src={icon} />
                </Icon>
                <TextProfile>
                  <TextBig>Albert Flores</TextBig>
                  <TextSmall>Marketing Coordinator, Gillette </TextSmall>
                </TextProfile>
              </ContentRight>
            </ContentHeader>
            <ContainerContent>
              <p>
                Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                luctus venenatis lectus magna fring ut venenatis tellus in metus
                vulputate eu scelerisque felis. Felis done.
              </p>
              Felis donec et odio pellentesque di scelerisque felis. Ornare
              massa eget egest.
            </ContainerContent>
            <FooterContent>Learn more</FooterContent>
          </Content>
        </SliderSlick>
      </Wrapper>
    );
  }
}
