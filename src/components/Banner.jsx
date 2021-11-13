import styled from "styled-components";
import banner from "../img/background-desktop.png";
import bannerMobile from "../img/background-mobile.png";
import imgOne from "../img/imgOne.png";
const Wrapper = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  object-fit: cover;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 376px) {
    background: url(${bannerMobile}) no-repeat;
    background-size: cover;
    width: auto;
  }
`;
const Image = styled.img`
  margin-top: 70px;
  width: 180px;
  @media screen and (max-width: 376px) {
    margin-top: 45px;
  }
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
  margin-top: 22px;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
  font-size: 48px;
  line-height: 50px;
  text-align: center;
  width: 450px;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 376px) {
    width: 350px;
    margin-top: 25px;
    font-size: 30px;
    line-height: 30px;
  }
`;

const TextDescription = styled.div`
  margin-top: 25px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
  text-align: center;
  line-height: 22px;
  width: 400px;
  letter-spacing: 1.7px;
  font-family: "Oxygen", sans-serif;
  @media screen and (max-width: 376px) {
    margin-top: 28px;
    letter-spacing: 1.5px;
    font-size: 14px;
    width: 350px;
  }
`;

const Button = styled.button`
  display: flex;
  margin-top: 50px;
  background: #204370;
  font-style: normal;
  border-radius: 30px;
  width: 180px;
  height: 60px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: "Oxygen", sans-serif;
  @media screen and (max-width: 376px) {
    width: 150px;
  }
`;

function Banner({setOpen}) {
  return (
    <Wrapper onClick={() => setOpen(false)}>
      <Content>
        <Image src={imgOne} alt={""} />
        <TextTitle>GLOBAL NETWORK FOR MENTORSHIP AND SUPPORT</TextTitle>
        <TextDescription>
          Get all the support and education you need to achieve full potential
          as an entrepreneur.
        </TextDescription>
        <Button>Join DEN</Button>
      </Content>
    </Wrapper>
  );
}

export default Banner;
