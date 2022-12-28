import React from 'react'
import Twitter from '../project images/Twitter_bot_traffic.jpg'


function Webdrivers() {
  return (
    <div>
         
     <div className="polaroid">
      <div className="project" style={{Width : 100 }}>
        <img src={Twitter} className="card-img-top hover-zoom" alt="Bootstrap Portfolio"/>
        <div className="container">
         <h5 className="card-title">Twitter Bot <span className="badge badge-secondary">Individual project</span></h5>
         <p className="card-text">This bot enables you to automate your twitter activities. Just run the program and take a rest, you will wake up to find a large number of new followers 👌</p>
        {/* <a href="https://mimitraining.netlify.app/"  className="btn btn-primary mt-2">View project</a> */}
         <a href="https://github.com/LawrenceEgr/Twitter_Login_Bot"  className="btn btn-primary mt-2"><i className='fab fa-github'></i></a>
        </div>
      </div>
	   </div>
	 
    </div>
  )
}

export default Webdrivers