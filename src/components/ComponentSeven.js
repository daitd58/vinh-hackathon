import React from "react";
import styled from "styled-components";
import talk from "../assets/img/talk.png";
import picnic from "../assets/img/picnic.png";
import yoga from "../assets/img/yoga.png";
import meet from "../assets/img/meet.png";
import activity from "../assets/img/activity.png";

const Wrapper = styled.div`
  width: 100%;
  heigh: 100%;
  padding: 115px 0 0 0;
  background: #ffff;
`;

const Container = styled.div`
  display: grid;
  position: static;
  grid-template-columns: auto auto auto;
  grid-gap: 0;
  padding: 0 110px;
  justify-items: center;
  flex: none;
  margin: 24px 0px;
`;

const List = styled.div`
  height: 610px;
  width: 390px;
  padding-bottom: 30px;
`;

const BoxImg = styled.div`
  width: 100%;
  height: auto;
`;

const ListItem = styled.div``;

const Date = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #204370;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
`;

const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #232327;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 20px 0px;
  font-family: "Pathway Gothic One", sans-serif;
`;

const Button = styled.button`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 35px;
  width: 134px;
  height: 40px;
  background: #ffcc00;
  border-radius: 25px;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  text-align: center;
  color: #232327;
  border: none;
`;
const ComponentSeven = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <List>
            <BoxImg>
              <img src={picnic} alt="" />
            </BoxImg>
            <ListItem>
              <Date>15 jan 2021</Date>
              <Description>How to Test Ideas with No Money or Time</Description>

              <Button>Register</Button>
            </ListItem>
          </List>

          <List>
            <BoxImg>
              <img src={talk} alt="" />
            </BoxImg>
            <ListItem>
              <Date>08 jun 2021</Date>
              <Description>
                CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
              </Description>

              <Button>Register</Button>
            </ListItem>
          </List>
          <List>
            <BoxImg>
              <img src={yoga} alt="" />
            </BoxImg>
            <ListItem>
              <Date>17 may 2021</Date>
              <Description>
                Yoga – first cass for beginer – feel free to sign up here.
              </Description>

              <Button>Register</Button>
            </ListItem>
          </List>
          <List>
            <BoxImg>
              <img src={meet} alt="" />
            </BoxImg>
            <ListItem>
              <Date>15 jan 2021</Date>
              <Description>How to Test Ideas with No Money or Time</Description>

              <Button>Register</Button>
            </ListItem>
          </List>
          <List>
            <BoxImg>
              <img src={activity} alt="" />
            </BoxImg>
            <ListItem>
              <Date>08 jun 2021</Date>
              <Description>
                CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
              </Description>

              <Button>Register</Button>
            </ListItem>
          </List>
        </Container>
      </Wrapper>
    </>
  );
};

export default ComponentSeven;
