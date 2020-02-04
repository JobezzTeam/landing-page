import React from 'react';
import styled from 'styled-components'
// import Grid from 'styled-components-grid';
import { Container, Row, Col } from 'react-grid';
import {CardWeb} from './cardweb'

function PageThree() {
    return(
        <Contain>
            <Row style={{outline: 'none', marginLeft: '45%'}}>
                <Button>Nos fonctionnalités</Button>
            </Row>
            <Row style={{marginTop: '10%'}}>
                <Col style={{ width: '10%'}} md="auto" />
                    <CardWeb title='Fonction A' description='blablblalldazkazdadadza'/>
                <Col style={{ width: '10%'}} md="auto" />
                    <CardWeb/>
                <Col style={{ width: '10%'}} md="auto" />
                    <CardWeb/>
            </Row>
        </Contain>
    )
}

const Contain = styled.div`
    width: 100%;
    height: 50vh;
    background-color: #21212E;
`

const Button = styled.button`
    width: 10%;
    height: 5%;
    // opacity: 0.1;
    background-color: #00ec98;
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8em;
    position: absolute;
    font-weight: bold;
    text-align: center;
`
export {PageThree}