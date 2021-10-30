import React from "react";
import styled from "styled-components";
import ButtonGroup from "../../assets/ButtonGroup.png";
import Avatar1 from "../../assets/Avatar/ava1.png";
import Avatar2 from "../../assets/Avatar/ava2.png";
import Avatar3 from "../../assets/Avatar/ava3.png";
import Comma from "../../assets/Comma.png";
const Wrapper = styled.div`
  width: 100%;
  heigh: 100%;
  padding: 130px 0;
  background: #f4f6f8;
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
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 130px;
  padding-top: 60px;
`;
const Card = styled.div`
  position: relative;
  width: 390px;
  height: 100%;
`;

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 30px;
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
  & h1 {
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #232327;
  }
  & h3 {
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    opacity: 0.67;
    color: #232327;
  }
`;

const Span = styled.div`
  position: absolute;
  top: 30px;
  left: 162px;
`;

const Description = styled.div`
  padding: 0 30px;
  padding-bottom: 40px;
  margin-top: 40px;
  & p {
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.9);
  }
  & a {
    padding-top: 20px;
    color: #204370;
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1px solid #204370;
  }
`;

function ComponentFive() {
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
                  luctus venenatis lectus magna fring ut venenatis tellus in
                  metus vulputate eu scelerisque felis. Felis done.
                  <br />
                  <br /> Felis donec et odio pellentesque di scelerisque felis.
                  Ornare massa eget egest.
                </p>
                <a href="_blank"> Learn more</a>
              </Description>
            </CardContent>
          </Card>
          <Card>
            <CardImage>
              <img src={Avatar2} alt="" />
            </CardImage>
            <Span>
              <img src={Comma} alt="" />
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
                <a href="_blank"> Learn more</a>
              </Description>
            </CardContent>
          </Card>
          <Card>
            <CardImage>
              <img src={Avatar3} alt="" />
            </CardImage>
            <Span>
              <img src={Comma} alt="" />
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
                <a href="_blank"> Learn more</a>
              </Description>
            </CardContent>
          </Card>
          
        </CardList>
      </Wrapper>
    </>
  );
}

export default ComponentFive;
