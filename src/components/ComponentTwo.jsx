import styled from "styled-components";
import image from "../img/imgThree.png";

const Wrapper = styled.div`
  padding: 80px 0 50px 0;
  width: 100%;
  background: #f4f6f8;
  @media screen and (max-width: 376px) {
    padding: 0;
  }
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 376px) {
    flex-direction: column-reverse;
  }
`;

const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 40px;
  @media screen and (max-width: 376px) {
    padding-top: 80px;
    padding-left: 30px;
  }
`;
const RightBlock = styled.div`
  display: flex;
  padding-right: 30px;
  width: 50%;
  & img {
    width: 100%;
    height: auto;
    display: inline-block;
    box-shadow: 45px 45px 0 rgb(101, 168, 101);
  }
  @media screen and (max-width: 376px) {
    width: 80%;
    padding-left: 45px;
    & img {
      box-shadow: 40px 30px 0 rgb(101, 168, 101);
    }
  }
`;

const TextTitle = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  white-space: nowrap;
  color: #232327;
  margin-bottom: 24px;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 376px) {
    font-size: 30px;
  }
`;

const TextDescription = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  width: 360px;
  font-size: 14px;
  line-height: 25px;
  color: rgba(35, 35, 39, 0.7);
  @media screen and (max-width: 768px) {
    width: 320px;
    font-size: 12px;
  }
  @media screen and (max-width: 376px) {
    font-size: 16px;
  }
`;

const TextUl = styled.ul`
  list-style: inside;
  color: #a6b4c6;
  padding: 0;
`;

const TextLi = styled.li`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #232327;
  margin-bottom: 16px;
  &::marker {
    color: #a6b4c6;
  }
  @media screen and (max-width: 768px) {
    width: 320px;
    font-size: 12px;
  }
  @media screen and (max-width: 376px) {
    margin-bottom: 10px;
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
