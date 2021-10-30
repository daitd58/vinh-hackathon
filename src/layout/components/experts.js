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
  gap: 100px;
  padding-bottom: 150px;
  justify-content: space-between;
`;
const ContentLeftExperts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 120px;
  gap: 20px;
  width: 27%;
`;
const ContentRightExperts = styled.div`
  background: #5cc68f;
  width: 675px;
  height: 424px;
  position: relative;
`;
const ImageExperts = styled.img`
  position: absolute;
  bottom: 40px;
  right: 40px;
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
          <ImageExperts src={imgExperts} preview={false} alt={""} />
        </ContentRightExperts>
      </ExpertsContent>
    </Container>
  );
};

export default Experts;
