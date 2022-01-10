import React from 'react';
import { Container, Row, Col, Card, Carousel, OverlayTrigger, Tooltip, ListGroup } from 'react-bootstrap';

import CafeHome from '../images/game-cafe-home.png';
import CafeGames from '../images/game-cafe-games.png';
import CafeMenu from '../images/game-cafe-menu.png';
import CafeReserve from '../images/game-cafe-reserve.png';

import NuCampHome from '../images/nucamp-home.png';
import NuCampDirectory from '../images/nucamp-directory.png';
import NuCampComments from '../images/nucamp-comments.png';
import NuCampContact from '../images/nucamp-contact.png';

import FairTeamsGoogleStore from '../images/fair-teams-google-store.png';
import FairTeamsBeforeSort from '../images/fair-teams-before-sort.png';
import FairTeamsAddMember from '../images/fair-teams-add-member.png';
import FairTeamsPersonalGroups from '../images/fair-teams-personal-groups.png';

import PaintHome from '../images/paint-home.png';
import PaintMenu from '../images/paint-menu.png';
import PaintTools from '../images/paint-tools.png';

import ServerGet from '../images/server-get.png';
import ServerLogin from '../images/server-login.png';
import ServerRunning from '../images/server-running.png';

import StudentLogin from '../images/student-sorter-login.png';
import StudentOptions from '../images/student-sorter-options.png';
import StudentSchedule from '../images/student-sorter-schedule.png';
import StudentSettings from '../images/student-sorter-settings.png';

import EduIcon from '../images/edu-icon.png';
import EduEdit from '../images/edu-edit-timer.png';
import EduHome from '../images/edu-home-lite.png';
import EduBanner from '../images/edu-schedule.png';

import BurgerLogin from '../images/burger-builder-login.png';
import BurgerBuild from '../images/burger-builder-build-page.png';
import BurgerOrders from '../images/burger-builder-orders.png';

import BlogAllArticles from '../images/blog-all-articles.png';
import BlogExampleArticle from '../images/blog-example-article.png';
import BlogNewArticle from '../images/blog-new-article.png';

import KhanBlocks from '../images/khan-blocks.png';
import KhanSnake from '../images/khan-snake.png';
import KhanSorter from '../images/khan-sorter.png';
import KhanPond from '../images/khan-pond.png';

import CodeRoad from '../images/code-road.png';
import CodeQuiz from '../images/code-quiz.png';
import CodeSpace from '../images/code-space.png';
import CodeDice from '../images/code-dice.png';

import './Projects.css';

const Slides = (props) => {
    let carouselItems = [];
    for (let i = 0; i < props.carouselItems.length; i++) {
        carouselItems.push(
            <Carousel.Item key={`carousel-item-${props.carouselItems[i]}`} className="projects-images">
                <img className="d-block w-100" src={props.carouselItems[i]} alt={"Project Slide " + (i+1)} />
            </Carousel.Item>
        );
    }
    const offset = Math.floor(Math.random()*1000) + 3000;
    return (
        <Carousel fade wrap controls={false} indicators={false} interval={offset}>
            {carouselItems}
        </Carousel>
    );
}

