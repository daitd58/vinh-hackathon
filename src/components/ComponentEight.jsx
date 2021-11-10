import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #ffffff;
  padding: 100px 130px 0 130px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
  & button {
    height: 50px;
    max-width: max-content;
    padding: 0 35px;
    font-size: 14px;
    line-height: 26px;
    font-weight: 600;
    background: #ffffff;
    color: #2a2a2a;
    border: 1px solid #204370;
    box-sizing: border-box;
    border-radius: 25px;
  }
`;
const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  & p {
    width: 270px;
    font-style: normal;
    font-size: 14px;
    line-height: 22px;
    color: rgba(35, 35, 39, 0.9);
  }
`;
const TextContent = styled.div`
  width: 400px;
  font-weight: 700;
  font-size: 60px;
  line-height: 80px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  font-family: "Pathway Gothic One", sans-serif;
`;
const Footer = styled.div`
  background: #e9ecf1;
  width: 100%;
  height: 10px;
`;
function ComponentEight() {
  return (
    <Wrapper>
      <Header>
        <LeftHeader>
          <TextContent>upcoming events</TextContent>
          <p>
            Find the best offline and online events and training programs right
            here.
          </p>
        </LeftHeader>
        <button>See all upcoming events</button>
      </Header>
      <Footer></Footer>
    </Wrapper>
  );
}

export default ComponentEight;
