import React from 'react'
import Header from './Header';
import All from './All';
import About from './About';
import Contact from './Contact';
import { Outlet } from 'react-router-dom';
import Navigationbar from './Navigationbar';
function Home() {
  return (
    <div id='home'>
      <div className='sections'id='about' ><h1>About <span>Me</span> </h1></div>
      <About/>
      <div className='sections' id='services'><h1>Services 🖥️</h1></div>
      <Header/>
      <div className='sections' id='projects'><h1>Projects</h1></div>
      <All/>
      <div className='sections' id='contact'><h1>Contact <span>Me</span></h1></div>
      <Contact/>
      
      <Outlet/>
    </div>
  )
}

export default Home