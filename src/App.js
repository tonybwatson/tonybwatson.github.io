import './App.css';
import 'animate.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import SplashPage from './pages/SplashPage';
import AboutMe from './pages/AboutMe';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Link
} from "react-router-dom";

function App() {

	return (
		<>
			<Router>
				<Header />
				<hr />
				<Switch>
					<Route path="/about">
						<AboutMe />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/portfolio">
						<Portfolio />
					</Route>
					<Route exact path="/">
						<SplashPage />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</>
	);
}
export default App;
