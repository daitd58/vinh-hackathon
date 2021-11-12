import React from "react";
import circle from "../assets/img/circle.png";
import styled from "styled-components";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import linkedin from "../assets/img/linkedin.png";
import twitter from "../assets/img/twitter.png";
const Wrapper = styled.div`
  @media screen and (max-width: 1550px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: inline;
  }
  @media screen and (max-width: 480px) {
    display: inline;
  }
  @media screen and (max-width: 376px) {
    display: inline;
  }
`;
const Box = styled.div`
  padding: 0 20px;
  @media screen and (max-width: 480px) {
    padding: 0 20px;
  }
`;
const BoxContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 28px 43px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 28px 43px;
  }
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 28px 43px;
  }
`;

const TextHead = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  color: #232327;
  @media screen and (max-width: 768px) {
    width: 57%;
    padding-top: 20px;
    font-size: 18px;
    line-height: 28px;
  }
  @media screen and (max-width: 480px) {
    width: 77%;
    padding-top: 20px;
    font-size: 16px;
    line-height: 26px;
  }
  @media screen and (max-width: 376px) {
    font-size: 16px;
    line-height: 26px;

    width: 111%;
    padding-top: 15px;
  }
`;

const Border = styled.div`
  @media screen and (max-width: 376px) {
    border-bottom: 3px solid rgba(35, 35, 39, 0.1);
    width: 40px;
    padding-top: 17px;
  }
`;

const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 75px;
  text-align: center;
  @media screen and (max-width: 480px) {
    padding: 0 128px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 75px;
  }
`;

const BoxItem1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px 30px 60px;
  text-align: center;
  @media screen and (max-width: 480px) {
    padding: 30px 111px 30px 111px;
  }
  @media screen and (max-width: 376px) {
    padding: 30px 60px 30px 60px;
  }
`;

const TextTitle = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #172940;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media screen and (max-width: 376px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

