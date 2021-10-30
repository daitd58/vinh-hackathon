import styled from "styled-components";
import image from "../img/imgFour.png";

const Wrapper = styled.div`
  padding: 50px 0 50px 0;
  background: #f4f6f8;
`;

const Block = styled.div`
  padding-top: 80px;
  display: flex;
  gap: 80px;
`;

const LeftBlock = styled.div`
  background: #ffcc00;
  position: relative;
  width: 125%;
  height: 375px;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  left: 50px;
  top: -30px;
`;

const RightBlock = styled.div`
  padding-left: 50px;
`;
const TextTitle = styled.div`
  font-weight: 700;
  text-align: left;
  color: #232327;
  font-size: 25px;
  white-space: nowrap;
`;

const TextDescription = styled.div`
  padding-top: 30px;
  color: #232327b2;
  text-align: left;
  font-size: 18px;
`;
const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
  display: flex;
  margin-top: 30px;
  background: #204370;
  border-radius: 20px;
  width: 140px;
  height: 50px;
  font-weight: 500;
  color: #ffffff;
  align-items: center;
  justify-content: center;
`;
function ComponentThree() {
  return (
    <Wrapper>
      <Block>
        <LeftBlock>
          <Image src={image} alt={""} />
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
      <Btn>
        <Button>join DEN</Button>
      </Btn>
    </Wrapper>
  );
}

export default ComponentThree;
