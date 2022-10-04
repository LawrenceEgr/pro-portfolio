import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return ( 
    <div>
    { <Router>
        <Navbar/> 
       
        <Routes>
         <Route path = "/"element = {<Header />}/>  
        <Route path = "about" element = {<About />}/>
        <Route path = "projects" element = {<Projects />}/>

        <Route path = "contact" element = { <Contact />}/> 
        </Routes> 
        <Footer/>
       </Router> }

  
    </div>
    );
}
export default App;