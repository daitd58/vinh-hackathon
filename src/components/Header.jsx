import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import anhnenone from "../img/anhnen.png";
import anhtwo from '../img/Title.png';

const Headercom = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${anhnenone});
  background-color: black;
`;

const Headerlogo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 58px;
  background-color: rgb(36,59,89);
`;

const List  = styled.div`
  display: flex;
  align-iteam: center;
  padding: 10px;

`
const Tittlep = styled.div`
  font-size: 17px;
  color: rgb(128,140,154);
  padding: 10px;
  border-height: 3px;
`

const LinkJoin = styled.div`     
    text-align: center;
`;

const Title = styled.div`

  color: black;
  background: #FFF;
  padding: 10px;
  font-size: 15px;
  text-align: center;
  border-radius: 25px;
  margin-top: 8px;
`;


const TexTitle  = styled.div`
  position: absolute;
  width: 450px;
  height: 112px;
  left: 525px;
  top: 291px;
  font-family: 'Alternate Gothic No1 D';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #FFFFFF;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
`;

const Textpage = styled.div`
  position: absolute;
  width: 346px;
  height: 52px;
  left: 578px;
  top: 427px;
  font-family: Oxygen;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;
`

const Lineltext = styled.div`
  position: absolute;
  left: 700px;
  top: 527px;
  font-family: Oxygen;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;
  background-color:#204370;
  width: 156px;
  height:50px;
  border-radius: 20px;
`;



const Header = () => {
  return (
    <div>
      <Headercom>
        <Headerlogo>
          <img  style = {{width: '210px', height: '40px', paddingTop: '10px'}}src={`${logo}`}/>
          <List>
            <Tittlep>CITIES</Tittlep>

            <Tittlep>VENTURES</Tittlep>

            <Tittlep>ACEDAMY</Tittlep>

            <Tittlep>SERVIES</Tittlep>

            <Tittlep>ACELERATOR</Tittlep>

            <Tittlep>ABOUT US</Tittlep>
          </List>

          <LinkJoin>
              <Title >join our community</Title>
          </LinkJoin>
        </Headerlogo>

            <img  style = {{width: '183px', height: '73px',left: '660px',top: '190px', position: 'absolute'}}src={`${anhtwo}`}/>
            <TexTitle>GLOBAL NETWORK FOR MENTORSHIP AND SUPPORT</TexTitle>
            <Textpage>Get all the support and education you need to achieve full potential as an entrepreneur.</Textpage>
            <Lineltext>
                  Join DEN
            </Lineltext>
        
      </Headercom>
    </div>
  );
};
export default Header;
