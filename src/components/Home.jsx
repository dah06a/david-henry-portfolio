import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

function Home(props) {
    return (
        <>
            <Container fluid className="home">
                <Row className="h-100 align-content-center">
                    <Col style={{color: 'black'}}>
                        <h1><strong>Hello there, I'm David,</strong></h1>
                        <h2>and I'm a <s>math teacher</s></h2>
                        <h2>full stack developer.</h2>
                    </Col>
                    <Col className="d-none d-md-block" />
                </Row>
            </Container>
            <Container fluid className="d-md-none mobile-portrait" />
        </>
    );
}

export default Home;
