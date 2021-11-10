import styled from "styled-components";
import image from "../img/imgThree.png";

const Wrapper = styled.div`
  padding: 50px 0 50px 0;
  width: 100%;
  background: #f4f6f8;
`;

const Block = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;

const LeftBlock = styled.div`
  width: 50%;
  margin-left: 80px;
`;
const RightBlock = styled.div`
  width: 50%;
  display: flex;
  padding-right: 40px;
  & img {
    width: 100%;
    height: auto;
    display: inline-block;
    box-shadow: 45px 45px 0 rgb(101, 168, 101);
  }
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

function ComponentTwo() {
  return (
    <Wrapper>
      <Block>
        <LeftBlock>
          <TextTitle>GET INSPIRed By PEERS AND EXPERTS </TextTitle>
          <TextDescription>
            Becoming a successful entrepreneur means surrounding yourself with
            an inspiring ecosystem like DEN.
          </TextDescription>
          <TextUl>
            <TextLi>Get constructive feedback from industry experts</TextLi>
            <TextLi>Read startup stories, successes, and failures</TextLi>
            <TextLi>
              Get help on investor relations topics like term sheets
            </TextLi>
            <TextLi>Find best practices and professional templates</TextLi>
          </TextUl>
        </LeftBlock>
        <RightBlock>
          <img src={image} alt={""} />
        </RightBlock>
      </Block>
    </Wrapper>
  );
}

export default ComponentTwo;
