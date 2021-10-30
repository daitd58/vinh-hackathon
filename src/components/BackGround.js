import React from "react";
import styled from "styled-components";
import background from "../assets/img/background.png";
import word from "../assets/img/word.png";
import slogan from "../assets/img/slogan.png";
import textslogan from "../assets/img/text-slogan.png";

const Box = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 700px;
  text-align: center;
`;

const Row = styled.div`
  flex-direction: row;
  padding: 190px 0;
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

const Img = styled.img`
  padding: 0px 0 25px 0px;
`;
const Background = () => {
  return (
    <Box>
      <Row>
        <div>
          <Img src={word} />
        </div>
        <div>
          <Img src={slogan} />
        </div>
        <div>
          <Img src={textslogan} />
        </div>

        <div>
          <Button>Join Den</Button>
        </div>
      </Row>
    </Box>
  );
};

export default Background;
