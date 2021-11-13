import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logodark.png";
import Twitter from "../../assets/icons/twitter.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Facebook from "../../assets/icons/facebook.png";
import Instagram from "../../assets/icons/instagram.png";

const Wrapper = styled.div`
  background: #f4f6f8;
  padding: 100px 0 40px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const LogoContainer = styled.div`
  padding: 0 30px 0 40px;
  & img {
    width: 64px;
    height: 64px;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  padding-right: 40px;
`;
const LeftContent = styled.div`
  width: 20%;
  & p {
    font-family: "Oxygen";
    font-size: 16px;
    line-height: 26px;
    color: #232327;
    padding-right: 30px;
  }
  & h1 {
    padding-bottom: 8px;
    font-family: "Oxygen";
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    color: #172940;
  }
  & h4 {
    font-family: "Oxygen";
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    color: rgba(23, 41, 64, 0.9);
    padding-right: 90px;
  }
`;

const Link = styled.div`
  margin-top: 8px;
  margin-bottom: 32px;
  & a {
    font-family: "Oxygen";
    font-size: 16px;
    line-height: 26px;
    color: #4c8fcc;
    font-weight: 400;
    cursor: pointer;
  }
`;

const Span = styled.div`
  width: 40px;
  background: rgba(35, 35, 39, 0.1);
  height: 3px;
  margin: 17px 0;
`;
const RightContent = styled.div`
  width: 75%;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(35, 35, 39, 0.1);
`;
const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
`;
const TopContent = styled.div`
  border-bottom: 1px solid rgba(35, 35, 39, 0.1);
`;
const BottomContent = styled.div`
  margin-top: 30px;
`;
const FooterTitle = styled.div`
  font-family: "Pathway Gothic One", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #172940;
  margin-bottom: 26px;
`;
const Button = styled.button`
  height: 65px;
  background: #204370;
  border-radius: 40px;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  padding: 0 45px;
  border: none;
  cursor: pointer;
  transition: all 1s;
  :hover {
    filter: brightness(150%);
    
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
  align-items: center;
`;

const Category = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  width: 65%;
`;
const SecondCategory = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  width: 95%;
`;
const CategoryItem = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  color: rgba(23, 41, 64, 0.9);
  cursor: pointer;
`;

const Text = styled.div`
  font-family: "Oxygen";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: rgba(35, 35, 39, 0.7);
`;
const FooterCategory = styled.div`
  display: flex;

  & div {
    padding: 0 24px;
    border-right: 1px solid #d2d9e2;
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(23, 41, 64, 0.9);
    &:last-child {
      border: none;
    }
  }
`;
const IconGroup = styled.div`
  & img {
    margin-right: 25px;
    cursor: pointer;
  }
`;

function Footer() {
  return (
    <>
      <Wrapper>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
        </LogoContainer>
        <FooterContent>
          <Content>
            <LeftContent>
              <p>We connect, inspire, and empower the world’s entrepreneurs.</p>
              <Span />
              <h1>USA Headquarters</h1>
              <h4>612 East 6th Street Austin, TX 78701 USA</h4>
              <Link>
                <a href="#" target="_blank">
                  austin@draperstartuphouse.com
                </a>
              </Link>
              <h1>USA Headquarters</h1>
              <h4>612 East 6th Street Austin, TX 78701 USA</h4>
              <Link>
                <a href="#" target="_blank">
                  austin@draperstartuphouse.com
                </a>
              </Link>
            </LeftContent>
            <RightContent>
              <TopContent>
                <FooterTitle>What We Do</FooterTitle>
                <Box>
                  <Category>
                    <CategoryItem>
                      <p>Community - DEN</p>
                    </CategoryItem>
                    <CategoryItem>
                      <p>Academy</p>
                    </CategoryItem>
                    <CategoryItem>
                      <p>Partnerships</p>
                    </CategoryItem>
                    <CategoryItem>
                      <p>Ventures</p>
                    </CategoryItem>
                    <CategoryItem>
                      <p>Services</p>
                    </CategoryItem>
                    <CategoryItem>
                      <p>Location Partners</p>
                    </CategoryItem>
                  </Category>
                  <Button>Join our community</Button>
                </Box>
              </TopContent>
              <BottomContent>
                <FooterTitle>HOW FAR DO YOU WANT TO GO TODAY?</FooterTitle>
                <SecondCategory>
                  <CategoryItem>
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
                  </CategoryItem>
                  <CategoryItem>
                    Canary Islands
                    <br />
                    Chiang Mai
                    <br />
                    Da Nang
                    <br />
                    Valencia
                    <br />
                  </CategoryItem>
                  <CategoryItem>
                    Lisbon
                    <br />
                    Manila
                    <br />
                    Penang
                    <br />
                    Canary Islands
                    <br />
                    Valencia
                    <br />
                  </CategoryItem>
                  <CategoryItem>
                    Lisbon
                    <br />
                    Manila
                    <br />
                    Penang
                    <br />
                    Bangalore
                    <br />
                  </CategoryItem>
                  <CategoryItem>
                    Lisbon <br /> Manila <br /> Penang <br /> Bangalore
                  </CategoryItem>
                </SecondCategory>
              </BottomContent>
            </RightContent>
          </Content>
          <Copyright>
            <Text>Copyright © Draper Startup House 2021</Text>
            <FooterCategory>
              <div>Home</div>
              <div>About</div>
              <div>Stories and News</div>
              <div>Contact</div>
              <div>Privacy Policy</div>
            </FooterCategory>
            <IconGroup>
              <img src={Linkedin} alt="Linkedin" />
              <img src={Facebook} alt="Facebook" />
              <img src={Twitter} alt="Twitter" />
              <img src={Instagram} alt="Instagram" />
            </IconGroup>
          </Copyright>
        </FooterContent>
      </Wrapper>
    </>
  );
}

export default Footer;
