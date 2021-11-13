import React from "react";
import styled from "styled-components";
import LogoD from "../../asset/img/LogoD.png";
import In from "../../asset/img/lin.png";
import Fb from "../../asset/img/fb.png";
import Twitter from "../../asset/img/twt.png";
import Intagram from "../../asset/img/inta.png";

const Wrapper = styled.div`
  width: 100%;
  background-color: #f4f6f8;
`;

const Header = styled.div`
  background-color: #204370;
  height: 377px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 376px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 41px;
  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #ffffff;
  border: 0;
  box-sizing: border-box;
  width: 700px;
  @media screen and (max-width: 376px) {
    font-size: 18px;
    border: 0;
    box-sizing: border-box;
    width: 335px;
  }
`;

const Button = styled.div`
  padding-top: 40px;
`;

const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 45px;
  width: 156px;
  height: 65px;
  background: #ffcc00;
  border-radius: 40px;
`;

const TextBtn = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #232327;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;

const Container = styled.div`
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  @media screen and (max-width: 1024px) {
    gap: 50px;
  }
  @media screen and (max-width: 768px) {
    gap: 20px;
    justify-content: space-between;
  }
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: center;
    gap: 0;
  }
`;
const Sidebar = styled.div`
  width: 25%;
  display: flex;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    width: 40%;
  }
  @media screen and (max-width: 376px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const Logo = styled.div`
  width: 8%;
  @media screen and (max-width: 1366px) {
    width: 9%;
  }
  @media screen and (max-width: 1024px) {
    width: 11%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding-bottom: 23px;
  }
`;

const ContentSidebar = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    gap: 10px;
  }
  @media screen and (max-width: 376px) {
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`;

const ImageLogo = styled.img``;

const SidebarAbove = styled.div`
  padding-bottom: 17px;
`;

const TextAbove = styled.div`
  width: 236px;
  border: 0;
  box-sizing: border-box;
  text-align: left;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #232327;
  @media screen and (max-width: 376px) {
    width: 288px;
    text-align: center;
  }
`;

const Hr = styled.div`
  border: 3px solid rgba(35, 35, 39, 0.1);
  width: 40px;
`;
const HrMobile = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: block;
    border: 1px solid rgba(35, 35, 39, 0.1);
    width: 100%;
  }
`;

const SidebarBetween = styled.div`
  padding-top: 18px;
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleSidebar = styled.div`
  text-align: left;
  border: 0;
  box-sizing: border-box;
  width: 207px;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #172940;
  @media screen and (max-width: 376px) {
    width: 236px;
    text-align: center;
  }
`;

const TextProfile = styled.div`
  text-align: left;
  border: 0;
  box-sizing: border-box;
  width: 181px;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(23, 41, 64, 0.9);
  padding: 8px 0;
  @media screen and (max-width: 376px) {
    text-align: center;
    width: 186px;
  }
`;

const MaillAddress = styled.div`
  text-align: left;
  border: 0;
  box-sizing: border-box;
  width: 234px;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-decoration-line: underline;
  color: #4c8fcc;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 376px) {
    width: 236px;
    text-align: center;
  }
`;

const SidebarLast = styled.div`
  padding-top: 32px;
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
  }
`;

const Content = styled.div`
  width: 75%;
  @media screen and (max-width: 768px) {
    width: 60;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding-top: 30px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 34px 0 40px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`;

const ContentAbove = styled.div``;

const ContentHeader = styled.div`
  padding-bottom: 26px;
`;

const TextHeaderContent = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #172940;
  text-align: left;
`;

const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 47px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;
const ListHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 53px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 0fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 0fr);
    grid-gap: 0 25px;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const ListHeaderMobile = styled.div`
  display: none;

  @media screen and (max-width: 376px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 53px;
  }
`;

const ItemConten = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(23, 41, 64, 0.9);
  border: 0;
  box-sizing: border-box;
  width: 129px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 45px;
  background: #204370;
  border-radius: 40px;
  width: 18%;
  @media screen and (max-width: 1024px) {
    width: 25%;
  }
  @media screen and (max-width: 768px) {
    width: 35%;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const BtnMobile = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: flex;
    padding-bottom: 50px;
  }
`;

const ButtonContentMobile = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 45px;
    background: #204370;
    border-radius: 40px;
    width: 100%;
  }
`;

const TextButton = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const Rim = styled.div`
  border: 1px solid rgba(35, 35, 39, 0.1);
`;

const ContentLast = styled.div`
  padding-top: 30px;
`;

const TitleContainer = styled.div`
  padding-bottom: 26px;
`;

const TextTitle = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #172940;
  text-align: left;
`;

const ContentMain = styled.div`
  display: flex;
  gap: 53px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const ContentMainMobile = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: flex;
    gap: 53px;
  }
