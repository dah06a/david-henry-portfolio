import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CodeBackdrop from '../images/code-backdrop.jpg';
import HTMLCover from '../images/html-banner.png';
import ACUBanner from '../images/acu-banner.png';
import TeacherCertificate from '../images/teacher-certificate.png';
import EduSchedule from '../images/edu-schedule.png';
import ReactBanner from '../images/react-banner.jpeg';
import Nucamp from '../images/nucamp.jpg';
import './About.css';

function About(props) {
    return (
        <article className="about">
            <Container fluid>
                <Row className="about-title">
                    <Col className="align-self-center">
                        <h1>The Story</h1>
                        <h3 style={{color: "black", marginTop: "50px"}}>My mission is to learn, create, and change my future.</h3>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col md={8} className="m-auto">
                        <h4 className="text-center">From Teaching to Coding</h4>
                        <p>
                            It's been a long journey, but I'm changing careers, from secondary math/science teacher to developer.
                            I love to work with others and engage in meaningful learning and collaboration.  I also believe
                            strongly in the power of education, so I became a teacher.  I have successfully taught students for
                            almost 10 years now, most recently at the secondary level in the subjects of mathematics and science.
                            I love to teach and work with others, but I have come to realize that my true passion is working with
                            code.  I wish I had realized it a long time ago.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="m-auto">
                        <Image src={CodeBackdrop} className="about-images code-backdrop-img" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col md={8} className="m-auto">
                        <h4 className="text-center">It Began with a Dragon</h4>
                        <p>
                            When I was a kid, a friend of mine showed me some basic HTML on my home computer.  I was hooked.  The
                            idea that I could type a few words and make something appear on the screen captivated me.  I was pretty
                            into dragons at the time, so I spent weeks working on a website all about dragons.  I was convinced that
                            it was supremely cool.  I never managed to put it online and I lost the files years ago, but I will never
                            forget the feeling of amazement of typing in a few words of code and seeing a dragon appear on my screen.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="m-auto">
                        <Image src={HTMLCover} className="about-images html-cover-img" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col md={8} className="m-auto">
                        <h4 className="text-center">Choosing a Different Path</h4>
                        <p>
                            During my undergraduate work at Abilene Christian University, I struggled to decide on a future path.  I
                            have always had a passion for math, science, and problem solving, and I eventually chose education,
                            believing it to be a meaningful and fulfilling career that would allow me to continue all of those things.
                            All the while, the people I spent the most time with, who would become my life-long friends, were all
                            majoring in physics, mathematics, and computer science.  I found myself finishing my course work early at
                            times so I could spend time learning more about those subjects.  In hindsight, I probably should have
                            taken a hint!
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="m-auto">
                        <Image src={ACUBanner} className="about-images acu-banner-img" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col md={8} className="m-auto">
                        <h4 className="text-center">Circling Back</h4>
                        <p>
                            For 10 years, I have had the opportunity to teach all over the world, and I am grateful for the experience.
                            However, I constantly had the feeling that the classroom was not where I was supposed to be, and everyday I
                            found myself wanting and trying to learn about software development.  It started with websites that I used
                            to help my students like <a href="https://www.khanacademy.org/">Khan Academy</a> and <a href="https://code.org/">
                            Code.org</a>  I began going through the computer programming curriculum on my own, and I enjoyed it so much
                            that I ended up finishing nearly all of the content available!  I loved learning about the fundamentals of
                            JavaScript and Object-Oriented-programming and created many small games and visualizations.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="m-auto">
                        <div className="about-images platform-images" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col md={8} className="m-auto">
                        <h4 className="text-center">Certified in Computer Science</h4>
                        <p>
                            Later, I decided to study computer science on my own more in depth.  At the time, my school district was
                            offering a small stipend for any teachers who were willing to take a professional development class that
                            would lead to a certification in teaching computer science at the high school level.  I took the short course,
                            designed to teach CS fundamentals, and passed the required exam.  In the process, I studied hours of other CS
                            content online and taught myself additional fundamentals in HTML and CSS with platforms like freecodecamp.org.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="m-auto">
                        <Image src={TeacherCertificate} className="about-images teacher-certificate-img" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col md={8} className="m-auto">
                        <h4 className="text-center">My First App</h4>
                        <p>
                            The next year, I was not able to find a position teaching computer science full-time (it turns out those
                            positions are rare).  However, a different opportunity arose.  That year, my teaching schedule changed
                            drastically and my class times became very difficult to manage.  So, I put my coding skills to the test and
                            decided to try making an app.  It took a long time, and looking back, the code isn’t very pretty, but
                            eventually I was successful!  I learned enough of the Swift programming language and the XCode software
                            platform to create EduSchedule, a simple iPhone app to help students and teachers keep track of their crazy
                            class schedules.  <a href="https://apps.apple.com/us/app/edu-schedule/id1486131627">You can find EduSchedule
                            and check it out here!</a>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="m-auto">
                        <Image src={EduSchedule} className="about-images edu-schedule-img" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col md={8} className="m-auto">
                        <h4 className="text-center">Building in React</h4>
                        <p>
                            After making an App, I knew that I could go further and create more.  A developer friend of mine recommended
                            that I start learning React and wanted me to help build a front-end for a project.  That was when things
                            really started getting serious.  I spent the better part of a year learning the React framework and bringing
                            all of my learning together all of my learning so far.  I was able to create an MVP for the project front-end,
                            but everything came to halt during the pandemic.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="m-auto">
                        <Image src={ReactBanner} className="about-images react-banner-img" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col md={8} className="m-auto">
                        <h4 className="text-center">Time For a Bootcamp</h4>
                        <p>
                            It was time to make a real attempt at changing my future.  During the pandemic, I decided to enroll in the
                            NuCamp Full Stack Bootcamp.  I studied and worked to become proficient with many development tools like
                            Node.js, Bootstrap, JQuery, React, React-Native, Express, MongoDB, Mongoose, and others.  I have since
                            graduation, and I am finally ready to make the leap.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="m-auto">
                        <Image src={Nucamp} className="about-images nucamp-img" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col md={8} className="m-auto">
                        <h4 className="text-center">Ready To Work</h4>
                        <p>
                        I love to learn, and I am passionate about coding and problem solving.  I dedicate myself fully to my endeavors
                        and I am confident in my readiness to change careers and start working in the development field.  Being a teacher
                        has taught me that, if I can succeed at teaching math to a room full of teenagers, I can do just about anything.
                        </p>
                    </Col>
                </Row>
            </Container>
        </article>
    );
}

export default About;
