import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Item1 from "../../asset/img/img1.png";
import Item2 from "../../asset/img/img2.png";
import Item3 from "../../asset/img/img3.png";
import Item4 from "../../asset/img/img4.png";
import Item5 from "../../asset/img/img5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 131px;
  padding-bottom: 126px;
  @media screen and (max-width: 1366px) {
    margin: 0 75px;
  }
  @media screen and (max-width: 1280px) {
    margin: 0 48px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0 40px 80px 40px;
  }
  @media screen and (max-width: 376px) {
    margin: 0;
    padding: 0 20px 80px 20px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #204370;
  width: 100%;
  height: 240px;
  margin-top: -134px;
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const TextOne = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 40px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;

const TextTwo = styled.div`
  display: flex;
  gap: 12px;
  padding-right: 45px;
`;

const TextRight = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 40px;
  text-align: right;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
  padding-right: 2px;
`;

const TextBetween = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 40px;
  text-align: right;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
`;

const TextLeft = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 40px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 140px;
  width: 100%;
  height: 90px;
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 90px;
    padding-bottom: 45px;
  }
`;

const TitleRight = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  width: 410px;
  border: 0;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 38%;
    text-align: left;
    font-size: 29px;
  }

  @media screen and (max-width: 376px) {
    width: 100%;
    text-align: left;
    font-size: 29px;
  }
`;

const TitleSmall = styled.div`
  border: 0;
  box-sizing: border-box;
  width: 27%;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(35, 35, 39, 0.8);
  text-align: left;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    width: 35%;
    font-size: 14px;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
  }
`;

const Search = styled.div`
  border: 1px solid #204370;
  box-sizing: border-box;
  border-radius: 25px;
  background: #fff;
  width: 22%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const SearchMobile = styled.div`
  display: none;
  border: 1px solid #204370;
  box-sizing: border-box;
  border-radius: 25px;
  background: #fff;
  width: 22%;
  height: 50px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 40%;
  }
  @media screen and (max-width: 376px) {
    display: flex;
    width: 100%;
  }
`;

const TextSearch = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #2a2a2a;
`;
const Hr = styled.div`
  border: 0;
  box-sizing: border-box;
  width: 100%;
  height: 10px;
  background-color: #e9ecf1;
  margin-bottom: 66px;
  @media screen and (max-width: 376px) {
    margin-bottom: 46px;
  }
`;

const List = styled.div`
  border: 0;
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 55px;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 56px 35px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const Item = styled.div``;
const ImageItem = styled.img`
  width: 100%;
`;
const TextTime = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #204370;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
  text-align: left;
`;

const TextList = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;

  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #232327;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 20px 0px;
  text-align: left;
  white-space: pre-wrap;
  overflow: hidden; // ẩn các nội dung khi kích thước lớn hơn chiều rộng khối bên ngoài
  text-overflow: ellipsis; //thêm 3 dấu chấm ở cuối
  -webkit-line-clamp: 2; // số dòng muốn hiển thị
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 35px;
  background: #ffcc00;
  border-radius: 25px;
  width: 134px;
  height: 40px;
`;
const TextBtn = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #232327;
`;

const HeaderReponsive = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background-color: #204370;
    margin-top: -230px;
  }
  @media screen and (max-width: 376px) {
    display: block;
    background-color: #204370;
    margin-top: -230px;
  }
`;

const TextHeaderReponsive = styled.div`
  padding: 65px 20px;
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 30px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const SliderSlick = styled(Slider)`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    .slick-slide > div {
      margin-right: 20px;
    }
  }
  @media screen and (max-width: 376px) {
    display: block;
  }
`;
const ContainerReponsive = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: block;
  }
`;
export default class ComponentSix extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 376,
          settings: {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
          },
        },
      ],
    };
    return (
      <Wrapper>
        <Header>
          <TextOne>Draper Startup House is on a mission to enable</TextOne>
          <TextTwo>
            <TextRight>ONE million </TextRight>
            <TextBetween>entrepreneurs worldwide by</TextBetween>
            <TextLeft>2023</TextLeft>
          </TextTwo>
        </Header>
        <HeaderReponsive>
          <TextHeaderReponsive>
            Draper Startup House is on a mission to enable ONE million
            entrepreneurs worldwide by2023
          </TextHeaderReponsive>
        </HeaderReponsive>
        <Container>
          <TitleRight>upcoming events</TitleRight>
          <TitleSmall>
            Find the best offline and online events and training programs right
            here.
          </TitleSmall>
          <Search>
            <TextSearch>See all upcoming events</TextSearch>
          </Search>
        </Container>
        <Hr />
        <List>
          <ListItem>
            <Item>
              <ImageItem src={Item1} />
              <TextTime>15 jan 2021</TextTime>
              <TextList>How to Test Ideas with No Money or Time</TextList>
              <Button>
                <TextBtn>Register</TextBtn>
              </Button>
            </Item>
            <Item>
              <ImageItem src={Item2} />
              <TextTime>08 jun 2021</TextTime>
              <TextList>
                CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
              </TextList>
              <Button>
                <TextBtn>Register</TextBtn>
              </Button>
            </Item>
            <Item>
              <ImageItem src={Item3} />
              <TextTime>17 may 2021</TextTime>
              <TextList>
                Yoga – first cass for beginer – feel free to sign up here.
              </TextList>
              <Button>
                <TextBtn>Register</TextBtn>
              </Button>
            </Item>
            <Item>
              <ImageItem src={Item4} />
              <TextTime>15 jan 2021</TextTime>
              <TextList>How to Test Ideas with No Money or Time</TextList>
              <Button>
                <TextBtn>Register</TextBtn>
              </Button>
            </Item>
            <Item>
              <ImageItem src={Item5} />
              <TextTime>08 jun 2021</TextTime>
              <TextList>
                CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
              </TextList>

              <Button>
                <TextBtn>Register</TextBtn>
              </Button>
            </Item>
          </ListItem>
          <SliderSlick {...settings}>
            <Item>
              <ImageItem src={Item1} />
              <TextTime>15 jan 2021</TextTime>
              <TextList>How to Test Ideas with No Money or Time</TextList>
              <Button>
                <TextBtn>Register</TextBtn>
              </Button>
            </Item>
            <Item>
              <ImageItem src={Item2} />
              <TextTime>08 jun 2021</TextTime>
              <TextList>
                CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
              </TextList>
              <Button>
                <TextBtn>Register</TextBtn>
              </Button>
            </Item>
            <Item>
              <ImageItem src={Item3} />
              <TextTime>17 may 2021</TextTime>
              <TextList>
                Yoga – first cass for beginer – feel free to sign up here.
              </TextList>
              <Button>
                <TextBtn>Register</TextBtn>
              </Button>
            </Item>
            <Item>
              <ImageItem src={Item4} />
              <TextTime>15 jan 2021</TextTime>
              <TextList>How to Test Ideas with No Money or Time</TextList>
              <Button>
                <TextBtn>Register</TextBtn>
              </Button>
            </Item>
            <Item>
              <ImageItem src={Item5} />
              <TextTime>08 jun 2021</TextTime>
              <TextList>
                CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
              </TextList>
              <Button>
                <TextBtn>Register</TextBtn>
              </Button>
            </Item>
          </SliderSlick>
        </List>
        <SearchMobile>
          <TextSearch>See all upcoming events</TextSearch>
        </SearchMobile>
      </Wrapper>
    );
  }
}
