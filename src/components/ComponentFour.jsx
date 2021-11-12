import styled from "styled-components";
import iconOne from "../img/iconOne.png";
import iconTwo from "../img/iconTwo.png";
import iconThree from "../img/iconThree.png";
import iconFour from "../img/iconFour.png";
const Wrapper = styled.div`
  padding: 100px;
  background: #ffffff;
  @media screen and (max-width: 1024px) {
    padding: 80px;
  }
  @media screen and (max-width: 769px) {
    padding: 50px;
  }
  @media screen and (max-width: 376px) {
    padding: 30px;
  }
`;
const TextContent = styled.div`
  font-weight: 700;
  font-size: 60px;
  line-height: 80px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  white-space: nowrap;
  color: #204370;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 55px;
  }
  @media screen and (max-width: 769px) {
    font-size: 50px;
  }
`;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 376px) {
    flex-direction: column;
    gap: 10px;
  }
`;  
const Box = styled.div`
  background: #f4f6f8;
  width: 20%;
  height: 200px;
  padding: 5px 10px 30px 30px;
  @media screen and (max-width: 1024px) {
    padding: 0 5px 0 30px;
  }
  @media screen and (max-width: 768px) {
    width: 18%;
  }
  @media screen and (max-width: 376px) {
    width: 90%;
    height: 160px;
    padding: 0 10px 0 30px;
  }
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 376px) {
    padding: 15px 0;
  }
`;
const Icon = styled.img`
  width: 18%;
  @media screen and (max-width: 768px) {
    width: 25%;
  }
  @media screen and (max-width: 376px) {
    width: 15%;
  }
`;
const Number = styled.p`
  color: #1729401a;
  font-size: 35px;
  font-weight: 700;
  margin-top: 0px;
  @media screen and (max-width: 376px) {
    margin-bottom: 0px;
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 376px) {
    justify-content: left;
  }
`;

const TextDescription = styled.div`
  font-family: "Oxygen", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  width: 170px;
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
  @media screen and (max-width: 769px) {
    font-size: 12px;
  }
  @media screen and (max-width: 376px) {
    font-size: 16px;
    width: 250px;
  }
`;

function ComponentFour({setOpen}) {
  return (
    <Wrapper onClick={() => setOpen(false)}>
      <TextContent>How Den Works</TextContent>
      <Container>
        <Box>
          <HeaderBox>
            <Icon src={iconOne} />
            <Number>01</Number>
          </HeaderBox>
          <ContentBox>
            <TextDescription>
              Say hello and interact on the DEN Slack channel
            </TextDescription>
          </ContentBox>
        </Box>
        <Box>
          <HeaderBox>
            <Icon src={iconTwo} />
            <Number>02</Number>
          </HeaderBox>
          <ContentBox>
            <TextDescription>
              Explore free high-quality on-demand learning content
            </TextDescription>
          </ContentBox>
        </Box>
        <Box>
          <HeaderBox>
            <Icon src={iconThree} />
            <Number>03</Number>
          </HeaderBox>
          <ContentBox>
            <TextDescription>
              Meet co-founders, advisors, partners, customers, and investors
            </TextDescription>
          </ContentBox>
        </Box>
        <Box>
          <HeaderBox>
            <Icon src={iconFour} />
            <Number>04</Number>
          </HeaderBox>
          <ContentBox>
            <TextDescription>
              Find opportunities in the global Draper ecosystem
            </TextDescription>
          </ContentBox>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default ComponentFour;
