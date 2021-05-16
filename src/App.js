import CustomNavbar from './components/CustomNavbar';
import SidePanel from './components/SidePanel';
import { Container, Row, Col } from 'react-bootstrap';
import Backdrop from './components/Backdrop';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
	return (
		<div className="App">
			<CustomNavbar />
			<Container fluid>
				<Row>
					<SidePanel />
					<Col md={{ span: 9, offset: 3 }} className="main-content">
						<Backdrop />
						<About />
						<Skills />
						<Portfolio />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
