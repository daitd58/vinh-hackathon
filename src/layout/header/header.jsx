import React from "react";
import logo from "../../asset/img/logo-dark.png"
import styled from 'styled-components'


const Container = styled.div`
width: 100%;
`;
const Select = styled.div`
display: flex;
background: #0E2C51;
padding: 20px;
align-items: center;
justify-content: space-around;
`;
const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const Select_Header = styled.div`
display: flex;
`;
const MenuItem = styled.div`
border-left: 1px solid #FFFFFF;
color: #FFF;
padding: 0 20px;
font-size: 12px;
line-height: 22px;
text-align: center;
`;
const Search = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 35px;

width: 218px;
height: 50px;
left: calc(50% - 218px/2);
top: calc(50% - 50px/2);

/* Primary/White */

background: #FFFFFF;
/* Primary/ Blue */

border: 1px solid #204370;
box-sizing: border-box;
border-radius: 25px;
`;
const Text_Search = styled.div`
position: static;
width: 148px;
height: 26px;
left: calc(50% - 148px/2);
top: calc(50% - 26px/2);

/* Body/Body 16 bold */

font-family: Oxygen;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 26px;
/* identical to box height, or 162% */

display: flex;
align-items: center;
text-align: center;

/* Primary/Black/90 */

color: #2A2A2A;

`;

function Header() {
    return (
        <Container>
            <Select>
                <Logo>
                    <img src={logo}  alt={"logo"} />
                    <Select_Header>
                        <MenuItem >CITIES</MenuItem>
                        <MenuItem >VENTURES</MenuItem>
                        <MenuItem >ACADEMY</MenuItem>
                        <MenuItem >SERVICES</MenuItem>
                        <MenuItem >ACCELERATOR</MenuItem>
                        <MenuItem >ABOUT US</MenuItem>
                    </Select_Header>
                </Logo>

                <Search>
                    <Text_Search>Join our community</Text_Search>
                </Search>
            </Select>
        </Container>
    )
}

export default Header