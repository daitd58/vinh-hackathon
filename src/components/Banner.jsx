import styled from "styled-components";
import background from "../img/background.png";
import imgOne from "../img/imgOne.png";
const Wrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: right;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  margin-top: 25px;
  width: 183px;
  height: 73px;
`;
const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 130px;
`;

const TextTitle = styled.div`
  margin-top: 28px;
  font-weight: 500;
  color: #ffffff;
  font-size: 56px;
  line-height: 56px;
  text-align: center;
  width: 450px;
  font-family: "Pathway Gothic One", sans-serif;
`;

const TextDescription = styled.div`
  margin-top: 24px;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  line-height: 25px;
  width: 320px;
  letter-spacing: 0.5px;
  gap: 5px;
  font-family: "Oxygen Mono", monospace;
  font-family: "Pathway Gothic One", sans-serif;
`;

const Button = styled.button`
  display: flex;
  margin-top: 30px;
  background: #204370;
  border-radius: 30px;
  width: 180px;
  height: 60px;
  font-size: 23px;
  font-weight: 500;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: "Pathway Gothic One", sans-serif;
`;

function Banner() {
  return (
    <Wrapper>
      <Content>
        <Image src={imgOne} alt={""} />
        <TextTitle>GLOBAL NETWORK FOR MENTORSHIP AND SUPPORT</TextTitle>
        <TextDescription>
          Get all the support and education you need to achieve full potential
          as an entrepreneur.
        </TextDescription>
        <Button>join DEN</Button>
      </Content>
    </Wrapper>
  );
}

export default Banner;
