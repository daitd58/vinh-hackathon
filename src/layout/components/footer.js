import React from "react";
import styled from "styled-components";
import D from "../../asset/img/D.png";
import Connected from "./connected";
import End from "./footerEnd";
import FooterResponsive from "./footerResponsive";

const Container = styled.div`
  padding: 80px 0 0;
`;
const ViewFooter = styled.div`
  display: flex;
  padding: 100px 40px 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 60px 0 22px;
    align-items: center;
  }
`;
const LeftViewFooter = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  width: 40%;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 23px;
  }
`;
const RightViewFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const Title = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(35, 35, 39, 1);
  width: 55%;
  padding-bottom: 8px;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
  }
`;
const Border = styled.div`
  border-bottom: 3px solid rgba(35, 35, 39, 0.1);
  width: 15%;
  @media screen and (max-width: 768px) {
  }
`;
const Address = styled.div`
  padding-top: 8px;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 32px;
  }
`;
const AddressLast = styled.div`
  padding-top: 8px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 40px;
  }
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
    width: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 0 95px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 40px;
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
    display: flex;
    justify-content: center;
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
  font-family: "Gothic A1", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-align: left;
  color: rgba(23, 41, 64, 1);
  padding-bottom: 25px;
`;
const ListTitleRightOne = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
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
`;
const ListItemOne = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
`;
const ListTitleRightTwo = styled.div`
  display: flex;
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
  padding-left: 53px;
  @media screen and (max-width: 1280px) {
    padding-left: 43px;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }
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
  padding-left: 100px;
  @media screen and (max-width: 1280px) {
    padding-left: 90px;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }
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
  padding-left: 87px;
  @media screen and (max-width: 1280px) {
    padding-left: 77px;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 30px;
  }
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
  padding-left: 65px;
  @media screen and (max-width: 1280px) {
    padding-left: 55px;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 30px;
  }
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
  padding-left: 76px;
  @media screen and (max-width: 1280px) {
    padding-left: 66px;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 30px;
  }
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
  padding-left: 76px;
  @media screen and (max-width: 1280px) {
    padding-left: 66px;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 30px;
  }
`;
const Search = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
  }
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
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;
const BorderEnd = styled.div`
  border-bottom: 1px solid rgba(35, 35, 39, 0.1);
`;

const Footer = () => {
  return (
    <Container>
      <Connected />
      <ViewFooter>
        <LeftViewFooter>
          <Logo src={D} alt={""} />
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
            <AddressLast>
              <TitleAddress>International Headquarters</TitleAddress>
              <NameAddress>39 Ann Siang Road Singapore 069716</NameAddress>
              <EmailAddress href="#">hello@draperstartuphouse.com</EmailAddress>
            </AddressLast>
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
      <FooterResponsive />
      <BorderFooter>
        <BorderEnd />
      </BorderFooter>
      <End />
    </Container>
  );
};

export default Footer;
