import React from 'react';
import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid';

function PageFour() {
    return(
        <ContainerSection>
            <Background src={require('./PageTwo.png')}/>
            <Container>
                <Row style={{marginTop: '15%'}}>
                    <Button>Nos fonctionnalités</Button>
                    <Title>Postulez de façon simple. Rapide.</Title>
                    <Description>Lorem mes couilles</Description>
                    <ButtonStart><p>Commencer</p></ButtonStart>
                </Row>
            </Container>
        </ContainerSection>
    )
}

const ContainerSection = styled.div`
    width: 100%;
    height: 100vh;
`

const Background = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`

const ButtonStart = styled.button`
    width: 10%;
    box-shadow: 0 0 20px 0 #bd11fa;
    background: linear-gradient(294deg,#bd11fa,#46c2ff);
    border-radius: 10px;
    padding: 0.5%;
    color: white;
    margin-left: 1%;
    margin-top: 32%;
    position: absolute;
    outline: none;
    font-weight: bold;
    border-style: none;
    margin-left: 36%;
    font-size: 1em;

    :active {
        background-color: #bd11fa;
    }
`
// const MbCard = styled.div`
//     width: 275.5px;
//     height: 489px;
//     background-image: linear-gradient(339deg, #bd11fa 85%, #8880ff -11%);
// `

// const CbCard = styled.div`
//     width: 210px;
//     top: 20%;
//     right: -35%;
//     padding-left: 0%;
//     height: 188.5px;
//     position: absolute;
//     border-radius: 3.5px;
//     box-shadow: 0 0 20px 0 rgba(0,0,0,0.54);
//     background-color: #20202c;
// `

// const CbCard1 = styled.div`
//     position: absolute;
//     width: 224.5px;
//     top: 25%;
//     right: 50%;
//     height: 136.5px;
//     border-radius: 3.5px;
//     box-shadow: 0 0 20px 0 rgba(0,0,0,0.54);
//     background-color: #20202c;
// `

const Button = styled.button`
    background-color: #00ec98;
    width: 10%;
    color: black;
    font-family: 'Montserrat',sans-serif;
    font-size: 0.8em;
    position: absolute;
    font-weight: bold;
    text-align: center;
    padding: 0.5%;
    outline: none;
    border-style: none;
    margin-top: 18%;
    right: 38%;
`

const Title = styled.h1`
    font-size: 1.5em;
    position: absolute;
    font-weight: bold;
    text-align: left;
    color: #ffffff;
    margin-top: 22%;
    right: 25%;
`

const Description = styled.h1`
    font-size: 1em;
    position: absolute;
    font-weight: bold;
    text-align: left;
    color: #66667e;
    margin-top: 27%;
    right: 39.5%;
`

export {PageFour}