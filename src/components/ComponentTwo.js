import styled from "styled-components";
import discussion from "../assets/img/discussion.png";

const Wrapper = styled.div`
  padding: 50px 0 50px 0;
  width: 100%;
  background: #f4f6f8;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
  }
  @media screen and (max-width: 376px) {
    padding: 0;
  }
`;

const Block = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding-top: 0px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    padding-top: 0px;
  }
  @media screen and (max-width: 376px) {
    flex-direction: column-reverse;
    padding-top: 0px;
  }
`;

const LeftBlock = styled.div`
  width: 50%;
  margin-left: 80px;
  @media screen and (max-width: 768px) {
    width: 93%;
    margin-left: 0px;
    margin-top: 80px;
  }
  @media screen and (max-width: 480px) {
    width: 93%;
    margin-left: 0px;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    margin-left: 0px;
  }
`;
const RightBlock = styled.div`
  width: 50%;
  display: flex;
  padding-right: 40px;
  & img {
    width: 100%;
    height: auto;
    display: inline-block;
    box-shadow: 40px 45px 0 rgb(101, 168, 101);
    @media screen and (max-width: 480px) {
      box-shadow: 50px 37px 0 rgb(101, 168, 101);
    }
    @media screen and (max-width: 376px) {
      box-shadow: 50px 33px 0 rgb(101, 168, 101);
    }
  }

  @media screen and (max-width: 1024px) {
    width: 57%;
    padding-left: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    width: 88%;
    padding-left: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    padding-left: 36px;
    width: 82%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 376px) {
    width: 80%;
    padding-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  padding-left: 65px;

  @media screen and (max-width: 1024px) {
    padding-left: 0px;
    text-align: left;
    font-size: 37px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 33px;
    text-align: left;
    font-size: 43px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 19px;
    text-align: center;
    font-size: 38px;
  }

  @media screen and (max-width: 376px) {
    padding-left: 0px;
    font-size: 33px;
    margin-top: -9px;
  }
`;

const TextDescription = styled.div`
  font-family: Oxygen;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.7);
  margin-bottom: 24px;
  padding: 0 173px 0 65px;

  @media screen and (max-width: 1024px) {
    padding: 0;
    font-size: 18px;
    padding-right: 22px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 33px;
    font-size: 17px;
    padding-right: 205px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 35px;
    font-size: 18px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 5px;
    width: 90%;
    padding: 0 0px 0 17px;
    font-size: 16px;
  }
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
  padding-left: 65px;
  @media screen and (max-width: 1024px) {
    padding: 0;
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 33px;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 35px;
    font-size: 14px;
  }

  @media screen and (max-width: 376px) {
    padding: 0 18px;
    font-size: 13px;
  }
`;
const ComponentTwo = ({ setOpen }) => {
  return (
    <Wrapper onClick={() => setOpen(false)}>
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
          <img src={discussion} alt={""} />
        </RightBlock>
      </Block>
    </Wrapper>
  );
};

export default ComponentTwo;