const ProjectCard = (props) => {
    return (
        <div>
            <a href={props.link} target="_blank" rel="noreferrer" className="projects-link">
                <OverlayTrigger
                    key={`overlay-${props.title}`}
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-${props.title}`}>
                            {props.tooltip}
                        </Tooltip>
                    }
                >
                    <Card className="projects-card">
                        <Card.Header>
                            <Card.Title>{props.title}</Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <Slides carouselItems={props.carouselItems} />
                            <Card.Text className="p-2 align-self-center">
                                Focus: <strong>{props.focus}</strong>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </OverlayTrigger>
            </a>
            {props.extra}
        </div>
    );
}

function Projects(props) {
    return (
        <Container fluid className="projects">

            <Row className="projects-title">
                <Col className="align-self-center">
                    <h1>Projects</h1>
                </Col>
            </Row>

            <Row>
                <Col className="mx-4 mt-5">
                    <h2 className="projects-header">Personal Projects</h2>
                </Col>
            </Row>
            <Row className="m-2">
                <Col sm={6} lg={4} className="my-3">
                    <ProjectCard
                        link="https://play.google.com/store/apps/details?id=com.dah06a.fairteams"
                        title="Fair Teams"
                        carouselItems={[FairTeamsGoogleStore, FairTeamsBeforeSort, FairTeamsAddMember, FairTeamsPersonalGroups]}
                        focus="React-Native &amp; Expo"
                        tooltip="The project was a journey in learning React-Native development for multi-platform web apps.
                        The project used various integrated libraries such as React Navigation, React Native Elements, and Lottie among others.
                        It allows users to create groups and then sort them into fair, balanced teams - useful for all kinds of situations!"
                    />
                </Col>
                <Col sm={6} lg={4} className="my-3">
                    <ProjectCard
                        link="https://dah06a.github.io/bob-ross-paint-app/"
                        title="Bob Ross Paint App"
                        carouselItems={[PaintHome, PaintMenu, PaintTools]}
                        focus="React Hooks &amp; Bootstrap 5"
                        tooltip="This project was created for the mintbean Hiring Hackathon in November of 2021.
                        The app was designed with React and Bootstrap 5.1 and has been deployed with GitHub pages.
                        It also uses some external dependencies like react-colorful and body-scroll-lock with NPM."
                    />
                </Col>
                <Col sm={6} lg={4} className="my-3">
                    <ProjectCard
                        link="https://github.com/dah06a/student-sorter-app"
                        title="Student Sorter"
                        carouselItems={[StudentLogin, StudentSettings, StudentOptions, StudentSchedule]}
                        focus="React, Redux, &amp; Firebase"
                        tooltip="My first attempt at a real React project on my own.  This frontend was designed for
                        organizations trying to organize students. It guides users through a process of setting options,
                        creating schedules, and adding students and work can be saved and edited later with firebase."
                    />
                </Col>
                <Col sm={6} lg={4} className="my-3">
                    <ProjectCard
                        link="https://eduschedule.wordpress.com/"
                        title="Edu Schedule"
                        carouselItems={[EduIcon, EduEdit, EduHome, EduBanner]}
                        focus="Swift &amp; Xcode"
                        tooltip="As a teacher, I often had confusing schedules.  I wanted a way to quickly see how much
                        time I had in any given class.  So, I made an app to do it for me! This was my first experience
                        making an App, using Swift, and working with the Xcode platform for iPhone development."
                    />
                </Col>
            </Row>

            <Row>
                <Col className="mx-4">
                    <h2 className="projects-header">Bootcamp Work</h2>
                </Col>
            </Row>
            <Row className="m-2">
                <Col sm={6} lg={4} className="my-3">
                    <ProjectCard
                        link="https://github.com/dah06a/cafe-project-react-version"
                        title="Tabletop Cafe"
                        carouselItems={[CafeHome, CafeGames, CafeMenu, CafeReserve]}
                        focus="React, Bootstrap, &amp; API Fetch"
                        tooltip="A website designed for a fictitious tabletop gaming cafe! This project demonstrates a sleek,
                        responsive design using React and Bootstrap.  It also uses an API fetch request to create a list of
                        games for the user to reserve."
                    />
                </Col>
                <Col sm={6} lg={4} className="my-3">
                    <ProjectCard
                        link="https://github.com/dah06a/nucamp-react-testing"
                        title="NuCamp Website"
                        carouselItems={[NuCampHome, NuCampDirectory, NuCampContact, NuCampComments]}
                        focus="React &amp; Redux"
                        tooltip="A tutorial project that led me through much learning in the NuCamp coding
                        bootcamp.  The website demonstrates my React and Redux learning throughout the course.  It is
                        currently configured to load some content from a local database."
                    />
                </Col>
                <Col sm={6} lg={4} className="my-3">
                    <ProjectCard
                        link="https://github.com/dah06a/random-teams-project"
                        title="NuCamp Server"
                        carouselItems={[ServerGet, ServerLogin, ServerRunning]}
                        focus="Node Express &amp; MongoDB"
                        tooltip="This Node.js Express server uses MongoDB and Mongoose to provide resources for the
                        NuCamp Website mentioned above.  The local server project was tested throughout development
                        using PostMan and provided me a lot of backend experience."
                    />
                </Col>
            </Row>

            <Row>
                <Col className="mx-4 mt-5">
                    <h2 className="projects-header">Tutorials</h2>
                </Col>
            </Row>
            <Row className="m-2">
            <Col sm={6} lg={4} className="my-3">
                    <ProjectCard
                        link="https://github.com/dah06a/markdown-blog"
                        title="Markdown Blog"
                        carouselItems={[BlogAllArticles, BlogExampleArticle, BlogNewArticle]}
                        focus="MongoDB, Mongoose, &amp; EJS"
                        tooltip="This project used Node.js, Express, MongoDB, Mongoose, and EJS to create a full-stack basic blog site.
                        It allows a user to add blog entries using markdown.
                        This was completed as a tutorial for individual learning from the Web Dev Simplified channel."
                    />
                </Col>
                <Col sm={6} lg={4} className="my-3">
                    <ProjectCard
                        link="https://github.com/dah06a/burger-builder"
                        title="Burger Builder"
                        carouselItems={[BurgerLogin, BurgerBuild, BurgerOrders]}
                        focus="React, Redux, &amp; Firebase"
                        tooltip="Using Udemy, I followed along with a full course on React and learned a lot. This project
                        was the main tutorial used to teach. It is a simple application designed to allow users to sign up
                        create a personalized burger, order it, and maintain records of their purchases."
                    />
                </Col>
            </Row>
            <Row>
                <Col className="mx-4 mt-5">
                    <h2 className="projects-header">Simple Games/Animations</h2>
                </Col>
            </Row>
            <Row className="m-2">
                <Col sm={6} lg={4} className="my-3">
                    <ProjectCard
                        link="https://www.khanacademy.org/computer-programming/block-race/5947566063648768"
                        title="Khan Academy"
                        carouselItems={[KhanBlocks, KhanSnake, KhanSorter, KhanPond]}
                        focus="JavaScript &amp; OOP"
                        tooltip="Everyone has to start somewhere right? Khan Academy was one of the first places I went to
                        learn the basics.  Through their platform, I made many simple programs, games, and animations as I
                        started my journey into programming."
                        extra={
                            <ListGroup>
                                <ListGroup.Item>
                                    <a href="https://www.khanacademy.org/computer-programming/block-race/5947566063648768" target="_blank" rel="noreferrer">Block Race</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https://www.khanacademy.org/computer-programming/snake/6458728399273984" target="_blank" rel="noreferrer">Snake Game</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https://www.khanacademy.org/computer-programming/my-selection-sort-visualizer/4947421092921344" target="_blank" rel="noreferrer">Sorting Visualizer</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https://www.khanacademy.org/computer-programming/spin-off-of-project-computational-creatures/6400229573525504" target="_blank" rel="noreferrer">Pond Animation</a>
                                </ListGroup.Item>
                            </ListGroup>
                        }
                    />
                </Col>
                <Col sm={6} lg={4} className="my-3">
                    <ProjectCard
                        link="https://studio.code.org/projects/gamelab/o7Ua9LCXQXtVO8HtktALQCJKpJBLkOnh5svvBvfTtQw/view"
                        title="Code.org"
                        carouselItems={[CodeRoad, CodeQuiz, CodeSpace, CodeDice]}
                        focus="Coding Fundamentals"
                        tooltip="As a teacher, I have found Code.org to be an incredible resource for teaching the
                        fundamentals of coding and computer programming.  And I love using it too! I have used Code.org
                        many times to show my students various math concept and just how fun coding can be."
                        extra={
                            <ListGroup>
                                <ListGroup.Item>
                                    <a href="https://studio.code.org/projects/gamelab/o7Ua9LCXQXtVO8HtktALQCJKpJBLkOnh5svvBvfTtQw/view" target="_blank" rel="noreferrer">Road Rage</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https://studio.code.org/projects/gamelab/g_LPJY6uDxHkv3QFYh5kX057GrdkrRRjJaZFvqdfaaU/view" target="_blank" rel="noreferrer">Quiz Guessing</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https://studio.code.org/projects/gamelab/d1_lyfr7SFPZ69fhrI-RKFe9k04IGOmX20J9Pb3GMZA/view" target="_blank" rel="noreferrer">Space Fighter</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https://studio.code.org/projects/gamelab/pgq4i3PWO881rF7P1-umlB6BrEaV-WVfFQvR1LoLCkc/view" target="_blank" rel="noreferrer">Dice Simulator</a>
                                </ListGroup.Item>
                            </ListGroup>
                        }
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
