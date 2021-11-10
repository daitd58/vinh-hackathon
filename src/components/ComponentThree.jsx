import styled from "styled-components";
import image from "../img/imgFour.png";

const Wrapper = styled.div`
  padding: 50px 0 50px 0;
  background: #f4f6f8;
  width: 100%;
`;

const Block = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;

const LeftBlock = styled.div`
  display: flex;
  width: 50%;
  padding-left: 40px;
  & img {
    width: 100%;
    height: auto;
    display: inline-block;
    box-shadow: -50px 45px 0 rgb(41, 97, 161);
  }
`;

const RightBlock = styled.div`
  width: 50%;
  padding: 0 40px;
`;
const TextTitle = styled.div`
  font-weight: 500;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #232327;
  margin-bottom: 24px;
  font-family: "Pathway Gothic One", sans-serif;
`;

const TextDescription = styled.div`
  font-family: Oxygen;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.7);
  margin-bottom: 24px;
`;
const StyleButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  padding-bottom: 100px;
`;

const Button = styled.button`
  max-width: max-content;
  height: 65px;
  background: #204370;
  border-radius: 40px;
  font-family: Oxygen;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  padding: 0 45px;
  z-index: 1;
  border: none;
`;
function ComponentThree() {
  return (
    <Wrapper>
      <Block>
        <LeftBlock>
          <img src={image} alt={""} />
        </LeftBlock>
        <RightBlock>
          <TextTitle>ENTREPRENEURS JOIN THE DEN COMMUNITY</TextTitle>
          <TextDescription>
            Our members and their supporters include: founders and teams;
            mentors and advisors; remote workers and service providers; and
            angel investors and venture capitalists from around the world.
          </TextDescription>
          <TextDescription>
            As a DEN member, you can build a market-ready company much faster
            than ever before.
          </TextDescription>
        </RightBlock>
      </Block>
      <StyleButton>
        <Button>join DEN</Button>
      </StyleButton>
    </Wrapper>
  );
}

export default ComponentThree;
