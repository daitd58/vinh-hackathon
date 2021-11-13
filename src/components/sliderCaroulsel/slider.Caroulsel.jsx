import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Avatar1 from "../../assets/Avatar/ava1.png";
import Avatar2 from "../../assets/Avatar/ava2.png";
import Avatar3 from "../../assets/Avatar/ava3.png";
import Comma from "../../assets/Comma.png";
const Card = styled.div`
  position: relative;
`;

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
`;

const CardContent = styled.div`
  width: 90%;
  margin-top: 40px;
  background: #ffffff;
  padding: 0 20px;
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 122px;
  padding-top: 41px;
  & h1 {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #232327;
  }
  & h3 {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    opacity: 0.67;
    color: #232327;
  }
`;

const Span = styled.div`
  position: absolute;
  top: 30px;

  left: 142px;
`;

const Description = styled.div`
  padding-bottom: 40px;
  margin-top: 40px;
  padding-right: 10px;
  & p {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.9);
  }
  & a {
    padding-top: 20px;
    color: #204370;
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1px solid #204370;
  }
`;

const LinkBox = styled.div`
  margin-top: 20px;
`;

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: false,
  rows: 1,
  
};

const Wrapper = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: block;
    max-width: 375px;
  }
`;

function SliderCaroulsel() {
  return (
    <Wrapper>
      <Slider {...settings}>
        <Card>
          <CardImage>
            <img src={Avatar1} alt="" />
          </CardImage>
          <Span>
            <img src={Comma} alt="" />
          </Span>
          <CardContent>
            <CardTitle>
              <h1>Simon JD</h1>
              <h3>Co-Founder and CEO, Travelio</h3>
            </CardTitle>

            <Description>
              <p>
                Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                luctus venenatis lectus magna fring ut venenatis tellus in metus
                vulputate eu scelerisque felis. Felis done.
                <br />
                <br /> Felis donec et odio pellentesque di scelerisque felis.
                Ornare massa eget egest.
              </p>
              <LinkBox>
                <a href="_blank"> Learn more</a>
              </LinkBox>
            </Description>
          </CardContent>
        </Card>
      </Slider>
    </Wrapper>
  );
}

export default SliderCaroulsel;
