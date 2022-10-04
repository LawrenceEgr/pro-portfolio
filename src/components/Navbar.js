import React from 'react' ;
import {Link}    from 'react-router-dom';
import logo from "../me.jpg" ;

function Navbar() {
  return (
  
    <nav className ="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a className="navbar-brand" href="www.github.com/LawrenceEgr"  ><img className="logo" src={logo} alt=""/> LAWRENCE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
           
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           

           <Link className="nav-link" to="/">Home</Link>
           <Link className="nav-link" to="about">About</Link>
           <Link className="nav-link" to="projects">Projects</Link>
           
           <Link className="nav-link" to="contact">Contact</Link>
          
         </div>
        
    </div>
         
      
</nav>
  )
}

export default Navbar ;