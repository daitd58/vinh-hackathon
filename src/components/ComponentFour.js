import styled from "styled-components";
import iconOne from "../img/iconOne.png";
import iconTwo from "../img/iconTwo.png";
import iconThree from "../img/iconThree.png";
import iconFour from "../img/iconFour.png";
const Wrapper = styled.div`
  padding: 50px 50px;
`;
const TextContent = styled.div`
  text-align: left;
  color: #204370;
  font-size: 45px;
  font-weight: 500;
`;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  gap: 40px;
`;
const Box = styled.div`
  background: #f4f6f8;
  width: 50%;
  height: 180px;
  padding: 20px;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.img`
  width: 15%;
`;
const Number = styled.p`
  color: #1729401a;
  font-size: 35px;
  font-weight: 700;
  margin-top: 0px;
`;

const ContentBox = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
`;

const TexTextDescription = styled.div`
  text-align: left;
  font-weight: 500;
  font-size: 16px;
`;

function ComponentFour() {
  return (
    <Wrapper>
      <TextContent>How Den works</TextContent>
      <Container>
        <Box>
          <HeaderBox>
            <Icon src={iconOne} />
            <Number>01</Number>
          </HeaderBox>
          <ContentBox>
            <TexTextDescription>
              Say hello and interact on the DEN Slack channel
            </TexTextDescription>
          </ContentBox>
        </Box>
        <Box>
          <HeaderBox>
            <Icon src={iconTwo} />
            <Number>02</Number>
          </HeaderBox>
          <ContentBox>
            <TexTextDescription>
              Explore free high-quality on-demand learning content
            </TexTextDescription>
          </ContentBox>
        </Box>
        <Box>
          <HeaderBox>
            <Icon src={iconThree} />
            <Number>03</Number>
          </HeaderBox>
          <ContentBox>
            <TexTextDescription>
              Meet co-founders, advisors, partners, customers, and investors
            </TexTextDescription>
          </ContentBox>
        </Box>
        <Box>
          <HeaderBox>
            <Icon src={iconFour} />
            <Number>04</Number>
          </HeaderBox>
          <ContentBox>
            <TexTextDescription>
              Find opportunities in the global Draper ecosystem
            </TexTextDescription>
          </ContentBox>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default ComponentFour;
