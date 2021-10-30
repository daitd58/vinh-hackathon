import React from "react";
import styled from 'styled-components'
import bgrblue from "../../asset/img/bgrblue.png"
import photo from "../../asset/img/photo2.png"


const Main3 = styled.div`

`

const TextLeft = styled.div`
padding-top: 302px;
padding-right: 100px;
width: 500px;
display: block;
justify-content: center;
justify-items: center;
text-align: left;

`

const TextHd = styled.div`
font-family: Alternate Gothic No1 D;
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 36px;
letter-spacing: -0.015em;
text-transform: uppercase;
color: #232327;

`

const TextBW = styled.div`
`

const TextLast = styled.div`
`

const PhotoRight = styled.div``

const BgrUpper = styled.div`
position: absolute;
width: 686px;
height: 438px;
left: 766px;
top: 1210px;
`

const Bgrbelow = styled.div`
position: absolute;
width: 734px;
height: 424px;
left: 827px;
top: 1250px;
background: #5CC68F;
`


const MainThree = () => {
    return (
        <Main3>
            <TextLeft>
                <TextHd>
                    Connect with a global network
                </TextHd>
                <TextBW>
                    DEN membership connects you with inspiring people and ideas to empower your entrepreneurial or fundraising journey.
                </TextBW>
                <TextLast>
                    <ul>
                        <li>Discover useful resources, software credits, and perks</li>
                        <li>Find the best events and training programs</li>
                        <li>Meet co-founders, advisors, and partners</li>
                        <li>Search and discover trending topics and insights</li>
                    </ul>
                </TextLast>
            </TextLeft>
            <PhotoRight>
                <Bgrbelow>
                </Bgrbelow>
                <BgrUpper>
                    <img src={photo} />
                </BgrUpper>
            </PhotoRight>
        </Main3>
    )
}

export default MainThree