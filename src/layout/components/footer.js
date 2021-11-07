import React from "react";
import styled from "styled-components";
import D from "../../asset/img/D.png";
import Connected from "./connected";
import End from "./footerEnd";

const Container = styled.div`
  padding: 80px 0 0;
`;
const ViewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 40px 40px;
`;
const LeftViewFooter = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;
const RightViewFooter = styled.div`
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  position: absolute;
`;
const ViewAddress = styled.div`
  padding-left: 90px;
`;
const Title = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(35, 35, 39, 1);
  width: 60%;
  padding-bottom: 8px;
`;
const Border = styled.div`
  border-bottom: 3px solid rgba(35, 35, 39, 0.1);
  width: 15%;
`;
const Address = styled.div`
  padding-top: 8px;
`;
const TitleAddress = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 1);
`;
const NameAddress = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  width: 60%;
  padding: 8px 0;
`;
const EmailAddress = styled.a`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(76, 143, 204, 1);
  text-decoration: none;
`;
const TopViewRight = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(35, 35, 39, 0.1);
`;
const BottomViewRight = styled.div`
  padding-top: 30px;
`;
const TitleRight = styled.div`
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-align: left;
  color: rgba(23, 41, 64, 1);
  padding-bottom: 25px;
`;
const ListTitleRight = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ListItemRight = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
  width: 25%;
`;
const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Search = styled.div``;
const SearchContent = styled.div`
  font-size: 16px;
  line-height: 26px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 20px 45px;
  justify-content: center;
  border-radius: 30px;
  box-sizing: border-box;
  border: 1px solid #204370;
`;
const BorderFooter = styled.div`
  padding: 0 40px 0 130px;
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
            <ListTitleRight>
              <ListItem>
                <ListItemRight>Community - DEN Ventures</ListItemRight>
                <ListItemRight>Academy Services</ListItemRight>
                <ListItemRight>Partnerships Location Partners</ListItemRight>
              </ListItem>
              <Search>
                <SearchContent style={{ background: "rgba(32, 67, 112, 1)" }}>
                  Join our community
                </SearchContent>
              </Search>
            </ListTitleRight>
          </TopViewRight>
          <BottomViewRight>
            <TitleRight>How far do you want to go today?</TitleRight>
            <ListTitleRight>
              <ListItem>
                <ListItemRight>
                  Bali Bangalore Buenos Aires Singapore Lisbon
                </ListItemRight>
                <ListItemRight>
                  Canary Islands Chiang Mai Da Nang Valencia
                </ListItemRight>
                <ListItemRight>
                  Lisbon Manila Penang Canary Islands Valencia
                </ListItemRight>
                <ListItemRight>Lisbon Manila Penang Bangalore</ListItemRight>
                <ListItemRight>Lisbon Manila Penang Bangalore</ListItemRight>
              </ListItem>
            </ListTitleRight>
          </BottomViewRight>
        </RightViewFooter>
      </ViewFooter>
      <BorderFooter>
        <BorderEnd />
      </BorderFooter>
      <End />
    </Container>
  );
};

export default Footer;