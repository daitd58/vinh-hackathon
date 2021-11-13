import React from "react";
import styled from "styled-components";
import vector from "../img/Vector.png";
import vectorone from "../img/Vectorone.png";
import phay from "../img/phay.png";
import personone from "../img/personone.png";
import img from "../img/kkkk.png";
import imge from "../img/hhhh.png";
import anhtr from "../img/anhtr.png";
import directory from "../img/derectoro.png";
import director from "../img/drector.png";

const MainOne = styled.div`
  width: 100%;
  padding-bottom: 100px;
  background: #f4f6f8;
`;
const MainDouple = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 200px; ;
`;
const WrapperOne = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
`;
const Title = styled.div`
  font-family: "Pathway Gothic One", sans-serif;
  font-style: normal;
  font-weight: Bold;
  font-size: 90px;
  line-height: 90px;
  text-align: center;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  padding-top: 40px;
  width: 552px;
  height: 180px;
  @media screen and (max-width: 376px) {
    font-weight: 500;
    font-size: 62px;
    line-height: 62px;
    width: 334px;
    letter-spacing: -0.015em;
  }
`;
const Directory = styled.div`
  display: flex;
  width: 65px;
  height: 65px;
  justify-content: space-around;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  margin-top: 100px;
  margin-right: 50px;
`;

const Imges = styled.div`
  width: 60px;
  height: 60px;
  @media screen and (max-width: 376px) {
    display: none;
  }
`;

const WrapperTwo = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: space-around;
  padding-top: 80px;
`;

const Farmifor = styled.div`
  width: 390px;
  height: 390px;
  background-color: #ffffff;
`;

const TitleInfor = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Imge = styled.div`
  margin-top: -51px;
`;

const TitleName = styled.div``;
const Imgpage = styled.div`
  margin-top: -14px;
`;

const Tittleone = styled.div`
  font-size: 30px;
  padding-top: 20px;
  & p {
    padding-top: 00px;
  }
`;

const Text = styled.div`
  font-family: "Oxygen";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: rgba(35, 35, 39, 0.9);
  width: 328px;
  height: 171px;
  padding: 10px 20px;
`;

const Mainsix = () => {
  return (
    <MainOne>
      <MainDouple>
        <WrapperOne>
          <Title>What PEOPLE ARE SAYING ABOUT DEN</Title>
          <Directory>
            <Imges>
              <img
                src={`${director}`}
                style={{
                  width: "20px",
                  padding: "20px",
                  background: "rgba(23, 41, 64, 0.8)",
                }}
              />
            </Imges>
            <Imges>
              <img
                src={`${directory}`}
                style={{
                  width: "20px",
                  padding: "20px",
                  background: "red",
                  marginLeft: "5px",
                  background: "rgba(23, 41, 64, 0.8)",
                }}
              />
            </Imges>
          </Directory>
        </WrapperOne>

        <WrapperTwo>
          <Farmifor>
            <TitleInfor>
              <Imge>
                <img
                  src={`${anhtr}`}
                  style={{ width: "102px", height: "136px" }}
                />
              </Imge>
              <TitleName>
                <Imgpage>
                  <img src={`${phay}`} />
                  <Tittleone>Simon JD</Tittleone>
                  <p>Co-Founder and CEO, Travelio</p>
                </Imgpage>
              </TitleName>
            </TitleInfor>
            <Text>
              Ornare massa eget egestas purus viverrasan in nisl. Sit amet
              luctus venenatis lectus magna fring ut venenatis tellus in metus
              vulputate eu scelerisque felis. Felis done. Felis donec et odio
              pellentesque di scelerisque felis. Ornare massa eget egest.
            </Text>
            <a
              style={{
                padding: "0px 20px",
                color: "#204370",
                fontWeight: "bold",
              }}
            >
              Learn more
            </a>
          </Farmifor>

          <Farmifor>
            <TitleInfor>
              <Imge>
                <img
                  src={`${imge}`}
                  style={{ width: "102px", height: "136px" }}
                />
              </Imge>
              <TitleName>
                <Imgpage>
                  <img src={`${phay}`} />
                  <Tittleone>Simon JD</Tittleone>
                  <p>Co-Founder and CEO, Travelio</p>
                </Imgpage>
              </TitleName>
            </TitleInfor>
            <Text>
              Ornare massa eget egestas purus viverrasan in nisl. Sit amet
              luctus venenatis lectus magna fring ut venenatis tellus in metus
              vulputate eu scelerisque felis. Felis done. Felis donec et odio
              pellentesque di scelerisque felis. Ornare massa eget egest.
            </Text>
            <a
              style={{
                padding: "0px 20px",
                color: "#204370",
                fontWeight: "bold",
              }}
            >
              Learn more
            </a>
          </Farmifor>

          {/* ===============================*/}
          <Farmifor>
            <TitleInfor>
              <Imge>
                <img
                  src={`${personone}`}
                  style={{ width: "102px", height: "136px" }}
                />
              </Imge>
              <TitleName>
                <Imgpage>
                  <img src={`${phay}`} />
                  <Tittleone>Simon JD</Tittleone>
                  <p>Co-Founder and CEO, Travelio</p>
                </Imgpage>
              </TitleName>
            </TitleInfor>
            <Text>
              Ornare massa eget egestas purus viverrasan in nisl. Sit amet
              luctus venenatis lectus magna fring ut venenatis tellus in metus
              vulputate eu scelerisque felis. Felis done. Felis donec et odio
              pellentesque di scelerisque felis. Ornare massa eget egest.
            </Text>
            <a
              style={{
                padding: "0px 20px",
                color: "#204370",
                fontWeight: "bold",
              }}
            >
              Learn more
            </a>
          </Farmifor>
        </WrapperTwo>
      </MainDouple>
    </MainOne>
  );
};
export default Mainsix;
