import React, { Component } from 'react';
import { Container, Row, Col, Carousel, Image, ProgressBar } from 'react-bootstrap';

import BootstrapBadge from '../images/bootstrap-badge.png';
import ReactBadge from '../images/react-badge.png';
import ReactNativeBadge from '../images/react-native-badge.png';
import BackendBadge from '../images/backend-badge.png';
import FrontendCertificate from '../images/frontend-honors-certificate.png';
import BackendCertificate from '../images/backend-certificate.png';

import MernStack from '../images/mern-stack.jpg';
import HtmlBanner from '../images/html-banner.png';
import HtmlIcon from '../images/html-icon.png';
import JsxIcon from '../images/jsx-icon.png';

import CssBanner from '../images/css-banner.png';
import CssIcon from '../images/css-icon.png';
import SassBanner from '../images/sass-banner.png';
import SassIcon from '../images/sass-icon.png';
import BootstrapBanner from '../images/bootstrap-banner.png';
import BootstrapIcon from '../images/bootstrap-icon.jpg';

import JavascriptBanner from '../images/javascript-banner.png';
import JavascriptIcon from '../images/javascript-icon.png';
import JqueryBanner from '../images/jquery-banner.png';
import JqueryIcon from '../images/jquery-icon.jpg';
import ReactBanner from '../images/react-banner.jpeg';
import ReactIcon from '../images/react-icon.png';
import ReduxBanner from '../images/redux-banner.jpg';
import ReduxIcon from '../images/redux-icon.png';
import ReactNativeBanner from '../images/react-native-banner.png';
import ReactNativeIcon from '../images/react-native-icon.png';

import SqlBanner from '../images/sql-banner.png';
import SqlIcon from '../images/sql-icon.png';
import NodeBanner from '../images/node-banner.jpg';
import NodeIcon from '../images/node-icon.png';
import MongodbBanner from '../images/mongodb-banner.png';
import MongodbIcon from '../images/mongodb-icon.png';
import MongooseBanner from '../images/mongoose-banner.jpg';
import MongooseIcon from '../images/mongoose-icon.png';

import './Skills.css';

class Skills extends Component {
    state = {
        progress: 0,
        skillItems: ['Html', 'CSS', 'JavaScript', 'JQuery', 'React', 'JSX', 'Redux', 'Bootstrap', 'Sass', 'React-Native', 'Node.JS Express', 'MongoDB', 'Mongoose', 'SQL', 'Nucamp Bootcamp']
    }

    componentDidMount() {

        const progressInterval = setInterval(() => {
            if (this.state.progress < 15) this.setState({progress: this.state.progress+1});
            else clearInterval(progressInterval);
        }, 300);

    }

