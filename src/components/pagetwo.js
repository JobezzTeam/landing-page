import React from 'react';
import styled from 'styled-components'

function PageTwo() {
    return(
        <ContainerOne>
            <Background src={require('./Fleche.png')}/>
            <ImageIphone src={require('./ImageIphone.png')}></ImageIphone>
            <ContainerText>
                <h1>Qu’est ce que JoBizz ?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque eaque eius esse et harum inventore ipsam  nam necessitatibus nemo pariatur provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque eaque eius esse et harum inventore ipsam  nam necessitatibus nemo pariatur provident.</p>
            </ContainerText>
        </ContainerOne>
    )
}

const ContainerOne = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
`

const Background = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`

const ImageIphone = styled.img`
    position: absolute;
    width: 40%;
    margin-top: 10%;
    left: 10%;
`

const ContainerText = styled.div`
    position: absolute;
    margin-top: 25%;
    right: 0;
    right: 5%;
    margin-left: 60%;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    h1 {
        color: white;
    }
    p {
        color: #66667e;
    }
`

export {PageTwo}