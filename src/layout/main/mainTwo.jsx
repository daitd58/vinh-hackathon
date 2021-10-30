import React from "react";
import styled from 'styled-components'
import photo from "../../asset/img/photo2.png"

const Main2 = styled.div`
`
const Header_M2 = styled.div``

const Text_M2 = styled.div`
font-family: Alternate Gothic No1 D;
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 90px;
text-align: center;
letter-spacing: -0.015em;
text-transform: uppercase;
color: #204370;
`

const Container1 = styled.div`
`

const PhotoLeft = styled.div`
`

const Bgrbelow = styled.div`
position: absolute;
width: 675px;
height: 424px;
left: 0px;
top: 700px;
background: #4C8FCC;
`

const BgrUpper = styled.div`
position: absolute;
width: 686px;
height: 438px;
left: 41px;
top: 660px;

`

const TextRight = styled.div`
padding-left: 60%;
padding-top: 77px;
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
font-size: 20px;
line-height: 36px;
letter-spacing: -0.015em;
text-transform: uppercase;
color: #232327;`

const TextBW = styled.div`
font-family: Oxygen;
font-style: normal;
font-weight: normal;
font-size: 21px;
line-height: 26px;
color: rgba(35, 35, 39, 0.7);
flex: none;
order: 1;
flex-grow: 0;
margin: 24px 0px;
`
const TextLast = styled.div``



const MainTwo = () => {
    return (
        <Main2>
            <Header_M2>
                <Text_M2>
                    Join the Draper entrepreneur network
                </Text_M2>
            </Header_M2>
            <Container1>
                <PhotoLeft>
                    <Bgrbelow>
                    </Bgrbelow>
                    <BgrUpper>
                        <img src={photo} />
                    </BgrUpper>
                </PhotoLeft>
                <TextRight>
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
                </TextRight>
            </Container1>

        </Main2>
    )
}

export default MainTwo