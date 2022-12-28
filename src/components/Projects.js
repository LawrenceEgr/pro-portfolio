import React from 'react'

import {Outlet} from 'react-router-dom'

import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className='projects-content'>
      	
		
	      <div className="projects-buttons">
			      <button className='button'><Link  to= {'../projects'}>All</Link></button>
            <button className='button'><Link  to= {'web'}>Web Apps</Link></button>
            <button className='button'><Link  to= {'webdrivers'}>Webdrivers</Link></button>
            {/* <button className='button'><Link  to= {'c'}>C Projects</Link></button> */}
          </div>
		   
       
      
		   
      <Outlet/>
   
    </div>
  )
}

export default Projects