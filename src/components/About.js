import React from 'react'
import me from '../profile.png'
// import Interests from '../about images/Interests.png'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Gdsc from '../about images/gdsc.png'
import Alfred from '../about images/Alfred.jpg'

function About() {
  const history = useNavigate();
  
  return (
    <div>
    <div className="section-1" >
      <div className="about">
        
         <h1>Hello ! 👋<br></br> I'm <span className='span'>LAWRENCE LANGAT</span> <br></br> <b>a frontend web developer</b> and a <b>Mechatronic Engineer </b> </h1>
          <p>
             I am interested in developing websites while working as a team or individually. 
             I have worked on various websites some of which I showcased in my <Link  onClick={() => history.push("projects", { from: "/" })} to='/projects'>Projects</Link>.
              Through my experience, while working on various projects, 
              I have learned that consistency is all that one needs.
               Given a task to do I will do it faithfully and with passion .
          </p>
      </div>
      <div><img src={me} className="my-profile" alt=""/></div>
      
  
    </div>
        
     
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col" id='cards'>
    <div className="card h-100">
      
      <div className="card-body">
        <h5 className="card-title">Mentions</h5>
        <p className="card-text">"Lawrence is one of the best front-end web developers I have ever worked with." 
          <div className='mention'>
            
            <p> <i> ~ Alfred Githinji</i> </p>
            <img src={Alfred} className="card-image-alfred" alt="..."/> 
          </div>
        </p>
        
      </div>
    
    </div>
  </div>
  
  <div className="col" id='cards'>
    <div className="card h-100">
      
      
      <div className="card-body">
        <h5 className="card-title">CONTRIBUTIONS 🎖️</h5>
        <p className="card-text">I am member and one the contibutors of this GDSC organization. </p>
        <img src={Gdsc}   className="card-image"   alt="..."></img>
        <button className = 'btn-main-offer'  ><a href="https://github.com/Dekut-GDSC-Web" id='gdsc'>Visit🔗</a> </button>
      </div>
     
    </div>
  </div>
</div>
    </div>
  )

}

export default About