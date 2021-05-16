import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import Portrait from '../images/summit-selfie.JPG';
import './SidePanel.css';

function SidePanel(props) {
    return (
        <Col className="side-panel" md={3}>
            <Row>
                <Col>
                    <Image src={Portrait} roundedCircle className="w-75 mt-4" />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h3>David Henry</h3>
                    <h3><s>Math Teacher</s></h3>
                    <h3>Full Stack Developer</h3>
                </Col>
            </Row>
        </Col>
    );
}

export default SidePanel;
