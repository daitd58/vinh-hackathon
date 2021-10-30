import React from "react";
import title from "../assets/img/title.png";
import styled from "styled-components";
import party from "../assets/img/party.png";
import titlehead from "../assets/img/title1.png";
import titleDescription from "../assets/img/title2.png";
import background1 from "../assets/img/background1.png";
const Box = styled.div`
  width: 100%;
  height: 620px;
  text-align: center;
  padding: 90px 0 0 0;
`;

const BoxFrame = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 66px 0 0 0;
`;

const BoxImg = styled.div`
  width: 48%;
  height: auto;
  text-align: left;
`;

const BoxDescription = styled.div`
  width: 40%;
  text-align: left;
`;

const List = styled.ul`
  list-style-type: none;
`;
const Title = styled.div``;

const Img = styled.img`
  padding: 0 0 26 px 0;
`;

const Cirle = styled.span`
  background: #a6b4c6;
  width: 15px;
  height: 15px;
`;

const ImgSmall = styled.div`
  position: absolute;
  padding: 50px 0 0 0;
  left: 0;
`;

const TitleHead = styled.div`
  padding: 0 0 30px 0;
`;

const BoxImgBig = styled.div`
  position: absolute;
`;
const ComponentOne = () => {
  return (
    <Box>
      <Title>
        <img src={title} />
      </Title>
      <BoxFrame>
        <BoxImg>
          <ImgSmall>
            <img src={background1} />
          </ImgSmall>
          <BoxImgBig>
            <img src={party} />
          </BoxImgBig>
        </BoxImg>
        <BoxDescription>
          <TitleHead>
            <Img src={titlehead} />
          </TitleHead>
          <TitleHead>
            <Img src={titleDescription} />
          </TitleHead>
          <div>
            <List>
              <li>
                <Cirle></Cirle>Discover useful resources, software credits, and
                perks
              </li>
              <li>
                <Cirle></Cirle>Find the best events and training programs
              </li>
              <li>
                <Cirle></Cirle>Meet co-founders, advisors, and partners
              </li>
              <li>
                <Cirle></Cirle>Search and discover trending topics and insights
              </li>
            </List>
          </div>
        </BoxDescription>
      </BoxFrame>
    </Box>
  );
};

export default ComponentOne;
