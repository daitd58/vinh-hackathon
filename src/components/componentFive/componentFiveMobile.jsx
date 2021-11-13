import React, { useState } from "react";
import styled from "styled-components";
import ButtonGroup from "../../assets/ButtonGroup.png";
import Avatar1 from "../../assets/Avatar/ava1.png";
import Avatar2 from "../../assets/Avatar/ava2.png";
import Avatar3 from "../../assets/Avatar/ava3.png";
import Comma from "../../assets/Comma.png";
import Active from "../../assets/active.png";
import Inactive from "../../assets/inactive.png";
const Wrapper = styled.div`
  width: 100%;
  heigh: 100%;
  padding: 130px 0;
  background: #f4f6f8;
  display:none;
  @media screen and (max-width: 376px) {
    padding: 80px 0;
    display:block;
  }
`;

const FirstContent = styled.div``;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 130px;
  align-items: center;
  & img {
    cursor: pointer;
  }
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    & img {
      display: none;
    }
  }
`;

const HeadingText = styled.div`
  color: #204370;
  font-style: normal;
  font-weight: 500;
  font-size: 90px;
  line-height: 90px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  font-family: "Pathway Gothic One", sans-serif;
  padding-right: 500px;
  @media screen and (max-width: 376px) {
    padding: 0;
    font-size: 62px;
    line-height: 62px;
    margin-left: 20px;
  }
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 130px;
  padding-top: 60px;
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    padding-top: 40px;

    & .inActive {
      display: none;
    }
  }
`;
const Card = styled.div`
  position: relative;
  width: 390px;
  height: 100%;
  transition: all 1s;
  @media screen and (max-width: 376px) {
    width: 90%;
  }
`;

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 30px;
  @media screen and (max-width: 376px) {
    left: 20px;
  }
`;

const CardContent = styled.div`
  margin-top: 40px;
  background: #ffffff;
`;

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 162px;
  padding-top: 41px;
  @media screen and (max-width: 376px) {
    padding-left: 142px;
  }
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
    padding-right: 20px;
  }
`;

const Span = styled.div`
  position: absolute;
  top: 30px;
  left: 162px;
  @media screen and (max-width: 376px) {
    left: 142px;
  }
`;

const Description = styled.div`
  padding: 0 30px;
  padding-bottom: 40px;
  margin-top: 40px;

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
  @media screen and (max-width: 376px) {
    padding: 0 0 40px 0;
    & p,
    a {
      margin-left: 20px;
    }
    & p {
      padding-right: 20px;
    }
  }
`;

const LinkBox = styled.div`
  margin-top: 20px;
`;

const Menu = styled.div`
  height: 100%;
  width: 100%;
  display: none;
  @media screen and (max-width: 376px) {
    padding-top: 28px;
    gap: 10px;
    display: flex;
    justify-content: center;
    & img {
      cursor: pointer;
    }
  }
`;

function ComponentFiveMobile() {
  const [active, setActive] = useState(1);

  const handleChangeCard = (number) => {
    setActive(number);
  };
  return (
    <>
      <Wrapper>
        <FirstContent>
          <Heading>
            <HeadingText>What PEOPLE ARE SAYING ABOUT DEN</HeadingText>
            <img src={ButtonGroup} alt="" />
          </Heading>
        </FirstContent>
        <CardList>
          <Card style={{ display: active === 1 ? "block" : "none" }}>
            <CardImage>
              <img src={Avatar1} alt="Avatar1" />
            </CardImage>
            <Span>
              <img src={Comma} alt="Comma" />
            </Span>
            <CardContent>
              <CardTitle>
                <h1>Simon JD</h1>
                <h3>Co-Founder and CEO, Travelio</h3>
              </CardTitle>

              <Description>
                <p>
                  Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                  luctus venenatis lectus magna fring ut venenatis tellus in
                  metus vulputate eu scelerisque felis. Felis done.
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
          <Card style={{ display: active === 2 ? "block" : "none" }}>
            <CardImage>
              <img src={Avatar2} alt="Avatar2" />
            </CardImage>
            <Span>
              <img src={Comma} alt="Comma" />
            </Span>
            <CardContent>
              <CardTitle>
                <h1>Jane Cooper</h1>
                <h3>Co-Founder and CEO, Travelio</h3>
              </CardTitle>

              <Description>
                <p>
                  Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                  luctus venenatis lectus magna fring ut venenatis tellus in
                  metus vulputate eu scelerisque felis. Felis done.
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
          <Card style={{ display: active === 3 ? "block" : "none" }}>
            <CardImage>
              <img src={Avatar3} alt="Avatar3" />
            </CardImage>
            <Span>
              <img src={Comma} alt="Comma" />
            </Span>
            <CardContent>
              <CardTitle>
                <h1>Albert Flores</h1>
                <h3>Marketing Coordinator, Gillette </h3>
              </CardTitle>

              <Description>
                <p>
                  Ornare massa eget egestas purus viverrasan in nisl. Sit amet
                  luctus venenatis lectus magna fring ut venenatis tellus in
                  metus vulputate eu scelerisque felis. Felis done.
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
        </CardList>

        <Menu className="menu">
          <img
            src={active === 1 ? Active : Inactive}
            alt="dot"
            onClick={() => handleChangeCard(1)}
          />
          <img
            src={active === 2 ? Active : Inactive}
            alt="dot"
            onClick={() => handleChangeCard(2)}
          />
          <img
            src={active === 3 ? Active : Inactive}
            alt="dot"
            onClick={() => handleChangeCard(3)}
          />
        </Menu>
      </Wrapper>
    </>
  );
}

export default ComponentFiveMobile;
