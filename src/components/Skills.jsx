import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ProgressBar, Carousel, Image } from 'react-bootstrap';
import HtmlBanner from '../images/html-banner.png';
import CssBanner from '../images/css-banner.png';
import SassBanner from '../images/sass-banner.png';
import BootstrapBanner from '../images/bootstrap-banner.png';
import JavascriptBanner from '../images/javascript-banner.png';
import JqueryBanner from '../images/jquery-banner.png';
import ReactBanner from '../images/react-banner.jpeg';
import ReactNativeBanner from '../images/react-native-banner.png';
import SqlBanner from '../images/sql-banner.png';
import NodeBanner from '../images/node-banner.jpg';
import MongodbBanner from '../images/mongodb-banner.png';
import MongooseBanner from '../images/mongoose-banner.jpg';
import './Skills.css';

const SkillItem = (props) => {
    return (
        <ListGroup horizontal>
            <ListGroup.Item className="list-content-title">{props.children}</ListGroup.Item>
            <ListGroup.Item className="list-content-progress">
                <ProgressBar
                    striped
                    style={{height: '100%'}}
                    variant={props.variant}
                    animated
                    label={props.label + '%'}
                    now={props.now}
                    max={props.max}
                />
            </ListGroup.Item>
        </ListGroup>
    );
}

class Skills extends Component {
    state = {
        progress: 0,
    }

    componentDidMount() {

        const progressInterval = setInterval(() => {
            if (this.state.progress < 10) this.setState({progress: this.state.progress+1});
            else clearInterval(progressInterval);
        }, 200);

    }

    render(props) {
        return (
            <Container fluid className="skills">
                <Row className="skills-title">
                    <Col className="align-self-center">
                        <h1>Skills and Technologies</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="align-self-center">
                        <ListGroup horizontal>
                            <ListGroup.Item className="list-title-corner"></ListGroup.Item>
                            <ListGroup.Item className="list-title-item">Novice</ListGroup.Item>
                            <ListGroup.Item className="list-title-item">Intermediate</ListGroup.Item>
                            <ListGroup.Item className="list-title-item">Advanced</ListGroup.Item>
                            <ListGroup.Item className="list-title-item">Pro</ListGroup.Item>
                        </ListGroup>
                        <ListGroup variant="flush" className="list-rows">
                            <ListGroup.Item style={{width: '100%'}}></ListGroup.Item>
                            <ListGroup horizontal>
                                <ListGroup.Item className="list-header-item">HTML</ListGroup.Item>
                                <ListGroup.Item className="list-content-progress" />
                            </ListGroup>
                            <SkillItem variant='warning' label='HTML5 50' now={this.state.progress} max={20}>HTM5</SkillItem>
                            <SkillItem variant='primary' label='JSX 60' now={this.state.progress} max={16}>JSX</SkillItem>

                            <ListGroup.Item style={{width: '100%'}}></ListGroup.Item>
                            <ListGroup horizontal>
                                <ListGroup.Item className="list-header-item">CSS</ListGroup.Item>
                                <ListGroup.Item className="list-content-progress" />
                            </ListGroup>
                            <SkillItem variant='css' label='CSS3 50' now={this.state.progress} max={20}>CSS3</SkillItem>
                            <SkillItem variant='sass' label='Sass 20' now={this.state.progress} max={50}>Sass</SkillItem>
                            <SkillItem variant='bootstrap' label='Bootstrap 60' now={this.state.progress} max={16}>Bootstrap</SkillItem>

                            <ListGroup.Item style={{width: '20%'}}></ListGroup.Item>
                            <ListGroup horizontal>
                                <ListGroup.Item className="list-header-item">JavaScript</ListGroup.Item>
                                <ListGroup.Item className="list-content-progress" />
                            </ListGroup>
                            <SkillItem variant='javascript' label='JS ES6 60' now={this.state.progress} max={16}>JS ES6</SkillItem>
                            <SkillItem variant='jquery' label=' JQuery40' now={this.state.progress} max={25}>JQuery</SkillItem>
                            <SkillItem variant='react' label='React 60' now={this.state.progress} max={16}>React</SkillItem>
                            <SkillItem variant='redux' label='Redux 50' now={this.state.progress} max={20}>Redux</SkillItem>
                            <SkillItem variant='info' label='React-Native 50' now={this.state.progress} max={20}>React-Native</SkillItem>

                            <ListGroup.Item style={{width: '20%'}}></ListGroup.Item>
                            <ListGroup horizontal>
                                <ListGroup.Item className="list-header-item">Backend</ListGroup.Item>
                                <ListGroup.Item className="list-content-progress" />
                            </ListGroup>
                            <SkillItem variant='sql' label='SQL 10' now={this.state.progress} max={100}>SQL</SkillItem>
                            <SkillItem variant='node' label='Express 30' now={this.state.progress} max={33}>Express</SkillItem>
                            <SkillItem variant='success' label='MongoDB 40' now={this.state.progress} max={25}>MongoDB</SkillItem>
                            <SkillItem variant='mongoose' label='Mongoose 20' now={this.state.progress} max={50}>Mongoose</SkillItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col md={8} className="m-auto">
                        <Carousel fade>
                            <Carousel.Item>
                                <Image className="carousel-images" src={HtmlBanner} alt="HTML Banner Image" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="carousel-images" src={CssBanner} alt="CSS Banner Image" />
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
                                <Image className="carousel-images" src={SqlBanner} alt="SQL Banner Image" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="carousel-images" src={ReactBanner} alt="React Banner Image" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="carousel-images" src={ReactNativeBanner} alt="React Native Banner Image" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="carousel-images" src={SassBanner} alt="Sass Banner Image" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="carousel-images" src={NodeBanner} alt="Node.js Banner Image" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="carousel-images" src={MongodbBanner} alt="MongoDB Banner Image" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className="carousel-images" src={MongooseBanner} alt="Mongoose Banner Image" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Skills;
