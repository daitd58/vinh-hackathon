import React from "react";
import styled from "styled-components";
import upcommingone from "../../asset/img/upcommingone.png";
import upcommingtwo from "../../asset/img/upcommingtwo.png";
import upcommingthree from "../../asset/img/upcommingthree.png";
import upcommingfour from "../../asset/img/upcommingfour.png";
import upcommingfive from "../../asset/img/upcommingfive.png";

const Container = styled.div`
  padding: 250px 130px 0 130px;
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 45px;
  border-bottom: 10px solid rgba(233, 236, 241, 1);
  gap: 30px;
`;
const ViewContent = styled.div`
  padding-top: 65px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const TitleHeader = styled.div`
  text-transform: uppercase;
  color: #204370;
  font-family: "Didact Gothic", sans-serif;
  font-size: 50px;
  line-height: 60px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -0.015em;
  width: 35%;
`;
const TitleContent = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.8);
  width: 28%;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
`;
const ListItem = styled.div`
  width: 30%;
`;
const TitleDate = styled.div`
  font-family: "Oxygen", sans-serif;
  color: rgba(32, 67, 112, 1);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.2em;
  text-align: left;
  padding: 24px 0 16px;
`;
const TitleList = styled.div`
  font-family: "Didact Gothic", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: -0.015em;
  text-align: left;
  width: 100%;
  padding-bottom: 20px;
  text-transform: uppercase;
`;
const BtnTitle = styled.div`
  display: flex;
  padding-bottom: 55px;
`;
const BtnClick = styled.button`
  border-radius: 25px;
  padding: 7px 35px;
  background: rgba(255, 204, 0, 1);
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 1);
  font-weight: 700;
  border: 0;
  :hover {
    cursor: pointer;
  }
`;
const BtnClickSeeAll = styled.button`
  border-radius: 25px;
  padding: 7px 35px;
  background: #fff;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 1);
  font-weight: 700;
  border: 2px solid #e5e5e5;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  letter-spacing: 0em;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

const Upcoming = () => {
  return (
    <Container>
      <HeaderContent>
        <TitleHeader>upcoming events</TitleHeader>
        <TitleContent>
          Find the best offline and online events and training programs right
          here.
        </TitleContent>
        <BtnTitle>
          <BtnClickSeeAll>See all upcoming events</BtnClickSeeAll>
        </BtnTitle>
      </HeaderContent>
      <ViewContent>
        <ListItem>
          <img src={upcommingone} alt={""} />
          <TitleDate>15 jan 2021</TitleDate>
          <TitleList>How to test ideas with no money or time</TitleList>
          <BtnTitle>
            <BtnClick>Register</BtnClick>
          </BtnTitle>
        </ListItem>
        <ListItem>
          <img src={upcommingtwo} alt={""} />
          <TitleDate>08 jun 2021</TitleDate>
          <TitleList>
            Cleantech startups from finland and estonia to enter malaysia
          </TitleList>
          <BtnTitle>
            <BtnClick>Register</BtnClick>
          </BtnTitle>
        </ListItem>
        <ListItem>
          <img src={upcommingthree} alt={""} />
          <TitleDate>17 may 2021</TitleDate>
          <TitleList>
            Yoga – first cass for beginer – feel free to sign up here
          </TitleList>
          <BtnTitle>
            <BtnClick>Register</BtnClick>
          </BtnTitle>
        </ListItem>
        <ListItem>
          <img src={upcommingfour} alt={""} />
          <TitleDate>15 jan 2021</TitleDate>
          <TitleList>How to test ideas with no money or time</TitleList>
          <BtnTitle>
            <BtnClick>Register</BtnClick>
          </BtnTitle>
        </ListItem>
        <ListItem>
          <img src={upcommingfive} alt={""} />
          <TitleDate>08 jun 2021</TitleDate>
          <TitleList>
            Cleantech startups from finland and estonia to enter malaysia
          </TitleList>
          <BtnTitle>
            <BtnClick>Register</BtnClick>
          </BtnTitle>
        </ListItem>
        <ListItem />
      </ViewContent>
    </Container>
  );
};

export default Upcoming;
