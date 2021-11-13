import React from "react";
import styled from "styled-components";
import anhone from "../img/anhone.png";
import anhtwo from "../img/anhtwo.png";
import anhthree from "../img/anhthree.png";
import anhfour from "../img/anhfour.png";
import anhfive from "../img/anhfive.png";

const Mainone = styled.div`
  width: 100%;
  margin-top: 120px;
`;

const InforPicture = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 50px;
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-top: 40px;
`;

const Img = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
  }
`;

const Titlemonth = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin: 16px 0px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #204370;
`;

const Title = styled.div`
  font-family: "Pathway Gothic One", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;
  color: #232327;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  height: 72px;
  font-weight: bold;
  padding-bottom: 20px;
`;
const Linkbox = styled.div`
  width: 134px;
  height: 40px;
  background: #ffcc00;
  padding: 7px 35px;
  border-radius: 25px;
`;

const Link = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #232327;
  padding: 8px 40px;
`;
const Maineight = () => {
  return (
    <Mainone>
      <InforPicture>
        {/* the picture one */}
        <Person>
          <Img>
            <img src={`${anhone}`} />
          </Img>
          <Titlemonth>15 JAN 2021</Titlemonth>
          <Title>How to Test Ideas with No Money or Time</Title>
          <Linkbox>
            <Link>Register</Link>
          </Linkbox>
        </Person>

        {/* the picture two */}
        <Person>
          <Img>
            <img src={`${anhtwo}`} />
          </Img>
          <Titlemonth>08 jun 2021</Titlemonth>
          <Title>
            CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
          </Title>
          <Linkbox>
            <Link>Register</Link>
          </Linkbox>
        </Person>

        {/* the picture three */}
        <Person>
          <Img>
            <img src={`${anhthree}`} />
          </Img>
          <Titlemonth>17 may 2021</Titlemonth>
          <Title>
            Yoga – first cass for beginer – feel free to sign up here.
          </Title>
          <Linkbox>
            <Link>Register</Link>
          </Linkbox>
        </Person>

        {/* the picture four */}
        <Person>
          <Img>
            <img src={`${anhfour}`} />
          </Img>
          <Titlemonth>15 JAN 2021</Titlemonth>
          <Title>How to Test Ideas with No Money or Time</Title>
          <Linkbox>
            <Link>Register</Link>
          </Linkbox>
        </Person>

        {/* the picture five */}
        <Person>
          <Img>
            <img src={`${anhfive}`} />
          </Img>
          <Titlemonth>08 jun 2021</Titlemonth>
          <Title>
            CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
          </Title>
          <Linkbox>
            <Link>Register</Link>
          </Linkbox>
        </Person>
        <Person></Person>
        <Person></Person>
      </InforPicture>
    </Mainone>
  );
};
export default Maineight;
