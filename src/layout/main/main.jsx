import React from "react";
import Den from "../../asset/img/Den.png"
import styled from 'styled-components'
import bgr from "../../asset/img/Bgr1.png"

const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 20px;
`
const Container = styled.div`
 background: url(${bgr});
`
const Main_Co = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

const TextBig = styled.div`
color: #FFFFFF;
padding-bottom: 20px;
`
const TextSmall = styled.div`
color: #FFFFFF;
padding-bottom: 20px;
`
const Button = styled.div`
width: 156px;
height: 65px;
background: #204370;
border-radius: 40px;
font-size: 16px;
line-height: 26px;
font-weight: 700;
display: flex;
align-items: center;
justify-content: center;
color: #FFF;
border: 0;

`
const TextBt = styled.div`

`


const MainOne = () => {
    return (
        <Container>
        <Main_Co>
            <Logo>
                <img src={Den} />
            </Logo>
            <TextBig>
                GLOBAL NETWORK FOR MENTORSHIP AND SUPPORT
            </TextBig>
            <TextSmall>
            Get all the support and education you need to achieve full potential as an entrepreneur.
            </TextSmall>
            <Button>
                Join Den
            </Button>
        </Main_Co>
        </Container>
    )
}
export default MainOne