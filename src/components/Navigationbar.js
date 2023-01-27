import React from 'react' ;
// import {Link}    from 'react-router-dom';
import logo from "../profile.png" ;
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';

function Navigationbar(){
    const handleClickScrollToHome = () => {
    const element = document.getElementById('home');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const handleClickScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const handleClickScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const handleClickScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const handleClickScrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
                <Nav.Link onClick={handleClickScrollToHome} aria-current="page" href="/">Home</Nav.Link>
                <Nav.Link onClick={handleClickScrollToAbout} href="/">About</Nav.Link>
                <Nav.Link onClick={handleClickScrollToServices} href="/">Services</Nav.Link>
                <Nav.Link onClick={handleClickScrollToProjects} href="/">Projects</Nav.Link>

                <Nav.Link onClick={handleClickScrollToContact} href="/">Contact</Nav.Link>
              </Nav> 
            </Navbar.Collapse> 
        </Container>      
    </Navbar>

</>
  );
}

export default Navigationbar ;