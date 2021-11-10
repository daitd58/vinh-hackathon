import React from "react";
import styled from "styled-components";
import arrowLeft from "../img/arrow-left.png";
import arrowRight from "../img/arrow-right.png";
import peopleOne from "../img/peopleOne.png";
import peopleTwo from "../img/peopleTwo.png";
import peopleThree from "../img/peopleThree.png";
import icon from "../img/,,.png";

const Wrapper = styled.div`
  background: #f4f6f8;
  padding: 130px 130px 100px 130px;
`;
const LeftBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextContent = styled.div`
  width: 430px;
  font-weight: 700;
  font-size: 60px;
  line-height: 80px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  font-family: "Pathway Gothic One", sans-serif;
`;
const StyledArrow = styled.div`
  display: flex;
  gap: 5px;
  & img {
    width: 100%;
    height: auto;
  }
`;
const RightBlock = styled.div`
  display: flex;
  padding-top: 100px;
  width: 100%;
  gap: 10px;
`;
const Box = styled.div`
  position: relative;
`;
const Avatar = styled.div`
  position: absolute;
  left: 30px;
  & img {
    width: 100%;
    height: auto;
  }
`;
const Icon = styled.div`
  position: absolute;
  left: 160px;
  top: 28px;
  & img {
    width: 100%;
    height: auto;
  }
`;
const Content = styled.div`
  margin-top: 40px;
  background: #ffffff;
  width: 330px;
  height: 330px;
`;
const HeaderContent = styled.div`
  margin-left: 157px;
  padding-top: 50px;
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
    font-style: Regular;
    font-family: Oxygen;
    font-size: 13px;
    line-height: 22px;
    color: #232327;
  }
`;
const FooterContent = styled.div`
  padding: 12px 29px;
  & p {
    margin: 0;
    padding-bottom: 12px;
    font-style: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(35, 35, 39, 0.9);
  }
  & a {
    color: #204370;
    font-size: 17px;
  }
`;
function ComponentSix() {
  return (
    <Wrapper>
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
                luctus venenatis lectus magna fring ut venenatis tellus in metus
                vulputate eu scelerisque felis. Felis done.
              </p>
              <p>
                Felis donec et odio pellentesque di scelerisque felis. Ornare
                massa eget egest.
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
                luctus venenatis lectus magna fring ut venenatis tellus in metus
                vulputate eu scelerisque felis. Felis done.
              </p>
              <p>
                Felis donec et odio pellentesque di scelerisque felis. Ornare
                massa eget egest.
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
                luctus venenatis lectus magna fring ut venenatis tellus in metus
                vulputate eu scelerisque felis. Felis done.
              </p>
              <p>
                Felis donec et odio pellentesque di scelerisque felis. Ornare
                massa eget egest.
              </p>
              <a href="#">Learn more</a>
            </FooterContent>
          </Content>
        </Box>
      </RightBlock>
    </Wrapper>
  );
}

export default ComponentSix;
