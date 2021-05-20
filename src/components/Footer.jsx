import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer(props) {
    return (
        <Container fluid >
            <Row className="footer">
                <Col className="align-self-center">
                    <h1>Footer</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
