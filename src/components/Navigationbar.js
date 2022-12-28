import React from 'react' ;
// import {Link}    from 'react-router-dom';
import logo from "../profile.png" ;
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';

function Navigationbar(){
  return (
   <>
    <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' variant='light'>
        <Container>
            
            <NavbarBrand>
              <a className="navbar-brand" href="www.github.com/Lawrenceegr"  ><img className="logo" src={logo} alt=""/> <p className='brand-name'>LAWRENCE</p></a>
            </NavbarBrand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' bg='dark' variant='dark'/>  
            <Navbar.Collapse  id="responsive-navbar-nav">
              <Nav bg='dark'>
                <Nav.Link  aria-current="page" href="/">Home</Nav.Link>
                <Nav.Link  href="/about">About</Nav.Link>
                <Nav.Link  href="/services">Services</Nav.Link>
                <Nav.Link  href="/projects">Projects</Nav.Link>

                <Nav.Link  href="/contact">Contact</Nav.Link>
              </Nav> 
            </Navbar.Collapse> 
        </Container>      
    </Navbar>

</>
  );
}

export default Navigationbar ;