import styled from "styled-components";
import image from "../img/imgTwo.png";

const Wrapper = styled.div`
  padding: 50px 0 50px 0;
  background: #f4f6f8;
  width: 100%;

`;

const TextContent = styled.div`
  display: flex;
  color: #204370;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  font-family: "Pathway Gothic One", sans-serif;
`;

const Block = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;

const LeftBlock = styled.div`
  display: flex;
  padding-left: 40px;
  width: 50%;
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

const TextUl = styled.ul`
  list-style: inside;
  color: #a6b4c6;
  padding: 0;
`;

const TextLi = styled.li`
  font-family: Oxygen;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #232327;
  margin-bottom: 16px;
  &::marker {
    color: #a6b4c6;
  }
`;

function ComponentOne() {
  return (
    <Wrapper>
      <TextContent>JOIN THE DRAPER ENTREPRENEUR NETWORK</TextContent>
      <Block>
        <LeftBlock>
          <img src={image} alt={""} />
        </LeftBlock>
        <RightBlock>
          <TextTitle>Connect with a global network</TextTitle>
          <TextDescription>
            DEN membership connects you with inspiring people and ideas to
            empower your entrepreneurial or fundraising journey.
          </TextDescription>
          <TextUl>
            <TextLi>
              Discover useful resources, software credits, and perks
            </TextLi>
            <TextLi>Find the best events and training programs</TextLi>
            <TextLi>Meet co-founders, advisors, and partners</TextLi>
            <TextLi>Search and discover trending topics and insights</TextLi>
          </TextUl>
        </RightBlock>
      </Block>
    </Wrapper>
  );
}

export default ComponentOne;
