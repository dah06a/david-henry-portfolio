import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

function Home(props) {
    return (
        <Container fluid className="home">
            <Row className="h-100">
                <Col xs={7} sm={6} className="message">
                    <h1 className="title"><strong>Hello there, I'm David</strong></h1>
                    <h2 className="text">and I'm a <s>math teacher</s></h2>
                    <h2 className="text">software developer</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
