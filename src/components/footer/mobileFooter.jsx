import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logodark.png";
import Twitter from "../../assets/icons/twitter.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Facebook from "../../assets/icons/facebook.png";
import Instagram from "../../assets/icons/instagram.png";

const Wrapper = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: inline;
    padding: 0 20px;
  }
`;

const TopFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
`;
const LogoBox = styled.div`
  padding: 60px 0 23px 0;
`;
const Slogan = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: #232327;
  font-family: Oxygen;
  text-align: center;
  padding: 0 45px 60px 45px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #232327;
  font-family: Oxygen;
  text-align: center;
`;
const Content = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #232327;
  font-family: Oxygen;
  text-align: center;
  padding: 8px 100px;
`;
const Link = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #4c8fcc;
  font-family: Oxygen;
  text-align: center;
  padding-bottom: 40px;
`;
const JoinButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(35, 35, 39, 0.1);

  button {
    height: 65px;
    background: #204370;
    color: #ffffff;
    border-radius: 40px;
    font-family: Oxygen;
    font-weight: bold;
    font-size: 16px;
    padding: 0px 45px;
    line-height: 26px;
    border: none;
    :hover {
      filter: brightness(150%);
    }
  }
`;

const BotFooter = styled.div`
  padding: 0px 20px 30px 20px;
`;
const BotTitle = styled.div`
  padding-bottom: 24px;
  font-weight: 700;
  font-size: 30px;
  line-height: 32px;
  font-family: "Pathway Gothic One", sans-serif;
  letter-spacing: -0.015em;
  color: #172940;
  padding-top: 30px;
`;

const BotContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(35, 35, 39, 0.1);
  div {
    width: 50%;
    font-family: Oxygen;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    color: rgba(23, 41, 64, 0.9);
  }
`;

const CopyRight = styled.div`
  color: rgba(35, 35, 39, 0.7);
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  font-family: Oxygen;
  margin-bottom: 20px;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  flex-wrap: wrap;
  div {
    padding: 0 15px;
    margin-bottom: 20px;
    border-right: 1px solid #d2d9e2;
  }
  & :nth-child(3) {
    border: none;
  }
  & :last-child {
    border: none;
  }
`;

const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  padding-bottom: 50px;
  padding-top: 23px;
  img {
    width: 16px;
    height: 16px;
  }
`;

function MobileFooter() {
  return (
    <Wrapper>
      <TopFooter>
        <LogoBox>
          <img src={Logo} alt="alt" />
        </LogoBox>
        <Slogan>
          We connect, inspire, and empower the world’s entrepreneurs.
        </Slogan>
        <Title>USA Headquarters:</Title>
        <Content>612 E 6th Street Austin, TX 78701</Content>
        <Link>admin@draperstartuphouse.com</Link>
        <Title>International Headquarters:</Title>
        <Content>39 Ann Siang Road, Singapore 069716.</Content>
        <Link>hello@draperstartuphouse.com</Link>
        <JoinButton>
          <button>Join our Community now</button>
        </JoinButton>
      </TopFooter>
      <BotFooter>
        <BotTitle>WHAT WE DO</BotTitle>
        <BotContent>
          <div>
            Community - DEN
            <br />
            Ventures
            <br />
            Academy
          </div>
          <div>
            Services
            <br />
            Partnerships
            <br />
            Location Partners
          </div>
        </BotContent>
        <BotTitle>HOW FAR DO YOU WANT TO GO TODAY?</BotTitle>
        <BotContent>
          <div>
            Bali
            <br />
            Bangalore
            <br />
            Buenos Aires
            <br />
            Singapore
            <br />
            Lisbon
            <br />
            Canary Islands
            <br />
            Chiang Mai
            <br />
            Da Nang
            <br />
            Valencia
            <br />
            Lisbon
            <br />
            Manila
            <br />
            Penang
          </div>
          <div>
            Penang
            <br />
            Canary Islands
            <br />
            Valencia
            <br />
            Lisbon
            <br />
            Manila
            <br />
            Penang
            <br />
            Bangalore
            <br />
            Lisbon
            <br />
            Malina
            <br />
            Penang
            <br />
            Bangalore
          </div>
        </BotContent>
      </BotFooter>
      <CopyRight>Copyright © Draper Startup House 2021</CopyRight>
      <Category>
        <div>Home</div>
        <div>About</div> <div>Stories and News</div> <div>Contact</div>{" "}
        <div>Privacy Policy</div>
      </Category>
      <IconGroup>
        <img src={Linkedin} alt="Linkedin" />
        <img src={Facebook} alt="Facebook" />
        <img src={Twitter} alt="Twitter" />
        <img src={Instagram} alt="Instagram" />
      </IconGroup>
    </Wrapper>
  );
}

export default MobileFooter;
