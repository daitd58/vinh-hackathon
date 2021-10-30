import React from "react";
import styled from 'styled-components'
import logo from '../assets/logo.png'

const HeaderPage = styled.div`
  background-color: #0e2c51;
  display: flex;
  height: 90px;
  justify-content: space-between;
`;

const Button = styled.div`
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
  display: inline-block;
  padding: 0px 32px 0px 32px;
`
const LeftButton = styled.div`
  width: 218px;
  height: 40px;
  border-radius: 25px;
  background-color: #ffffff;
  align-items: center;  
  display: inline-block;
  text-align: center;
  border: solid 1px #204370;
  font-weight: 700;
  justify-content: center;
  padding-top: 10px;
`
const Logo = styled.div`
  width: 175px;
  height: 57px;
  padding: 16px 0px 18px 40px;
`

function Header() {

  return (
    <HeaderPage>
      <div style={{ width: "15%", justifyContent: 'center', alignItems: 'center' }}>
        <Logo >
          <img src={logo} />
        </Logo>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',width: '50%' }}>
        <Button>Cities</Button>
        <Button>Ventures</Button>
        <Button>Academy</Button>
        <Button>Services</Button>
        <Button>Accelerator</Button>
        <Button>About us</Button>
      </div>
      <div style={{ width: "10%" }}></div>
      <div style={{ width: "15%", justifyContent: 'center', alignItems: 'center', margin: '19px 30px 21px 0px'}}>
        <LeftButton>Join our community</LeftButton>
      </div>
    </HeaderPage>
  );
}

export default Header;
