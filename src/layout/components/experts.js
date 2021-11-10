import React from "react";
import styled from "styled-components";
import imgExperts from "../../asset/img/imgExperts.png";

const Container = styled.div`
  background: #f4f6f8;
  width: 100%;
  height: 100%;
`;
const ContentExperts = styled.div`
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.7);
  padding-right: 220px;
  padding-bottom: 24px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width: 768px) {
    padding-right: 0;
  }
`;
const HeaderContent = styled.div`
  text-transform: uppercase;
  font-family: "Gothic A1", sans-serif;
  font-size: 20px;
  line-height: 20px;
  color: #232327;
  padding-bottom: 24px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: -0.015em;
  text-align: left;
  font-style: normal;
  letter-spacing: -0.015em;
`;

const Item = styled.li`
  font-size: 14px;
  line-height: 22px;
  color: rgba(35, 35, 39, 1);
  padding-bottom: 16px;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width: 768px) {
    padding-bottom: 16px;
  }
`;

const ExpertsContent = styled.div`
  display: flex;
  padding-bottom: 150px;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding-bottom: 60px;
  }
`;
const ContentLeftExperts = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 130px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 66px 20px 0;
  }
`;
const ContentRightExperts = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 40px;
  & img {
    width: 100%;
    display: inline-block;
    height: auto;
    box-shadow: 41px 54px 0 rgba(92, 198, 143, 1);
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 0 20px;
    & img {
      box-shadow: 20px 26px 0 rgba(92, 198, 143, 1);
    }
  }
`;

const Experts = () => {
  return (
    <Container>
      <ExpertsContent>
        <ContentLeftExperts>
          <HeaderContent>GET INSPIRed By PEERS AND EXPERTS </HeaderContent>
          <ContentExperts>
            Becoming a successful entrepreneur means surrounding yourself with
            an inspiring ecosystem like DEN.
          </ContentExperts>
          <Item>Get constructive feedback from industry experts</Item>
          <Item>Read startup stories, successes, and failures</Item>
          <Item>Get help on investor relations topics like term sheets</Item>
          <Item>Find best practices and professional templates</Item>
        </ContentLeftExperts>
        <ContentRightExperts>
          <img src={imgExperts} preview={false} alt={""} />
        </ContentRightExperts>
      </ExpertsContent>
    </Container>
  );
};

export default Experts;
