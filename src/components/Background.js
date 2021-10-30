import React from 'react'
import styled from 'styled-components'
import background from '../assets/background.png'
import den from '../assets/den.png'

function Background() {
    const BackgroundPage = styled.div`
        height: 160px;
        margin-bottom: 10px;
    `;
    const ImageBackground = styled.img`
        width: 100%;
        position: relative;
    `;
    const TitleBackground = styled.div`
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 190px;
        width: 100%;
        flex-direction: column;
        `;
    const Img = styled.img`
        width: 15%;
        height: 73px;
        display: flex;
        `;

    const Button = styled.div` 
        height: 50px;
        font-size: 16px;
        font-weight: 700;
        line-height: 26px;
        background-color: #204370;
        color: #ffffff;
        display: inline-block;
        padding: 0px 32px 0px 32px;
        border-radius: 40px;
        padding-top: 15px;
    `
    const Title = styled.h4`
        width: 60%;
        font-family: 'Alternate Gothic No1 D';
        font-size: 56px;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
        `
    const TitleNews = styled.h5`
        width: 60%;
        font-family: 'Alternate Gothic No1 D';
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
        `
    return (
        <div style={{marginBottom: '200px'}}>
        <BackgroundPage>
            <ImageBackground src={background}/>
        <TitleBackground style={{flexDirection: 'column'}}>
                <div style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <Img src={den} style={{ paddingLeft: '40%'}}/>
                    <Title style={{ paddingLeft: '20%'}}>
                    <h4>
                        GLOBAL NETWORK FOR MENTORSHIP AND SUPPORT
                    </h4>
                    </Title>
                    <TitleNews>
                    <h5 style={{ paddingLeft: '60%'}}>
                        Get all the support and education you need to achieve full potential as an entrepreneur.
                    </h5>
                    </TitleNews>
                    <Button style={{ marginLeft: '43%'}}>
                        Join Den
                    </Button>
                </div>
        </TitleBackground>
        </BackgroundPage>
        </div>
    )
}

export default Background
