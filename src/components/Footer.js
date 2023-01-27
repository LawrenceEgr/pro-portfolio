import React from 'react';
import { Link } from 'react-router-dom';

import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
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
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Follow me on social networks:</span>
        </div>

        <div>
          <a href='www.facebook.com/Larry Lang' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://twitter.com/webgeek254' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
         
          <a href='https://www.instagram.com/starlakila/' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://www.linkedin.com/in/lawrence-langat-333b991b6/' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/LawrenceEgr' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Personal Opinion
              </h6>
              <p>
               "Web development and web design awakes the creative part of us ."
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Skills</h6>
              <p>Bootstrap</p>
              <p>React</p>
              <p>Javascript</p>
              <p>Css</p>
              <p>Python</p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Navigate</h6>
                
                <p><Link className='text-reset' onClick={handleClickScrollToHome} aria-current="page" to="/">Home</Link></p>
                <p><Link className='text-reset' onClick={handleClickScrollToAbout} to="/">About</Link></p>
                <p><Link className='text-reset' onClick={handleClickScrollToServices} to="/">Services</Link></p>
                <p><Link className='text-reset' onClick={handleClickScrollToProjects} to="/">Projects</Link></p>
                <p><Link className='text-reset' onClick={handleClickScrollToContact} to="/">Contact</Link></p>
              
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Nairobi, Kenya
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                lawrencelangatmi@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 254 790 368 803
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://github.com/LawrenceEgr?tab=repositories'>
          Lawrence Development
        </a>
      </div>
    </MDBFooter>
  );
}