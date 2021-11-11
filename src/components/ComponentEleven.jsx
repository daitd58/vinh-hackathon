import React from "react";
import styled from "styled-components";
import logo from "../img/logoD.png";

const Wrapper = styled.div`
  background: #f4f6f8;
  padding: 80px 30px 50px 30px;
`;
const Block = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const LeftBlock = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div``;
const ContentLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 30px;
  @media screen and (max-width: 769px) {
    padding-left: 20px;
  }
`;
const TextDescriptionLeftBlock = styled.div`
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  padding-right: 120px;
  padding-bottom: 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  @media screen and (max-width: 1280px) {
    padding-right: 90px;
  }
  @media screen and (max-width: 1024px) {
    padding-right: 45px;
    font-size: 14px;
  }
  @media screen and (max-width: 769px) {
    padding-right: 40px;
    font-size: 12px;
  }
`;
const TextTitleLeftBlock = styled.div`
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  padding-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 769px) {
    font-size: 12px;
  }
`;
const TextFooterLeftBlock = styled.div`
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #4c8fcc;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 769px) {
    font-size: 12px;
  }
`;
const Hr = styled.div`
  background: rgba(35, 35, 39, 0.1);
  width: 40px;
  height: 3px;
  border-radius: 10px;
`;
const MainTextLeftBlock = styled.div`
  padding-top: 15px;
  & p {
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    padding-right: 175px;
    padding-bottom: 15px;
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
    margin: 0;
  }
  @media screen and (max-width: 1280px) {
    & p {
      padding-right: 110px;
    }
  }
  @media screen and (max-width: 1024px) {
    & p {
      padding-right: 60px;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 769px) {
    & p {
      padding-right: 35px;
      font-size: 12px;
    }
  }
`;
const RightBlock = styled.div`
  width: 60%;
  display: flex;
`;
const HeaderRightBlock = styled.div``;
const TextTitleHeaderRightBlock = styled.div`
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
  font-style: normal;
  font-family: "Pathway Gothic One", sans-serif;
`;
const FooterRightBlock = styled.div``;
function ComponentEleven() {
  return (
    <Wrapper>
      <Block>
        <LeftBlock>
          <Logo>
            <img src={logo} alt={""} />
          </Logo>
          <ContentLeftBlock>
            <TextDescriptionLeftBlock>
              We connect, inspire, and empower the world’s entrepreneurs.
            </TextDescriptionLeftBlock>
            <Hr></Hr>
            <MainTextLeftBlock>
              <TextTitleLeftBlock>USA Headquarters</TextTitleLeftBlock>
              <p>612 East 6th Street Austin, TX 78701 USA</p>
              <TextFooterLeftBlock>
                austin@draperstartuphouse.com
              </TextFooterLeftBlock>
            </MainTextLeftBlock>
            <MainTextLeftBlock>
              <TextTitleLeftBlock>
                International Headquarters
              </TextTitleLeftBlock>
              <p>39 Ann Siang Road Singapore 069716</p>
              <TextFooterLeftBlock>
                hello@draperstartuphouse.com
              </TextFooterLeftBlock>
            </MainTextLeftBlock>
          </ContentLeftBlock>
        </LeftBlock>
        <RightBlock>
          <HeaderRightBlock>
            <TextTitleHeaderRightBlock>What We Do</TextTitleHeaderRightBlock>
            <div>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div></div>
            </div>
          </HeaderRightBlock>
          <FooterRightBlock></FooterRightBlock>
        </RightBlock>
      </Block>
    </Wrapper>
  );
}

export default ComponentEleven;
