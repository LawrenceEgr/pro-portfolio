import './App.css';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {BrowserRouter as Router ,Routes, Route ,Navigate} from 'react-router-dom';

import React from 'react';

import Webdrivers from './components/Webdrivers';
import Web from './components/Web';
import Navigationbar from './components/Navigationbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import All from './components/All';
import Home from './components/Home';

function App() {
    return ( 
    <div>
    { <Router>
            <Navigationbar/> 
               <div className='routes' >
                <Routes>
                    <Route path = "/"element = {<Home/>}/> 
                    <Route path = "services"element = {<Header/>}/> 
                    <Route path = "about" element = {<About />}/>
                    <Route path = "projects" element = {<Projects />}>
                        <Route path = "/projects" element = {<Navigate replace to ="all"/>} />
                        <Route path="web" element={<Web/>}/>
                        
                        <Route path="all" element= {<All/>}/>
                        
                        <Route path="webdrivers" element={<Webdrivers/>}/>
                    </Route>
                    
                    <Route path = "contact" element = { <Contact />}/> 
                </Routes> 
               </div>
            <Footer/>
       </Router> }

  
    </div>
    );
}
export default App;