`;

const ContentMain1024 = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
    gap: 53px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    gap: 25px;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const ItemMain = styled.div`
  width: 129px;
  border: 0;
  box-sizing: border-box;
  text-align: left;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(23, 41, 64, 0.9);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Line = styled.div`
  border: 1px solid rgba(35, 35, 39, 0.1);
`;

const FooterRight = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: rgba(35, 35, 39, 0.7);
`;

const FooterBetween = styled.div`
  display: flex;
  height: 22px;
  width: 55%;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 20px 0;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const FooterBetweenMobile = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 18px;
    padding-bottom: 40px;
    gap: 20px;
  }
`;
const FooterMenuAbove = styled.div`
  display: flex;
`;

const FooterMenuLast = styled.div`
  display: flex;
`;

const FooterLeft = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 20px;
  @media screen and (max-width: 376px) {
    width: 40%;
  }
`;

const ListItem = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: rgba(23, 41, 64, 0.9);
  padding: 0 24px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    padding: 0 5px;
  }
`;
const Tr = styled.div`
  border-left: 1px solid #d2d9e2;
  width: 12px;
  @media screen and (max-width: 1024px) {
    width: 0px;
  }
`;

const IconLogo = styled.div``;

const Full = styled.div`
  display: flex;
  padding-top: 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 60px 40px 0px;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 20px 0;
  }
`;

const Main = styled.div`
  width: 88%;
  @media screen and (max-width: 1024px) {
    width: 85%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
  }
