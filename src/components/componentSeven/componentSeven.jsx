import React from "react";
import styled from "styled-components";
import Event1 from "../../assets/Event/Event1.png";
import Event2 from "../../assets/Event/Event2.png";
import Event3 from "../../assets/Event/Event3.png";
import Event4 from "../../assets/Event/Event4.png";
import Event5 from "../../assets/Event/Event5.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 140px 0 60px 0;
  @media screen and (max-width: 376px) {
    padding: 90px 0 60px 0;
  }
`;

const Heading = styled.div`
  padding: 0 130px 0 130px;
  @media screen and (max-width: 376px) {
    padding: 0 20px;
  }
`;

const HeadingContent = styled.div`
  border-bottom: 10px solid #e9ecf1;
  padding-bottom: 45px;
  display: flex;
  justify-content: space-between;

  & h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 50px;
    letter-spacing: -0.015em;
    text-transform: uppercase;
    color: #204370;
    text-align: center;
  }
  & p {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.8);
  }
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    padding-bottom: 24px;
    & h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 33.5px;
      line-height: 33px;
      letter-spacing: -0.015em;
      text-transform: uppercase;
      color: #204370;
      text-align: center;
    }
    p {
      margin-left: 20px;
      margin-top: 30px;
    }
  }
`;

const SeeAllButton = styled.button`
  font-family: "Oxygen";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  cursor: pointer;
  color: #2a2a2a;
  height: 60px;
  border-radius: 40px;
  border: 1px solid #2a2a2a;
  padding: 0 40px;
  transition: all 1s;
  :hover {
    filter: brightness(150%);
  }
  & a {
    text-decoration: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const EventsList = styled.div`
  padding-top: 66px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    padding-top: 28px;
  }
`;

const Event = styled.div`
  width: 30%;

  & h1 {
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 36px;
    line-height: 36px;
    letter-spacing: -0.015em;
    text-transform: uppercase;
    color: #232327;
    padding-top: 16px;
  }

  & h3 {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #204370;
    padding-top: 24px;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    & img {
      width: 100%;
      text-align: center;
    }
  }
`;

const RegisterButton = styled.button`
  margin-top: 20px;
  margin-bottom: 60px;
  padding: 0 35px;
  border: none;
  border-radius: 25px;
  background: #ffcc00;
  color: #232327;
  font-family: "Oxygen";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  height: 40px;
  cursor: pointer;
  transition: all 1s;
  :hover {
    filter: brightness(150%);
  }
`;

function ComponentSeven() {
  return (
    <>
      <Wrapper>
        <Heading>
          <HeadingContent>
            <h1> UPCOMING EVENTS</h1>
            <p>
              Find the best offline and online events <br />
              and training programs right here.
            </p>
            <SeeAllButton>
              <a>See all upcoming events</a>
            </SeeAllButton>
          </HeadingContent>
          <EventsList>
            <Event>
              <img src={Event1} alt="Event1" />
              <h3>15 jan 2021</h3>
              <h1>How to Test Ideas with No Money or Time</h1>
              <RegisterButton>Register</RegisterButton>
            </Event>
            <Event>
              <img src={Event2} alt="Event2" />
              <h3>08 jun 2021</h3>
              <h1>
                CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
              </h1>
              <RegisterButton>Register</RegisterButton>
            </Event>
            <Event>
              <img src={Event3} alt="Event3" />
              <h3>17 may 2021</h3>
              <h1>
                Yoga – first cass for beginer – feel free to sign up here.
              </h1>
              <RegisterButton>Register</RegisterButton>
            </Event>
            <Event>
              <img src={Event4} alt="Event4" />
              <h3>15 jan 2021</h3>
              <h1>How to Test Ideas with No Money or Time</h1>
              <RegisterButton>Register</RegisterButton>
            </Event>
            <Event>
              <img src={Event5} alt="Event5" />
              <h3>08 jun 2021</h3>
              <h1>
                CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
              </h1>
              <RegisterButton>Register</RegisterButton>
            </Event>
            <Event></Event>
          </EventsList>
        </Heading>
      </Wrapper>
    </>
  );
}

export default ComponentSeven;
