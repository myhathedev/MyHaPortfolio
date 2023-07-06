import './App.scss';
import {  Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about-me';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Nopage from './pages/no-page';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">     
      <Nav/> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
