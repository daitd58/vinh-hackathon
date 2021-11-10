import styled from "styled-components";
import iconOne from "../img/iconOne.png";
import iconTwo from "../img/iconTwo.png";
import iconThree from "../img/iconThree.png";
import iconFour from "../img/iconFour.png";
const Wrapper = styled.div`
  padding: 130px 130px 100px 130px;
  background: #ffffff;
`;
const TextContent = styled.div`
  font-weight: 700;
  font-size: 60px;
  line-height: 80px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  font-family: "Pathway Gothic One", sans-serif;
`;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 20px;
`;
const Box = styled.div`
  background: #f4f6f8;
  width: 20%;
  height: 200px;
  padding: 5px 10px 30px 40px;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.img`
  width: 18%;
`;
const Number = styled.p`
  color: #1729401a;
  font-size: 35px;
  font-weight: 700;
  margin-top: 0px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextDescription = styled.div`
  font-family: Oxygen;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: #232327;
  text-align: left;
  padding-right: 34px;
`;

function ComponentFour() {
  return (
    <Wrapper>
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
