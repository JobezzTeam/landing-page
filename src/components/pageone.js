import React from 'react';
import styled from 'styled-components'
import Grid from 'styled-components-grid';

function PageOne() {
    return(
        <ContainerOne>
            <Background src={require('./Web1920–1.png')}/>
            <ContentContainer>
                <ContainerText>
                   <h1>Texte à définir. Et iPhone aussi</h1>
                   <h2>Découvrez grâce à JoBizz une nouvelle façon d’intégrer le monde du travail.</h2>
                   <ButtonStart><p>Commencer</p></ButtonStart>
                   <ButtonAbout><p>Test2</p></ButtonAbout>
                </ContainerText>
            </ContentContainer>
        </ContainerOne>
    )
}

const ContainerOne = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white !important;
`

const Background = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`

const ContentContainer = styled.div`
	width: auto;
	height: auto;
	z-index: 1;
	display: flex;
	align-items: center;
	margin-left: 14.5%;
`

const ContainerText = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
    justify-content: space-around;
    z-index: 2;
    text-align: left;
    margin-top: 15%;
    h1 {
        font-size: 2.8em;
        color: #ffffff;
        font-family: Muli;
        font-weight: 900;
    }
    h2 {
        font-size: 1.2em;
        color: #66667e;
        font-family: Muli;
        line-height: 1.88;
    }
`

const ButtonStart = styled.button`
    width: 10%;
    box-shadow: 0 0 20px 0 #822eff;
    background: linear-gradient(294deg, #bd11fa, #46c2ff);;
    border-radius: 10px;
    padding: 0.5%;
    color: white;
    margin-left: 1%;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;

    :active {
        background-color: white;
        color: black;
    }
`

const ButtonAbout = styled.button`
    width: 10%;
    box-shadow: 0 0 20px 0 #000;
    border-radius: 10px;
    padding: 0.5%
    color: white;
    margin-left: 1%;
    outline: none;
    font-family: Muli;
    font-weight: bold;
    font-size: 12.5px;

    :active {
        color: black;
        background-color: white;
    }
`



export{ PageOne }