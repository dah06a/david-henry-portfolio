import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Portrait from '../images/summit-selfie.JPG';
import './Home.css';

function Home(props) {
    return (
        <Container fluid className="home">
            <Row className="h-100 justify-content-center align-content-center">
                <Col md={6} className="content">
                    <h1><strong>Hello there, I'm David,</strong></h1>
                    <Image src={Portrait} roundedCircle className="w-50 m-2" />
                    <h2>and I'm a <s>math teacher</s> full stack developer.</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