const TextAddress = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(23, 41, 64, 0.9);
  @media screen and (max-width: 480px) {
    font-size: 18px;
    line-height: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media screen and (max-width: 376px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

const TextEmail = styled.a`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #4c8fcc;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media screen and (max-width: 376px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

const BoxButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    padding: 12px 80px;
    width: 275px;
  }
  @media screen and (max-width: 376px) {
    padding: 12px 35px;
    width: 275px;
  }
`;

const Button = styled.button`
  background: #204370;
  border-radius: 40px;
  font-family: Oxygen;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  height: 65px;
  padding: 12px 42px;
  border: none;
`;

const Line = styled.div`
  border-bottom: 1px solid rgba(35, 35, 39, 0.1);
  padding-top: 30px;
`;

const BoxList = styled.div`
  display: flex;
`;
const BoxLeftRight = styled.div`
  width: 49%;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 35px;
  color: rgba(23, 41, 64, 0.9);
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 38px;
    width: 50%;
    display: inline;
  }
  @media screen and (max-width: 376px) {
    font-size: 16px;
    line-height: 35px;
    display: inline;
    width: 49%;
  }
`;

const TextList = styled.div`
  font-family: "Pathway Gothic One", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #172940;
  padding: 15px 0;
  @media screen and (max-width: 480px) {
    font-size: 38px;
    line-height: 40px;
  }
  @media screen and (max-width: 376px) {
    font-size: 32px;
    line-height: 36px;
  }
`;

const BoxEnd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

const TextCopy = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  font-family: "Oxygen", sans-serif;
  color: rgba(35, 35, 39, 0.7);
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media screen and (max-width: 376px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const BoxIcon = styled.div`
  display: flex;
  gap: 22px;
  padding-bottom: 70px;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    gap: 32px;
  }
  @media screen and (max-width: 480px) {
    gap: 32px;
  }
  @media screen and (max-width: 376px) {
    gap: 22px;
  }
`;

const MenuMobile = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
  }
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
  }
`;

const TextMenuMobile = styled.div`
  display: flex;
  gap: 20px;
  & p {
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    font-size: 14px;
    font-weight: 400;

    padding-right: 20px;
    border-right: 1.5px solid #d2d9e2;
    line-height: 8px;
    padding-left: 14px;
    :last-child {
      border-right: none;
    }
    @media screen and (max-width: 768px) {
      font-size: 16px;
      padding: 0 25px;
    }
    @media screen and (max-width: 480px) {
      font-size: 16px;
      padding: 0 23px;
    }
    @media screen and (max-width: 376px) {
      font-size: 14px;
      padding: 0 14px;
    }
  }
  & a {
    color: rgba(23, 41, 64, 0.9);
    text-decoration: none;
  }
`;

const BoxLeftRightMobile = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  & p {
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    color: rgba(23, 41, 64, 0.9);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const BoxLeftRightMobile1 = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  & p {
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    color: rgba(23, 41, 64, 0.9);
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const Mobile = () => {
  return (
    <>
      <Wrapper>
        <Box>
          <BoxContainer>
            <img src={circle} alt={""} />
            <TextHead>
              We connect, inspire, and empower the world’s entrepreneurs.
            </TextHead>
            <Border></Border>
          </BoxContainer>
          <BoxItem>
            <TextTitle>USA Headquarters:</TextTitle>
            <TextAddress>612 E 6th Street Austin, TX 78701</TextAddress>
            <TextEmail href="#">admin@draperstartuphouse.com</TextEmail>
          </BoxItem>
          <BoxItem1>
            <TextTitle>International Headquarters:</TextTitle>
            <TextAddress>39 Ann Siang Road, Singapore 069716.</TextAddress>
            <TextEmail href="#">hello@draperstartuphouse.com</TextEmail>
          </BoxItem1>
          <BoxButton>
            <Button>Join our Community now</Button>
          </BoxButton>
          <Line></Line>

          <TextList>What We Do</TextList>
          <BoxList>
            <BoxLeftRight>
              Community - DEN <br /> Ventures <br /> Academy
            </BoxLeftRight>
            <BoxLeftRight>
              Services
              <br /> Partnerships
              <br /> Location Partners
            </BoxLeftRight>
            <BoxLeftRightMobile>
              <div>
                <p>Community - DEN</p>
                <p>Ventures</p>
              </div>
              <div>
                <p>Academy</p>
                <p>Services</p>
              </div>
              <div>
                <p>Partnerships</p>
                <p>Location Partners</p>
              </div>
            </BoxLeftRightMobile>
          </BoxList>

          <Line></Line>

          <TextList>HOW FAR DO YOU WANT TO GO TODAY?</TextList>
          <BoxList>
            <BoxLeftRight>
              Bali <br />
              Bangalore <br />
              Buenos <br />
              Aires <br />
              Singapore <br />
              Lisbon <br />
              Canary <br />
              Islands
              <br />
              Chiang Mai <br />
              Da Nang <br />
              Valencia <br />
              Lisbon <br />
              Manila <br />
              Penang
            </BoxLeftRight>
            <BoxLeftRight>
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
              <br />
            </BoxLeftRight>
            <BoxLeftRightMobile1>
              <div>
                <p>Bali</p>
                <p>Bangalore</p>
                <p>Buenos Aires</p>
                <p>Singapore</p>
                <p>Lisbon</p>
              </div>
              <div>
                <p>Canary Islands</p>
                <p>Chiang Mai</p>
                <p>Da Nang</p>
                <p>Singapore</p>
                <p>Valencia</p>
              </div>
              <div>
                <p>Lisbon</p>
                <p>Manila</p>
                <p>Penang</p>
                <p>Canary Islands</p>
                <p>Valencia</p>
              </div>
              <div>
                <p>Lisbon</p>
                <p>Manila</p>
                <p>Penang</p>
                <p>Bangalore</p>
              </div>
              <div>
                <p>Lisbon</p>
                <p>Manila</p>
                <p>Penang</p>
                <p>Bangalore</p>
              </div>
            </BoxLeftRightMobile1>
          </BoxList>

          <Line></Line>
          <BoxEnd>
            <TextCopy>Copyright © Draper Startup House 2021</TextCopy>
            <div>
              <MenuMobile>
                <TextMenuMobile>
                  <p>
                    <a href="#">Home</a>
                  </p>

                  <p>
                    <a href="#">About</a>
                  </p>
                  <p>
                    <a href="#">Stories and News</a>
                  </p>
                </TextMenuMobile>
                <TextMenuMobile>
                  <p>
                    <a href="#">Contact</a>
                  </p>
                  <p>
                    <a href="#">Privacy Policy</a>
                  </p>
                </TextMenuMobile>
              </MenuMobile>
            </div>

            <BoxIcon>
              <a href="#">
                <img src={linkedin} />
              </a>
              <a href="">
                {" "}
                <img src={facebook} />
              </a>
              <a href="">
                {" "}
                <img src={twitter} />
              </a>
              <a href="">
                {" "}
                <img src={instagram} />
              </a>
            </BoxIcon>
          </BoxEnd>
        </Box>
      </Wrapper>
    </>
  );
};

export default Mobile;
