import styled from "styled-components";
import image from "../img/imgThree.png";

const Wrapper = styled.div`
  padding: 50px 0 50px 0;
  background: #F4F6F8;
`;

const Block = styled.div`
  padding-top: 30px;
  display: flex;
  gap: 80px;
`;

const LeftBlock = styled.div`
  padding: 0 50px 0 80px;
`;
const RightBlock = styled.div`
  background: #5cc68f;
  position: relative;
  width: 70%;
  height: 380px;
  padding-left: 50px;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  right: 50px;
  top: -24px;
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
            <Text>Get constructive feedback from industry experts</Text>
            <Text>Read startup stories, successes, and failures</Text>
            <Text>Get help on investor relations topics like term sheets</Text>
            <Text>Find best practices and professional templates</Text>
          </TextUl>
        </LeftBlock>
        <RightBlock>
          <Image src={image} alt={""} />
        </RightBlock>
      </Block>
    </Wrapper>
  );
}

export default ComponentTwo;
