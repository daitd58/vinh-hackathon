import React from "react";
import simon from "../assets/img/simon.png";
import jane from "../assets/img/jane.png";
import albert from "../assets/img/albert.png";
import button_group from "../assets/img/button_group.png";
import marker from "../assets/img/marker.png";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  background: #f4f6f8;
  padding: 48px 130px 130px 135px;
  @media screen and (max-width: 1024px) {
    padding: 65px;
  }
  @media screen and (max-width: 768px) {
    padding: 40px;
  }
  @media screen and (max-width: 480px) {
    padding: 20px 21px 85px 22px;
  }
  @media screen and (max-width: 376px) {
    padding: 20px 20px 55px 20px;
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
  width: 490px;
  font-weight: 500;
  font-size: 90px;
  line-height: 90px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  font-style: normal;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 1024px) {
    width: 379px;
    font-size: 65px;
    line-height: 75px;
  }
  @media screen and (max-width: 768px) {
    width: 350px;
    font-size: 65px;
    line-height: 75px;
  }
  @media screen and (max-width: 480px) {
    text-align: left;
    width: auto;
    font-size: 62px;
    line-height: 62px;
  }
  @media screen and (max-width: 376px) {
    text-align: left;
    width: auto;
    font-size: 58px;
    line-height: 62px;
  }
`;
const StyledArrow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  & img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    & img {
      width: 90%;
    }
  }
  @media screen and (max-width: 768px) {
    & img {
      width: 80%;
      height: auto;
    }
  }
  @media screen and (max-width: 480px) {
    display: none;
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

  @media screen and (max-width: 768px) {
    padding-top: 30px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const Box = styled.div`
  position: relative;
  display: flex;
  width: 32%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
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
      width: 70%;
    }
  }
  @media screen and (max-width: 768px) {
    left: 10px;
    & img {
      width: 60%;
    }
  }

  @media screen and (max-width: 480px) {
    left: 10px;
    & img {
      width: 65%;
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
      width: 60%;
    }
  }
  @media screen and (max-width: 768px) {
    left: 80px;
    top: 8px;
    & img {
      width: 55%;
    }
  }
  @media screen and (max-width: 480px) {
    left: 90px;
    top: 8px;
    & img {
      width: 55%;
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
  @media screen and (max-width: 768px) {
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
    font-weight: bold;
    font-style: normal;
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 20px;
    line-height: 28px;
    margin: 0;
  }
  & p {
    margin: 0;
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 22px;
    color: #232327;
    font-weight: 400;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 12px;
    margin-left: 100px;
    & h1 {
      font-size: 20px;
      line-height: 28px;
    }
    & p {
      font-size: 13px;
      line-height: 22px;
    }
  }
  @media screen and (max-width: 768px) {
    padding-top: 25px;
    margin-left: 80px;
    & h1 {
      font-size: 16px;
      line-height: 26px;
    }
    & p {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 480px) {
    padding-top: 24px;
    margin-left: 80px;
    & h1 {
      font-size: 20px;
      line-height: 28px;
      padding-left: 10px;
    }
    & p {
      font-size: 14px;
      line-height: 22px;
      padding-left: 10px;
    }
  }
  @media screen and (max-width: 376px) {
    padding-top: 25px;
    margin-left: 140px;
    & h1 {
      font-size: 20px;
      line-height: 28px;
      padding-left: 0px;
    }
    & p {
      font-size: 13.5px;
      line-height: 22px;
      padding-left: 0px;
    }
  }
`;
const FooterContent = styled.div`
  padding: 20px 38px 30px 30px;
  & p {
    margin: 0;
    padding-bottom: 12px;
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.9);
  }
  & a {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    color: #204370;
  }
  @media screen and (max-width: 1024px) {
    padding: 15px 15px 30px 15px;
    & p {
      padding-bottom: 10px;
      font-size: 16px;
      line-height: 26px;
    }
    & a {
      line-height: 26px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 15px 15px 20px 15px;
    & p {
      padding-bottom: 6px;
      line-height: 15px;
      font-size: 13px;
    }
    & a {
      line-height: 26px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 15px 15px 20px 15px;
    & p {
      padding-bottom: 6px;
      line-height: 26px;
      font-size: 16px;
    }
    & a {
      font-size: 16px;
      line-height: 26px;
    }
  }
  @media screen and (max-width: 376px) {
    padding: 20px 30px 40px 25px;
    & p {
      padding-bottom: 10px;
      line-height: 26px;
      font-size: 16px;
    }
    & a {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;
const StyleGridMobile = styled(Slider)`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    padding-top: 100px;
    justify-content: space-between;
    width: 100%;
  }
  @media screen and (max-width: 376px) {
    display: flex;
    padding-top: 100px;
    justify-content: space-between;
    width: 100%;
  }
`;

const ComponentFive = ({ setOpen }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
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
        <Block>
          <LeftBlock>
            <TextContent>What PEOPLE ARE SAYING ABOUT DEN</TextContent>
            <StyledArrow>
              <img src={button_group} alt={""} />
            </StyledArrow>
          </LeftBlock>
          <RightBlock>
            <Box>
              <Avatar>
                <img src={simon} alt={""} />
              </Avatar>
              <Icon>
                <img src={marker} alt={""} />
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
                <img src={jane} alt={""} />
              </Avatar>{" "}
              <Icon>
                <img src={marker} alt={""} />
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
                <img src={albert} alt={""} />
              </Avatar>{" "}
              <Icon>
                <img src={marker} alt={""} />
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

          <StyleGridMobile {...settings}>
            <Box>
              <Avatar>
                <img src={simon} alt={""} />
              </Avatar>
              <Icon>
                <img src={marker} alt={""} />
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
                <img src={jane} alt={""} />
              </Avatar>{" "}
              <Icon>
                <img src={marker} alt={""} />
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
                <img src={albert} alt={""} />
              </Avatar>{" "}
              <Icon>
                <img src={marker} alt={""} />
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
          </StyleGridMobile>
        </Block>
      </Wrapper>
    </>
  );
};

export default ComponentFive;
