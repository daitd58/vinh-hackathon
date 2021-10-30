import styled from "styled-components";
import image from "../img/imgTwo.png";

const Wrapper = styled.div`
  padding: 50px 0 50px 0;
  background: #F4F6F8;
`;

const TextContent = styled.div`
  display: flex;
  color: #204370;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  font-weight: 500;
`;

const Block = styled.div`
  padding-top: 80px;
  display: flex;
  gap: 80px;
`;

const LeftBlock = styled.div`
  background: #4c8fcc;
  position: relative;
  width: 80%;
  height: 380px;
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
`;

const TextDescription = styled.div`
  padding-top: 30px;
  color: #232327b2;
  text-align: left;
  font-size: 18px;
`;

const TextUl = styled.ul`
  padding: 0 0 0 10px;
  text-align: left;
`;

const Text = styled.li`
  color: #232327;
  font-size: 15px;
`;

function ComponentOne() {
  return (
    <Wrapper>
      <TextContent>Join the Draper entrepreneur network</TextContent>
      <Block>
        <LeftBlock>
          <Image src={image} alt={""} />
        </LeftBlock>
        <RightBlock>
          <TextTitle>Connect with a global network</TextTitle>
          <TextDescription>
            DEN membership connects you with inspiring people and ideas to
            empower your entrepreneurial or fundraising journey.
          </TextDescription>
          <TextUl>
            <Text>Discover useful resources, software credits, and perks</Text>
            <Text>Find the best events and training programs</Text>
            <Text>Meet co-founders, advisors, and partners</Text>
            <Text>Search and discover trending topics and insights</Text>
          </TextUl>
        </RightBlock>
      </Block>
    </Wrapper>
  );
}

export default ComponentOne;
