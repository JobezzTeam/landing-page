import React from 'react';
import styled from 'styled-components'

function PageOne() {
    return(
        <ContainerOne>
            <Background src={require('./Web1920–1.png')}/>
            <ContentContainer>
                <ContainerText>
                   <h1>Trouvez des emplois <br></br>facilement et proche de chez vous.</h1>
                   <h2>Découvrez grâce à JoBizz une nouvelle façon d’intégrer le monde du travail.</h2>
                </ContainerText>
            </ContentContainer>
            <ContainerText1>
                <ButtonStart><p>Commencer</p></ButtonStart>
                <ButtonAbout><p>En savoir plus</p></ButtonAbout>
            </ContainerText1>
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
	display: inline-flex;
	flex-direction: column;
    justify-content: space-around;
    z-index: 2;
    text-align: left;
    margin-top: 15%;
    h1 {
        font-size: 2.8em;
        color: #ffffff;
        // font-family: Muli;
        font-weight: 900;
    }
    h2 {
        font-size: 1.2em;
        color: #66667e;
        // font-family: Muli;
        line-height: 1.88;
    }
`

const ContainerText1 = styled.div`
	width: 100%;
	height: auto;
	display: inline-flex;
	flex-direction: column;
    justify-content: space-around;
    z-index: 2;
    text-align: left;
    margin-top: 2%;
`

const ButtonStart = styled.button`
    width: 10%;
    box-shadow: 0 0 20px 0 #bd11fa;
    background: linear-gradient(294deg, #bd11fa, #46c2ff);;
    border-radius: 10px;
    padding: 0.5%;
    color: white;
    margin-left: 1%;
    outline: none;
    // font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    position: absolute;
    border-style: none;
    margin-left: 15%;
    font-size: 1em;

    :active {
        background-color: #bd11fa;
    }
`

const ButtonAbout = styled.button`
    width: 10%;
    background: none;
    border-radius: 10px;
    padding: 0.5%;
    color: white;
    margin-left: 1%;
    outline: none;
    // font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    position: absolute;
    border-color: white;
    font-size: 1em;
    margin-left: 28%;

    :active {
        color: black;
        background-color: white;
    }
`

export{ PageOne }