import React from "react";
import styled from "styled-components";
import logo from "../img/Vectorlogo.png";
import Line from "../img/Line.png";
import In from "../img/in.png";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";

const Container = styled.div`
  padding: 80px 0 0;
`;
const ViewFooter = styled.div`
  display: flex;
  padding: 100px 40px 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 60px 0 22px;
  }
`;
const LeftViewFooter = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const RightViewFooter = styled.div`
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  position: absolute;
  @media screen and (max-width: 768px) {
    position: relative;
  }
`;
const ViewAddress = styled.div`
  padding-left: 90px;
  @media screen and (max-width: 768px) {
    padding: 0 44px;
  }
`;
const Title = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(35, 35, 39, 1);
  width: 55%;
  padding-bottom: 8px;

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
const Border = styled.div`
  border-bottom: 3px solid rgba(35, 35, 39, 0.1);
  width: 15%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Address = styled.div`
  padding-top: 8px;
`;
const TitleAddress = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 1);
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const NameAddress = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  width: 40%;
  padding: 8px 0;
  @media screen and (max-width: 768px) {
    width: 70%;
    text-align: center;
  }
`;
const EmailAddress = styled.a`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(76, 143, 204, 1);
  text-decoration: none;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const TopViewRight = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(35, 35, 39, 0.1);
`;
const BottomViewRight = styled.div`
  padding-top: 30px;
`;
const TitleRight = styled.div`
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-align: left;
  color: rgba(23, 41, 64, 1);
  padding-bottom: 25px;
  text-transform: uppercase;
`;
const ListTitleRightOne = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ListItemRightOne = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  width: 100%;
`;
const ListItemOne = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
`;
const ListTitleRightTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
`;
const ListItemRightTwo = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  width: 100%;
  padding-left: 53px;
`;
const ListItemRightThree = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  width: 100%;
  padding-left: 105px;
`;
const ListItemRightFour = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  width: 100%;
  padding-left: 87px;
`;
const ListItemRightFive = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  width: 100%;
  padding-left: 76px;
`;
const ListItemRightSix = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  width: 100%;
  padding-left: 76px;
`;
const ListItemRightSeven = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  width: 100%;
  padding-left: 95px;
`;
const Search = styled.div`
  position: absolute;
  right: 40px;
`;
const SearchContent = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: #fff;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 20px 45px;
  justify-content: center;
  border-radius: 30px;
  box-sizing: border-box;
  border: 1px solid #204370;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;
const BorderFooter = styled.div`
  padding: 0 40px 0 130px;
`;
const BorderEnd = styled.div`
  border-bottom: 1px solid rgba(35, 35, 39, 0.1);
`;

const FooterEnd = styled.div`
  padding: 35px 40px 40px 130px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    padding: 35px 40px 40px 80px;
  }
  @media screen and (max-width: 890px) {
    padding: 35px 40px 40px 40px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 20px 50px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 10px 50px;
  }
`;
const TitleEnd = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(35, 35, 39, 0, 7);
  @media screen and (max-width: 1030px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Menu = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (max-width: 768px) {
    padding: 18px 0 40px;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 605px) {
    width: 75%;
  }
  @media screen and (max-width: 500px) {
    width: 85%;
  }
  @media screen and (max-width: 460px) {
    width: 95%;
  }
  @media screen and (max-width: 390px) {
    width: 100%;
  }
`;
const MenuItem = styled.div`
  border-left: 1px solid rgba(210, 217, 226, 1);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  padding: 0 24px;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1170px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 605px) {
    padding: 0 24px;
  }
  @media screen and (max-width: 340px) {
    padding: 0 10px;
  }
`;
const HomeMenuItem = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  padding: 0 24px;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1170px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 605px) {
    padding-right: 24px;
  }
  @media screen and (max-width: 340px) {
    padding: 0 10px;
  }
`;
const ContactMenuItem = styled.div`
  border-left: 1px solid rgba(210, 217, 226, 1);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  padding: 0 24px;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1170px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 605px) {
    padding: 0 24px;
    border: 0;
  }
  @media screen and (max-width: 375px) {
    padding-left: 0;
  }
  @media screen and (max-width: 340px) {
    padding: 0 10px;
  }
