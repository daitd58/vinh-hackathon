import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo-dark.png";
const Head = styled.div`
  background: #243b59;
  display: flex;
  justify-content: space-between;
  height: 90px;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const ListItem = styled.li`
  float: left;
  border-left: 2px solid #31435b;
  & a {
    color: white;
    padding: 0 30px;
    text-decoration: none;
  }
`;

const BoxImg = styled.div`
  width: 15%;
  text-align: center;
  padding: 15px 0;
`;

const BoxList = styled.div`
  width: 65%;
  padding: 30px 0;
  font-size: 1.3rem;
`;

const BoxButton = styled.div`
  width: 15%;
  margin: 22px 0 0 0;
`;

const ButtonHeader = styled.button`
  font-size: 1.3rem;
  border-radius: 20px;
  height: 67%;
  width: 81%;
`;
const Header = () => {
  return (
    <Head>
      <BoxImg>
        <img src={logo} />
      </BoxImg>
      <BoxList>
        <List>
          <ListItem>
            <a class="active" href="#home">
              CITIES
            </a>
          </ListItem>
          <ListItem>
            <a href="#news">VENTURES</a>
          </ListItem>
          <ListItem>
            <a href="#contact">ACADEMY</a>
          </ListItem>
          <ListItem>
            <a href="#about">SERVICES</a>
          </ListItem>
          <ListItem>
            <a href="#about">ACCELERATOR</a>
          </ListItem>
          <ListItem>
            <a href="#about">ABOUT US</a>
          </ListItem>
        </List>
      </BoxList>
      <BoxButton>
        <ButtonHeader>Join our community</ButtonHeader>
      </BoxButton>
    </Head>
  );
};

export default Header;
