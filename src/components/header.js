import React from 'react';
import styled from 'styled-components';
// import ActiveLink from './ActiveLink'

function Header({buttonStart = true}) {
    return(
        <ContainHeader buttonDl={buttonStart}>
            <LogoJobezzContainer>
                <a href='/'>
                    <LogoJobezz src={require('./Jobizz-Logo_Text-Ai.png')}>
                    </LogoJobezz>
                </a>
            </LogoJobezzContainer>
            <HeaderLink>
                <Nav>
                    <Li href='/home'><a>Home</a></Li>
                    <Li><a>About</a></Li>
                    <Li><a>Fonctionnalités</a></Li>
                    <Li><a>Télécharger</a></Li>
                    {buttonStart && <LilStart><a>Commencer</a></LilStart>}
                </Nav>
            </HeaderLink>
        </ContainHeader>
    )
}

const ContainHeader = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
`

const LogoJobezzContainer = styled.div`
    margin-left: 10%;
    cursor: pointer;
`

const LogoJobezz = styled.img`
    width: 70%;
    height: 50%;
    object-fit: contain;
`

const HeaderLink = styled.div`
    display: flex;
    list-style-type: none;
    margin: auto;
    margin-right: 10%;
`
const Nav = styled.nav`
    display: flex;
`

const Li = styled.li`
    margin: auto 22px;
    a {
        color: #66667e;
        // color: ${props => !props.themewhite ? '#ffffff' : '#000000'};
        cursor: pointer;
        font-size: 16px;
        text-decoration: none;
        font-family: 'Helvetica Rounded LT Std Bold';
        transition: all .3s ease;
        :hover {
            color: #ff004f;
        }
    }
    .active {
        color: #ff004f;
    }
`

const LilStart = styled.li`
    margin: auto 22px;
    a {
        width: 81px;
        height: 28px;
        border-radius: 4px;
        border: solid 1px #ffffff;
        :hover {
            background-color: transparent;
            border: 2px solid  #ff004f;
            color: #ff004f;
        }
    } 
`

export {Header}