    render(props) {
        let skillsContent = (
            <Container style={{height: '50vh'}}>
                <Row style={{height: '100%'}}>
                    <Col style={{alignSelf: 'center'}}>
                        <ProgressBar
                            animated
                            variant='primary'
                            style={{height: '50px', fontSize: '24px'}}
                            label={this.state.skillItems[this.state.progress]}
                            now={this.state.progress + 1}
                            max={15}
                        />
                    </Col>
                </Row>
            </Container>
        );

        if (this.state.progress >= 15) {
            skillsContent = (
                <Container>
                    <Row className="skill-area">
                        <Col xs={12} className="mt-5 align-self-center">
                            <h2>Coding Bootcamp</h2>
                            <hr style={{borderColor: "grey"}} />
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Row className="my-5">
                                <Col xs={6}>
                                    <Image roundedCircle className="nucamp-badge" src={BootstrapBadge} />
                                </Col>
                                <Col xs={6}>
                                    <Image roundedCircle className="nucamp-badge" src={ReactBadge} />
                                </Col>
                            </Row>
                            <Row className="my-5">
                                <Col xs={6}>
                                    <Image roundedCircle className="nucamp-badge" src={ReactNativeBadge} />
                                </Col>
                                <Col xs={6}>
                                    <Image roundedCircle className="nucamp-badge" src={BackendBadge} />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Image rounded className="certificate" src={FrontendCertificate} />
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <Image rounded className="certificate" src={BackendCertificate} />
                        </Col>
                    </Row>

                    <Row className="skill-area">
                        <Col xs={12} className="mt-5 align-self-center">
                            <h2 className="skills-header">HTML</h2>
                            <hr style={{borderColor: "grey"}} />
                        </Col>
                        <Col md={2}>
                            <Image src={HtmlIcon} className="icons" />
                            <h5>HTML 5</h5>
                        </Col>
                        <Col md={2}>
                            <Image roundedCircle src={JsxIcon} className="icons" style={{border: "1px solid lightgrey"}} />
                            <h5>JSX</h5>
                        </Col>
                    </Row>

                    <Row className="skill-area">
                        <Col xs={12} className="mt-5 align-self-center">
                            <h2 className="skills-header">CSS</h2>
                            <hr style={{borderColor: "grey"}} />
                        </Col>
                        <Col md={2}>
                            <Image src={CssIcon} className="icons" />
                            <h5>CSS 3</h5>
                        </Col>
                        <Col md={2}>
                            <Image src={SassIcon} className="icons" />
                            <h5>Sass</h5>
                        </Col>
                        <Col md={2}>
                            <Image src={BootstrapIcon} className="icons" />
                            <h5>Bootstrap</h5>
                        </Col>
                    </Row>

                    <Row className="skill-area">
                        <Col xs={12} className="mt-5 align-self-center">
                            <h2 className="skills-header">JavaScript</h2>
                            <hr style={{borderColor: "grey"}} />
                        </Col>
                        <Col md={2}>
                            <Image src={JavascriptIcon} className="icons" />
                            <h5>JS ES6</h5>
                        </Col>
                        <Col md={2}>
                            <Image src={JqueryIcon} className="icons" />
                            <h5>JQuery</h5>
                        </Col>
                        <Col md={2}>
                            <Image src={ReactIcon} className="icons" />
                            <h5>React</h5>
                        </Col>
                        <Col md={2}>
                            <Image roundedCircle src={ReactNativeIcon} className="icons" style={{border: "1px solid lightgrey"}} />
                            <h5>React-Native</h5>
                        </Col>
                        <Col md={2}>
                            <Image roundedCircle src={ReduxIcon} className="icons" style={{border: "1px solid lightgrey"}} />
                            <h5>Redux</h5>
                        </Col>
                    </Row>
                    <Row className="skill-area">
                        <Col xs={12} className="mt-5 align-self-center">
                            <h2 className="skills-header">Backend</h2>
                            <hr style={{borderColor: "grey"}} />
                        </Col>
                        <Col md={2}>
                            <Image src={NodeIcon} className="icons" />
                            <h5>Node Express</h5>
                        </Col>
                        <Col md={2}>
                            <Image src={MongodbIcon} className="icons" />
                            <h5>MongoDB</h5>
                        </Col>
                        <Col md={2}>
                            <Image roundedCircle src={MongooseIcon} className="icons" style={{border: "1px solid lightgrey"}} />
                            <h5>Mongoose</h5>
                        </Col>
                        <Col md={2}>
                            <Image roundedCircle src={SqlIcon} className="icons" style={{border: "1px solid lightgrey"}} />
                            <h5>SQL</h5>
                        </Col>
                    </Row>
                    <Row className="skill-area">
                        <Col xs={12} className="mt-5 align-self-center">
                            <h2 className="skills-header">MERN Stack</h2>
                            <hr style={{borderColor: "grey"}} />
                        </Col>
                        <Col md={8} className="m-auto">
                            <Carousel fade>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={MernStack} alt="MERN Stack Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={MongodbBanner} alt="MongoDB Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={NodeBanner} alt="Node.js Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={ReactBanner} alt="React Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={HtmlBanner} alt="HTML Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={CssBanner} alt="CSS Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={SassBanner} alt="Sass Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={JavascriptBanner} alt="Javascript Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={JqueryBanner} alt="JQuery Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={BootstrapBanner} alt="Bootstrap Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={ReduxBanner} alt="Redux Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={ReactNativeBanner} alt="React Native Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={MongooseBanner} alt="Mongoose Banner Image" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image className="carousel-images" src={SqlBanner} alt="SQL Banner Image" />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            );
        }
        return (
            <>
                <Container fluid>
                    <Row className="skills-title">
                        <Col className="align-self-center">
                            <h1>Skills and Technologies</h1>
                        </Col>
                    </Row>
                </Container>
                {skillsContent}
            </>
        );
    }
}

export default Skills;
