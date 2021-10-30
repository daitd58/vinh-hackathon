import styled from "styled-components";
import laugh from "../assets/img/laugh.png";
import yellow from "../assets/img/yellow.png";
import entre from "../assets/img/entre.png";
import description2 from "../assets/img/description2.png";

const Box = styled.div`
  width: 100%;
  height: 620px;
  text-align: center;
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
`;

const Img = styled.img`
  padding: 0 0 26 px 0;
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

const Button = styled.button`
  width: 9%;
  height: 48px;
  border-radius: 32px;
  outline: none;
  background: #204370;
  color: white;
  font-size: 1.3rem;
`;
const ComponentThree = () => {
  return (
    <div>
      <Box>
        <BoxFrame>
          <BoxImg>
            <ImgSmall>
              <img src={yellow} />
            </ImgSmall>
            <BoxImgBig>
              <img src={laugh} />
            </BoxImgBig>
          </BoxImg>
          <BoxDescription>
            <TitleHead>
              <Img src={entre} />
            </TitleHead>
            <TitleHead>
              <Img src={description2} />
            </TitleHead>
          </BoxDescription>
        </BoxFrame>
      </Box>
      <div style={{ marginTop: "-56px" }}>
        <Button>Join Den</Button>
      </div>
    </div>
  );
};

export default ComponentThree;
