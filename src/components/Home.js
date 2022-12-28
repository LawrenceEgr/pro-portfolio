import React from 'react'
import Header from './Header';
import All from './All';
import About from './About';
import Contact from './Contact';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='sections'><h1>About <span>Me</span> </h1></div>
      <About/>
      <div className='sections'><h1>Services 🖥️</h1></div>
      <Header/>
      <div className='sections'><h1>Projects</h1></div>
      <All/>
      <div className='sections'><h1>Contact <span>Me</span></h1></div>
      <Contact/>
      
      <Outlet/>
    </div>
  )
}

export default Home