import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Switch, Route, withRouter } from "react-router-dom";
import './App.css';

const NavbarWithRouter = withRouter(CustomNavbar);

function App() {
	return (
		<div className="App">
				<NavbarWithRouter />
			<main>
				<Switch>
					<Route path='/about' render={(props) => <About {...props} />} />
					<Route path='/skills' render={(props) => <Skills {...props} />} />
					<Route path='/projects' render={(props) => <Projects {...props} />} />
					<Route path='/resume' render={(props) => <Resume {...props} />} />
					<Route path='/contact' render={(props) => <Contact {...props} />} />
					<Route path='/' render={(props) => <Home {...props} />} />
				</Switch>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