`;

const LineText = styled.div``;

export default function ComponentSeven() {
  return (
    <Wrapper>
      <Header>
        <Title>
          WHERE ENTREPRENEURS AROUND THE WORLD GET CONNECTED, INSPIRED, AND
          EMPOWERED
        </Title>
        <Button>
          <Btn>
            <TextBtn>Join DEN</TextBtn>
          </Btn>
        </Button>
      </Header>
      <Full>
        <Logo>
          <ImageLogo src={LogoD} />
        </Logo>
        <Main>
          <Container>
            <Sidebar>
              <ContentSidebar>
                <SidebarAbove>
                  <TextAbove>
                    We connect, inspire, and empower the world’s entrepreneurs.
                  </TextAbove>
                </SidebarAbove>
                <Hr />
                <SidebarBetween>
                  <TitleSidebar>USA Headquarters</TitleSidebar>
                  <TextProfile>
                    612 East 6th Street Austin, TX 78701 USA
                  </TextProfile>
                  <MaillAddress>austin@draperstartuphouse.com</MaillAddress>
                </SidebarBetween>
                <SidebarLast>
                  <TitleSidebar>International Headquarters</TitleSidebar>
                  <TextProfile>39 Ann Siang Road Singapore 069716</TextProfile>
                  <MaillAddress>hello@draperstartuphouse.com</MaillAddress>
                </SidebarLast>
                <BtnMobile>
                  <ButtonContentMobile>
                    <TextButton>Join our community</TextButton>
                  </ButtonContentMobile>
                </BtnMobile>
              </ContentSidebar>
            </Sidebar>
            <HrMobile />
            <Content>
              <ContentAbove>
                <ContentHeader>
                  <TextHeaderContent>What We Do</TextHeaderContent>
                </ContentHeader>
                <ListContent>
                  <ListHeader>
                    <ItemConten>
                      <LineText>Community - DEN</LineText>
                      <LineText>Ventures</LineText>
                    </ItemConten>
                    <ItemConten>
                      <LineText>Academy</LineText>
                      <LineText>Services</LineText>
                    </ItemConten>
                    <ItemConten>
                      <LineText>Partnerships</LineText>
                      <LineText>Location Partners</LineText>
                    </ItemConten>
                  </ListHeader>
                  <ListHeaderMobile>
                    <ItemConten>
                      <LineText>Community - DEN</LineText>
                      <LineText>Ventures</LineText>
                      <LineText>Academy</LineText>
                    </ItemConten>
                    <ItemConten>
                      <LineText>Services</LineText>
                      <LineText>Partnerships</LineText>
                      <LineText>Location Partners</LineText>
                    </ItemConten>
                  </ListHeaderMobile>

                  <ButtonContent>
                    <TextButton>Join our community</TextButton>
                  </ButtonContent>
                </ListContent>
              </ContentAbove>
              <Rim />
              <ContentLast>
                <TitleContainer>
                  <TextTitle>HOW FAR DO YOU WANT TO GO TODAY?</TextTitle>
                </TitleContainer>
                <ContentMain>
                  <ItemMain>
                    <LineText>Bali</LineText>
                    <LineText>Bangalore</LineText>
                    <LineText>Buenos Aires</LineText>
                    <LineText>Singapore</LineText>
                    <LineText>Lisbon</LineText>
                  </ItemMain>
                  <ItemMain>
                    <LineText>Canary Islands</LineText>
                    <LineText>Chiang Mai</LineText>
                    <LineText>Da Nang</LineText>
                    <LineText>Valencia</LineText>
                  </ItemMain>
                  <ItemMain>
                    <LineText>Lisbon</LineText>
                    <LineText>Manila</LineText>
                    <LineText>Penang</LineText>
                    <LineText>Canary Islands</LineText>
                    <LineText>Valencia</LineText>
                  </ItemMain>
                  <ItemMain>
                    <LineText>Lisbon</LineText>
                    <LineText>Manila</LineText>
                    <LineText>Penang</LineText>
                    <LineText>Bangalore</LineText>
                  </ItemMain>
                  <ItemMain>
                    <LineText>Lisbon</LineText>
                    <LineText>Manila</LineText>
                    <LineText>Penang</LineText>
                    <LineText>Bangalore</LineText>
                  </ItemMain>
                </ContentMain>
                <ContentMainMobile>
                  <ItemMain>
                    <LineText>Bali</LineText>
                    <LineText>Bangalore</LineText>
                    <LineText>Buenos Aires</LineText>
                    <LineText>Singapore</LineText>
                    <LineText>Lisbon</LineText>
                    <LineText>Canary Islands</LineText>
                    <LineText>Chiang Mai</LineText>
                    <LineText>Da Nang</LineText>
                    <LineText>Valencia</LineText>
                    <LineText>Lisbon</LineText>
                    <LineText>Manila</LineText>
                    <LineText>Penang</LineText>
                  </ItemMain>
                  <ItemMain>
                    <LineText>Penang</LineText>
                    <LineText>Canary Islands</LineText>
                    <LineText>Valencia</LineText>
                    <LineText>Lisbon</LineText>
                    <LineText>Manila</LineText>
                    <LineText>Penang</LineText>
                    <LineText>Bangalore</LineText>
                    <LineText>Lisbon</LineText>
                    <LineText>Manila</LineText>
                    <LineText>Penang</LineText>
                    <LineText>Bangalore</LineText>
                  </ItemMain>
                </ContentMainMobile>
                <ContentMain1024>
                  <ItemMain>
                    <LineText>Bali</LineText>
                    <LineText>Bangalore</LineText>
                    <LineText>Buenos Aires</LineText>
                    <LineText>Singapore</LineText>
                    <LineText>Lisbon</LineText>
                    <LineText>Penang</LineText>
                    <LineText>Bangalore</LineText>
                  </ItemMain>
                  <ItemMain>
                    <LineText>Canary Islands</LineText>
                    <LineText>Chiang Mai</LineText>
                    <LineText>Da Nang</LineText>
                    <LineText>Valencia</LineText>
                    <LineText>Lisbon</LineText>
                    <LineText>Manila</LineText>
                    <LineText>Lisbon</LineText>
                    <LineText>Penang</LineText>
                  </ItemMain>
                  <ItemMain>
                    <LineText>Lisbon</LineText>
                    <LineText>Manila</LineText>
                    <LineText>Penang</LineText>
                    <LineText>Canary Islands</LineText>
                    <LineText>Valencia</LineText>
                    <LineText>Bangalore</LineText>
                    <LineText>Chiang Mai</LineText>
                  </ItemMain>
                </ContentMain1024>
              </ContentLast>
            </Content>
          </Container>
          <Line />
          <Footer>
            <FooterRight>Copyright © Draper Startup House 2021</FooterRight>
            <FooterBetween>
              <ListItem>Home</ListItem>
              <Tr />
              <ListItem>About</ListItem>
              <Tr />
              <ListItem>Stories and News</ListItem>
              <Tr />
              <ListItem>Contact</ListItem>
              <Tr />
              <ListItem>Privacy Policy</ListItem>
            </FooterBetween>
            <FooterBetweenMobile>
              <FooterMenuAbove>
                <ListItem>Home</ListItem>
                <Tr />
                <ListItem>About</ListItem>
                <Tr />
                <ListItem>Stories and News</ListItem>
              </FooterMenuAbove>
              <FooterMenuLast>
                <ListItem>Contact</ListItem>
                <Tr />
                <ListItem>Privacy Policy</ListItem>
              </FooterMenuLast>
            </FooterBetweenMobile>
            <FooterLeft>
              <IconLogo>
                <ImageLogo src={In} />
              </IconLogo>
              <IconLogo>
                <ImageLogo src={Fb} />
              </IconLogo>
              <IconLogo>
                <ImageLogo src={Twitter} />
              </IconLogo>
              <IconLogo>
                <ImageLogo src={Intagram} />
              </IconLogo>
            </FooterLeft>
          </Footer>
        </Main>
      </Full>
    </Wrapper>
  );
}
