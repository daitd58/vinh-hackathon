import React from "react";
import styled from "styled-components";
import imgExperts from "../../asset/img/imgExperts.png";

const Container = styled.div`
  background: #f4f6f8;
  width: 100%;
  height: 100%;
`;
const HeaderContent = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: #232327;
`;

const Item = styled.li`
  font-size: 14px;
  line-height: 22px;
  color: #232327;
`;

const ExpertsContent = styled.div`
  display: flex;
  padding-bottom: 150px;
  width: 100%;
`;
const ContentLeftExperts = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 120px;
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
`;
const ContentExperts = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.7);
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