`;
const StoriesMenuItem = styled.div`
  border-left: 1px solid rgba(210, 217, 226, 1);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  padding: 0 24px;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1170px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 605px) {
    padding: 0 24px;
  }
  @media screen and (max-width: 375px) {
    padding-right: 0;
  }
  @media screen and (max-width: 340px) {
    padding: 0 10px;
  }
`;
const Icons = styled.div`
  display: flex;
  gap: 20px;
  & img {
    :hover {
      cursor: pointer;
    }
  }
`;
const MenuIcon = styled.img`
  display: none;
`;

const Mainten = () => {
  return (
    <Container>
      <ViewFooter>
        <LeftViewFooter>
          <Logo src={logo} alt={""} />
          <ViewAddress>
            <Title>
              We connect, inspire, and empower the world’s entrepreneurs.
            </Title>
            <Border></Border>
            <Address>
              <TitleAddress>USA Headquarters</TitleAddress>
              <NameAddress>
                612 East 6th Street Austin, TX 78701 USA
              </NameAddress>
              <EmailAddress href="#">
                austin@draperstartuphouse.com
              </EmailAddress>
            </Address>
            <Address>
              <TitleAddress>International Headquarters</TitleAddress>
              <NameAddress>39 Ann Siang Road Singapore 069716</NameAddress>
              <EmailAddress href="#">hello@draperstartuphouse.com</EmailAddress>
            </Address>
          </ViewAddress>
        </LeftViewFooter>
        <RightViewFooter>
          <TopViewRight>
            <TitleRight>What We Do</TitleRight>
            <ListTitleRightOne>
              <ListItemOne>
                <ListItemRightOne>
                  Community - DEN
                  <br /> Ventures
                </ListItemRightOne>
                <ListItemRightTwo>
                  Academy
                  <br />
                  Services
                </ListItemRightTwo>
                <ListItemRightThree>
                  Partnerships
                  <br />
                  Location Partners
                </ListItemRightThree>
              </ListItemOne>
              <Search>
                <SearchContent style={{ background: "rgba(32, 67, 112, 1)" }}>
                  Join our community
                </SearchContent>
              </Search>
            </ListTitleRightOne>
          </TopViewRight>
          <BottomViewRight>
            <TitleRight>How far do you want to go today?</TitleRight>
            <ListTitleRightTwo>
              <ListItemRightOne>
                Bali
                <br />
                Bangalore
                <br />
                Buenos Aires
                <br />
                Singapore
                <br />
                Lisbon
              </ListItemRightOne>
              <ListItemRightFour>
                Canary Islands
                <br />
                Chiang Mai
                <br />
                Da Nang
                <br />
                Valencia
              </ListItemRightFour>
              <ListItemRightFive>
                Lisbon
                <br />
                Manila
                <br />
                Penang
                <br />
                Canary Islands
                <br />
                Valencia
              </ListItemRightFive>
              <ListItemRightSix>
                Lisbon
                <br />
                Manila
                <br />
                Penang
                <br />
                Bangalore
              </ListItemRightSix>
              <ListItemRightSeven>
                Lisbon
                <br />
                Manila
                <br />
                Penang
                <br />
                Bangalore
              </ListItemRightSeven>
            </ListTitleRightTwo>
          </BottomViewRight>
        </RightViewFooter>
      </ViewFooter>

      <BorderFooter>
        <BorderEnd />
      </BorderFooter>

      <FooterEnd>
        <TitleEnd>Copyright © Draper Startup House 2021</TitleEnd>
        <Menu>
          <HomeMenuItem href="#">Home</HomeMenuItem>
          <MenuItem href="#">About</MenuItem>
          <StoriesMenuItem href="#">Stories and News</StoriesMenuItem>
          <ContactMenuItem href="#">Contact</ContactMenuItem>
          <MenuItem href="#">Privacy Policy</MenuItem>
        </Menu>
        <MenuIcon src={Line} alt={""} />
        <Icons>
          <img src={In} alt={""} />

          <img src={Facebook} alt={""} />

          <img src={Twitter} alt={""} />

          <img src={Instagram} alt={""} />
        </Icons>
      </FooterEnd>
    </Container>
  );
};
export default Mainten;
