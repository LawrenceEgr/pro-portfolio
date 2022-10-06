import React from 'react'
import me from '../me.jpg'
import Interests from '../about images/Interests.png'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Gdsc from '../about images/GDSC.jpg'
import Alfred from '../about images/Alfred.jpg'

function About() {
  const history = useNavigate();
  
  return (
    <div>
    <div className="row" style={{Color : 'pink' }}>
      <div className="col-sm-8" id="about">
        
         <h1>Hello !<br></br> I'm <span className='span'>LAWRENCE LANGAT</span> <br></br> <b>I'm a frontend web developer</b> and a <b>Mechatronic Engineer </b> </h1>
          <p>I am interested in developing websites while working as a team or individually.
            I have worked on various websites some of which I show cased in my <Link  onClick={() => history.push("projects", { from: "/" })} to='/projects'>Projects</Link>.
            Since I started working in various projects , I have learned that consistency and is all that one needs.Given a task to do
             I will do it faithfully with passion .
          </p>
      </div>
      <div className="col-sm-4" id="me">
      <div className="card" >
  <img src={me} className="card-img-top thumbnail" alt=""/>
  <div className="card-body">
    <h5 className="card-title">LANGAT</h5>
    <p className="card-text">"Try to inspire someone and that is how you grow."</p>
   
  </div>
</div>
        
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={Alfred} className=" img-thumbnail" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mentions</h5>
        <p className="card-text">"Lawrence is one of the best front-end web developers I have ever worked with." <p> <i> ~ Alfred Githinji</i> </p> </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={Interests} className="" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">INTERESTS</h5>
        <p className="card-text">These are my main areas of interest among others .</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={Gdsc}   className="card-img-top"   alt="..."></img>
      
      <div className="card-body">
        <h5 className="card-title">CONTRIBUTIONS</h5>
        <p className="card-text">I am member of this GDSC organization. </p>
        <button ><a href="https://github.com/Dekut-GDSC-Web">Go to Organization </a> </button>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
    </div>
  )

}

export default About