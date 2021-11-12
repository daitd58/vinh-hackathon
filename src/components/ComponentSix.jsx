import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../img/arrow-left.png";
import arrowRight from "../img/arrow-right.png";
import peopleOne from "../img/peopleOne.png";
import peopleTwo from "../img/peopleTwo.png";
import peopleThree from "../img/peopleThree.png";
import icon from "../img/,,.png";

const Wrapper = styled.div`
  background: #f4f6f8;
  padding: 100px;
  @media screen and (max-width: 1024px) {
    padding: 80px;
  }
  @media screen and (max-width: 769px) {
    padding: 50px;
  }
  @media screen and (max-width: 376px) {
    padding: 30px 30px 60px 30px;
  }
`;
const Block = styled.div``;
const LeftBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 376px) {
  }
`;
const TextContent = styled.div`
  width: 400px;
  font-weight: 700;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 55px;
  }
  @media screen and (max-width: 769px) {
    width: 350px;
    font-size: 50px;
  }
  @media screen and (max-width: 376px) {
    text-align: left;
  }
`;
const StyledArrow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  & img {
    width: 50%;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    & img {
      width: 40%;
    }
  }
  @media screen and (max-width: 769px) {
    & img {
      width: 30%;
      height: auto;
    }
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const RightBlock = styled.div`
  display: flex;
  padding-top: 100px;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 769px) {
    padding-top: 30px;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const View = styled(Slider)`
  display: none;
  @media screen and (max-width: 376px) {
    display: flex;
    padding-top: 100px;
    flex-direction: column;
    padding-top: 30px;
    justify-content: space-between;
    width: 100%;
    & ul {
      bottom: -40px;
    }
  }
`;
const Box = styled.div`
  position: relative;
  display: flex;
  width: 32%;
  @media screen and (max-width: 376px) {
    width: 100%;
  }
`;
const Avatar = styled.div`
  position: absolute;
  left: 30px;
  & img {
    width: 80%;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    left: 15px;
    & img {
      width: 65%;
    }
  }
  @media screen and (max-width: 769px) {
    left: 10px;
    & img {
      width: 50%;
    }
  }
  @media screen and (max-width: 376px) {
    left: 25px;
    & img {
      width: 90%;
    }
  }
`;
const Icon = styled.div`
  position: absolute;
  left: 135px;
  top: 28px;
  & img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    left: 100px;
    & img {
      width: 70%;
    }
  }
  @media screen and (max-width: 769px) {
    left: 80px;
    top: 8px;
    & img {
      width: 50%;
    }
  }
  @media screen and (max-width: 376px) {
    left: 140px;
    top: 43px;
    & img {
      width: 100%;
    }
  }
`;
const Content = styled.div`
  margin-top: 40px;
  background: #ffffff;
  @media screen and (max-width: 769px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 376px) {
    margin-top: 55px;
  }
`;
const HeaderContent = styled.div`
  margin-left: 135px;
  padding-top: 25px;
  & h1 {
    font-weight: 600;
    font-style: normal;
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 23px;
    line-height: 28px;
    margin: 0;
  }
  & p {
    margin: 0;
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 22px;
    color: #232327;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 12px;
    margin-left: 100px;
    & h1 {
      font-size: 18px;
      line-height: 23px;
    }
    & p {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 769px) {
    padding-top: 15px;
    margin-left: 80px;
    & h1 {
      font-size: 12px;
      line-height: 20px;
    }
    & p {
      font-size: 8px;
    }
  }
  @media screen and (max-width: 376px) {
    padding-top: 25px;
    margin-left: 140px;
    & h1 {
      font-size: 22px;
      line-height: 28px;
    }
    & p {
      font-size: 12px;
    }
  }
`;
const FooterContent = styled.div`
  padding: 20px 30px 30px 30px;
  & p {
    margin: 0;
    padding-bottom: 12px;
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: rgba(35, 35, 39, 0.9);
  }
  & a {
    color: #204370;
    font-size: 15px;
  }
  @media screen and (max-width: 1024px) {
    padding: 15px 15px 30px 15px;
    & p {
      padding-bottom: 10px;
      font-size: 12px;
      line-height: 20px;
    }
    & a {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 769px) {
    padding: 10px 15px 20px 15px;
    & p {
      padding-bottom: 6px;
      line-height: 15px;
      font-size: 9px;
    }
    & a {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 376px) {
    padding: 20px 30px 40px 25px;
    & p {
      padding-bottom: 10px;
      line-height: 22px;
      font-size: 13px;
    }
    & a {
      font-size: 16px;
    }
  }
`;
export default class ComponentSix extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Wrapper>
        <Block>
          <LeftBlock>
            <TextContent>What PEOPLE ARE SAYING ABOUT DEN</TextContent>
            <StyledArrow>
              <img src={arrowLeft} alt={""} />
              <img src={arrowRight} alt={""} />
            </StyledArrow>
          </LeftBlock>
          <RightBlock>
            <Box>
              <Avatar>
                <img src={peopleOne} alt={""} />
              </Avatar>
              <Icon>
                <img src={icon} alt={""} />
              </Icon>
              <Content>
                <HeaderContent>
                  <h1>Simon JD</h1>
                  <p>Co-Founder and CEO, Travelio</p>
                </HeaderContent>
                <FooterContent>
                  <p>
                    Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                    luctus venenatis lectus magna fring ut venenatis tellus in
                    metus vulputate eu scelerisque felis. Felis done.
                  </p>
                  <p>
                    Felis donec et odio pellentesque di scelerisque felis.
                    Ornare massa eget egest.
                  </p>
                  <a href="#">Learn more</a>
                </FooterContent>
              </Content>
            </Box>
            <Box>
              <Avatar>
                <img src={peopleTwo} alt={""} />
              </Avatar>{" "}
              <Icon>
                <img src={icon} alt={""} />
              </Icon>
              <Content>
                <HeaderContent>
                  <h1>Jane Cooper</h1>
                  <p>Co-Founder and CEO, Travelio</p>
                </HeaderContent>
                <FooterContent>
                  <p>
                    Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                    luctus venenatis lectus magna fring ut venenatis tellus in
                    metus vulputate eu scelerisque felis. Felis done.
                  </p>
                  <p>
                    Felis donec et odio pellentesque di scelerisque felis.
                    Ornare massa eget egest.
                  </p>
                  <a href="#">Learn more</a>
                </FooterContent>
              </Content>
            </Box>
            <Box>
              <Avatar>
                <img src={peopleThree} alt={""} />
              </Avatar>{" "}
              <Icon>
                <img src={icon} alt={""} />
              </Icon>
              <Content>
                <HeaderContent>
                  <h1>Albert Flores</h1>
                  <p>Marketing Coordinator, Gillette </p>
                </HeaderContent>
                <FooterContent>
                  <p>
                    Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                    luctus venenatis lectus magna fring ut venenatis tellus in
                    metus vulputate eu scelerisque felis. Felis done.
                  </p>
                  <p>
                    Felis donec et odio pellentesque di scelerisque felis.
                    Ornare massa eget egest.
                  </p>
                  <a href="#">Learn more</a>
                </FooterContent>
              </Content>
            </Box>
          </RightBlock>
          <View {...settings}>
            <Box>
              <Avatar>
                <img src={peopleOne} alt={""} />
              </Avatar>
              <Icon>
                <img src={icon} alt={""} />
              </Icon>
              <Content>
                <HeaderContent>
                  <h1>Simon JD</h1>
                  <p>Co-Founder and CEO, Travelio</p>
                </HeaderContent>
                <FooterContent>
                  <p>
                    Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                    luctus venenatis lectus magna fring ut venenatis tellus in
                    metus vulputate eu scelerisque felis. Felis done.
                  </p>
                  <p>
                    Felis donec et odio pellentesque di scelerisque felis.
                    Ornare massa eget egest.
                  </p>
                  <a href="#">Learn more</a>
                </FooterContent>
              </Content>
            </Box>
            <Box>
              <Avatar>
                <img src={peopleTwo} alt={""} />
              </Avatar>{" "}
              <Icon>
                <img src={icon} alt={""} />
              </Icon>
              <Content>
                <HeaderContent>
                  <h1>Jane Cooper</h1>
                  <p>Co-Founder and CEO, Travelio</p>
                </HeaderContent>
                <FooterContent>
                  <p>
                    Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                    luctus venenatis lectus magna fring ut venenatis tellus in
                    metus vulputate eu scelerisque felis. Felis done.
                  </p>
                  <p>
                    Felis donec et odio pellentesque di scelerisque felis.
                    Ornare massa eget egest.
                  </p>
                  <a href="#">Learn more</a>
                </FooterContent>
              </Content>
            </Box>
            <Box>
              <Avatar>
                <img src={peopleThree} alt={""} />
              </Avatar>{" "}
              <Icon>
                <img src={icon} alt={""} />
              </Icon>
              <Content>
                <HeaderContent>
                  <h1>Albert Flores</h1>
                  <p>Marketing Coordinator, Gillette </p>
                </HeaderContent>
                <FooterContent>
                  <p>
                    Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                    luctus venenatis lectus magna fring ut venenatis tellus in
                    metus vulputate eu scelerisque felis. Felis done.
                  </p>
                  <p>
                    Felis donec et odio pellentesque di scelerisque felis.
                    Ornare massa eget egest.
                  </p>
                  <a href="#">Learn more</a>
                </FooterContent>
              </Content>
            </Box>
          </View>
        </Block>
      </Wrapper>
    );
  }
}
