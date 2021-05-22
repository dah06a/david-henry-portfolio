import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ProgressBar, Carousel } from 'react-bootstrap';
import './Skills.css';

const SkillItem = (props) => {
    return (
        <ListGroup horizontal>
            <ListGroup.Item style={{width: '20%'}}>{props.children}</ListGroup.Item>
            <ListGroup.Item style={{width: '80%'}}>
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
                        <ListGroup horizontal className="list-title">
                            <ListGroup.Item className="list-title-item"></ListGroup.Item>
                            <ListGroup.Item className="list-title-item">Novice</ListGroup.Item>
                            <ListGroup.Item className="list-title-item">Intermediate</ListGroup.Item>
                            <ListGroup.Item className="list-title-item">Advanced</ListGroup.Item>
                            <ListGroup.Item className="list-title-item">Pro</ListGroup.Item>
                        </ListGroup>
                        <ListGroup variant="flush" className="list-rows">
                            <ListGroup.Item className="list-header-item">HTML</ListGroup.Item>
                            <SkillItem variant='warning' label='HTML5 50' now={this.state.progress} max={20}>HTM5</SkillItem>
                            <SkillItem variant='primary' label='JSX 60' now={this.state.progress} max={16}>JSX</SkillItem>

                            <ListGroup.Item style={{width: '20%'}}></ListGroup.Item>
                            <ListGroup.Item className="list-header-item">CSS</ListGroup.Item>
                            <SkillItem variant='css' label='CSS3 50' now={this.state.progress} max={20}>CSS3</SkillItem>
                            <SkillItem variant='sass' label='Sass 20' now={this.state.progress} max={50}>Sass</SkillItem>
                            <SkillItem variant='bootstrap' label='Bootstrap 60' now={this.state.progress} max={16}>Bootstrap</SkillItem>

                            <ListGroup.Item style={{width: '20%'}}></ListGroup.Item>
                            <ListGroup.Item className="list-header-item">JavaScript</ListGroup.Item>
                            <SkillItem variant='javascript' label='JS ES6 70' now={this.state.progress} max={14}>JS ES6</SkillItem>
                            <SkillItem variant='jquery' label=' JQuery40' now={this.state.progress} max={25}>JQuery</SkillItem>
                            <SkillItem variant='react' label='React 60' now={this.state.progress} max={16}>React</SkillItem>
                            <SkillItem variant='info' label='React-Native 50' now={this.state.progress} max={20}>React-Native</SkillItem>

                            <ListGroup.Item style={{width: '20%'}}></ListGroup.Item>
                            <ListGroup.Item className="list-header-item">Backend</ListGroup.Item>
                            <SkillItem variant='sql' label='SQL 10' now={this.state.progress} max={100}>SQL</SkillItem>
                            <SkillItem variant='node' label='Node.js Express 30' now={this.state.progress} max={33}>Node.js Express</SkillItem>
                            <SkillItem variant='success' label='MongoDB 40' now={this.state.progress} max={25}>MongoDB</SkillItem>
                            <SkillItem variant='mongoose' label='Mongoose 20' now={this.state.progress} max={50}>Mongoose</SkillItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={8} className="m-auto">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Skills;
