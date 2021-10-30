import styled from "styled-components";
import discussion from "../assets/img/discussion.png";
import background2 from "../assets/img/background2.png";
import title3 from "../assets/img/title3.png";
import titleDescription from "../assets/img/description1.png";

const Box = styled.div`
  width: 100%;
  height: 620px;
  text-align: center;
  padding: 90px 0 0 0;
  display: flex;
`;

const BoxFrame = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BoxImg = styled.div`
  width: 48%;
  height: auto;
  text-align: left;
`;

const BoxDescription = styled.div`
  width: 40%;
  text-align: left;
  padding: 0 0 0 250px;
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
  right: 0;
`;

const TitleHead = styled.div`
  padding: 0 0 30px 0;
`;

const BoxImgBig = styled.div`
  position: absolute;
  right: 50px;
`;

const ComponentTwo = () => {
  return (
    <div>
      <Box>
        <BoxDescription>
          <TitleHead>
            <Img src={title3} />
          </TitleHead>
          <TitleHead>
            <Img src={titleDescription} />
          </TitleHead>
          <div>
            <List>
              <li>
                <Cirle></Cirle>Get constructive feedback from industry experts
              </li>
              <li>
                <Cirle></Cirle>Read startup stories, successes, and failures
              </li>
              <li>
                <Cirle></Cirle>Get help on investor relations topics like term
                sheets
              </li>
              <li>
                <Cirle></Cirle>Find best practices and professional templates
              </li>
            </List>
          </div>
        </BoxDescription>
        <BoxFrame>
          <BoxImg>
            <ImgSmall>
              <img src={background2} />
            </ImgSmall>
            <BoxImgBig>
              <img src={discussion} />
            </BoxImgBig>
          </BoxImg>
        </BoxFrame>
      </Box>
    </div>
  );
};

export default ComponentTwo;
