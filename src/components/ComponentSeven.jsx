import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Header = styled.div`
  background: #f4f6f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackGround = styled.div`
  width: 80%;
  height: 100%;
  background: #204370;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleOne = styled.div`
  margin-top: 28px;
  font-weight: 500;
  color: #ffffff;
  font-size: 40px;
  text-transform: uppercase;
  font-family: "Pathway Gothic One", sans-serif;
`;
const TitleTwo = styled.div`
  margin-bottom: 28px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 40px;
  font-family: "Pathway Gothic One", sans-serif;
`;
function ComponentSeven() {
  return (
    <Wrapper>
      <Header>
        <BackGround>
          <TitleOne>Draper Startup House is on a mission to enable </TitleOne>
        </BackGround>
      </Header>
      <Footer>
        <BackGround>
          <TitleTwo>ONE million entrepreneurs worldwide by 2023</TitleTwo>
        </BackGround>
      </Footer>
    </Wrapper>
  );
}

export default ComponentSeven;
