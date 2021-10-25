import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
// import Week1 from './pages/Week1';
// import Week2 from './pages/Week2';
// import Week9 from './pages/Week9';
// import SplashPage from './pages/SplashPage';
import AboutMe from './pages/AboutMe';


function App() {
  return (
    <div className="App">
    
        <Header />
        {/* <SplashPage/> */}
       <AboutMe/>
      <Footer />
    </div>
  );
}

export default App;
