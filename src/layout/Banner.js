import styled from "styled-components";
import background from "../img/background.png";
import imgOne from "../img/imgOne.png";
const Wrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: right;
  object-fit: cover;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 130px;
`;

const TextTitle = styled.div`
  margin-top: 28px;
  font-weight: 500;
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  width: 400px;
`;

const TextDescription = styled.div`
  margin-top: 24px;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  width: 300px;
`;

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

function Banner() {
  return (
    <Wrapper>
      <Content>
        <img src={imgOne} alt={""} />
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
