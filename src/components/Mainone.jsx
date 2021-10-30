import React from "react";
import styled from "styled-components";
import Rectangle from "../img/Rectangle.png";
import Retangles from "../img/Rectangleone.png";

const MainOne = styled.div`
     width: 100%;
`

const Title = styled. div`
     position: absolute;
     left: 272px;
     top: 850px;
     font-family: Alternate Gothic No1 D;
     font-style: normal;
     font-weight: 500;
     font-size: 50px;
     line-height: 90px;
     text-align: center;
     letter-spacing: -0.015em;
     text-transform: uppercase;
     color: #204370;

`
const Img = styled.div`
     position: absolute;
     width: 686px;
     height: 438px;
     left: 0px;
     top: 1108px;
`
const Imgt = styled.div`
     position: absolute;
     width: 686px;
     height: 438px;
     left: 41px;
     top: 1040px;
`;


const Mainone = () => {
     return(
          <MainOne>
               <Title>Join the Draper entrepreneur network</Title> 
               <Img>
                    <img style = {{width:'675px', height:'424px'}} src={`${Retangles}`} />
               </Img>

               <Imgt>
                    <img style = {{width:'686px', height:'438px'}} src={`${Rectangle}`} />
               </Imgt>
               
          </MainOne>
     );
}
export default Mainone;