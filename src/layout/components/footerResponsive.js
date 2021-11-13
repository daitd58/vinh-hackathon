import React from "react";
import styled from "styled-components";

const ViewFooter = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(35, 35, 39, 0.1);
`;
const SearchContent = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: #fff;
  background: #fff;
  padding: 20px 45px;
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
const ListViewTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ListViewBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TopView = styled.div`
  padding: 30px 0 40px;
  border-bottom: 1px solid rgba(35, 35, 39, 0.1);
`;
const BottomView = styled.div`
  padding: 30px 0 40px;
`;
const Title = styled.div`
  font-family: "Gothic A1", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-align: left;
  color: rgba(23, 41, 64, 1);
  padding-bottom: 24px;
  @media screen and (max-width: 376px) {
    font-size: 22px;
    line-height: 22px;
  }
`;
const ListItemOne = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(23, 41, 64, 0, 9);
`;
const Mobile = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: block;
  }
`;
const Ipad = styled.div`
  display: block;
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const FooterResponsive = () => {
  return (
    <ViewFooter>
      <Search>
        <SearchContent style={{ background: "rgba(32, 67, 112, 1)" }}>
          Join our community
        </SearchContent>
      </Search>
      <Ipad>
      <TopView>
        <Title>What We Do</Title>
        <ListViewTop>
          <ListItemOne>
            <div>Community - DEN</div>
            <div>Ventures</div>
          </ListItemOne>
          <ListItemOne>
            <div>Academy</div>
            <div>Services</div>
          </ListItemOne>
          <ListItemOne>
            <div>Partnerships</div>
            <div>Location Partners</div>
          </ListItemOne>
        </ListViewTop>
      </TopView>
      <BottomView>
        <Title>How far do you want to go today?</Title>
        <ListViewBottom>
          <ListItemOne>
            <div>Bali</div>
            <div>Bangalore</div>
            <div>Buenos Aires</div>
            <div>Singapore</div>
            <div>Lisbon</div>
            <div>Canary Islands</div>
            <div>Chiang Mai</div>
            <div>Da Nang</div>
          </ListItemOne>
          <ListItemOne>
            <div>Valencia</div>
            <div>Lisbon</div>
            <div>Manila</div>
            <div>Penang</div>            
            <div>Penang</div>
            <div>Canary Islands</div>
            <div>Valencia</div>
            <div>Lisbon</div>
          </ListItemOne>
          <ListItemOne>
            <div>Manila</div>
            <div>Penang</div>
            <div>Bangalore</div>
            <div>Lisbon</div>
            <div>Malina</div>
            <div>Penang</div>
            <div>Bangalore</div>
          </ListItemOne>
        </ListViewBottom>
      </BottomView>
      </Ipad>
      <Mobile>
      <TopView>
        <Title>What We Do</Title>
        <ListViewTop>
          <ListItemOne>
            <div>Community - DEN</div>
            <div>Ventures</div>
            <div>Academy</div>
          </ListItemOne>
          <ListItemOne>
            <div>Services</div>
            <div>Partnerships</div>
            <div>Location Partners</div>
          </ListItemOne>
        </ListViewTop>
      </TopView>
      <BottomView>
        <Title>How far do you want to go today?</Title>
        <ListViewBottom>
          <ListItemOne>
            <div>Bali</div>
            <div>Bangalore</div>
            <div>Buenos Aires</div>
            <div>Singapore</div>
            <div>Lisbon</div>
            <div>Canary Islands</div>
            <div>Chiang Mai</div>
            <div>Da Nang</div>
            <div>Valencia</div>
            <div>Lisbon</div>
            <div>Manila</div>
            <div>Penang</div>
          </ListItemOne>
          <ListItemOne>
            <div>Penang</div>
            <div>Canary Islands</div>
            <div>Valencia</div>
            <div>Lisbon</div>
            <div>Manila</div>
            <div>Penang</div>
            <div>Bangalore</div>
            <div>Lisbon</div>
            <div>Malina</div>
            <div>Penang</div>
            <div>Bangalore</div>
          </ListItemOne>
        </ListViewBottom>
      </BottomView>
      </Mobile>
    </ViewFooter>
  );
};

export default FooterResponsive;
