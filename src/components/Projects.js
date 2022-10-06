import React from 'react';
import Auction from "../project images/Investors2.png"
import Physic from "../project images/1.png" 
import Amazon from '../project images/Amazon.png'
// import $ from 'jquery'


function Projects() {
  return (
           <div> 
			{/* <b>THE FOLLOWING ARE THE MOST PERSONAL PROJECTS I WORKED ON :</b> */}
			
		   {/* <div className="row">
			   <div className="col-xl-6 col-sm-6 " id='auction'
				//    Style={{Width: "400px !important" }}
			   >
				   <img className='img-thumbnail hover-zoom' src={Auction}  alt='aouction'/>
			   </div>
			   
			   <div className="col-xl-6 col-sm-6" id='physic'>
				   <img className=' img-thumbnail hover-zoom' src={Physic} alt='physic' />
			   </div>
		   </div> */}
			{/* <!-- Hero stage --> */}
   <header className="jumbotron jumbotron-fluid">
   <section className="container">
	 <h1 className="display-4">My Projects</h1>
	 <p className="lead detail-lead">Here is a collection of a my digital projects. Feel free to check them out! By clicking on <i><b>View Project</b></i> you will be directed to the respective website.</p>
   </section>
	</header>
	<div className="container">
    <b><h2>Featured projects :</h2></b>
	<br></br>
	<hr></hr>
	<br></br>
	 <div className="row">
	   <div className="col-sm-6 mb-3">
		 <div className="card" style={{Width : 100 }}>
		   <img src={Auction} className="card-img-top hover-zoom " alt="Bootstrap Portfolio"/>
		   <div className="card-body">
			 <h5 className="card-title">Auction Page <span className="badge badge-secondary">Team project</span></h5>
			 <p className="card-text">Investors dashboard has minimal functionality but it emulates a real business management platform for keeping track of business transactions</p>
			 <a href="https://lawrenceegr.github.io/Investor-s-Dashboard/"  className="btn btn-primary mt-2">View Project</a>
			 <a href="https://github.com/LawrenceEgr/Investor-s-Dashboard"  className="btn btn-primary mt-2" style={{Padding:'left 20px'}} >View Github <i className='fab fa-github'></i></a>
		   </div>
		 </div>
	   </div>
	   <div className="col-sm-6 mb-3">
		 <div className="card" style={{Width : 100 }}>
		   <img src={Physic} className="card-img-top hover-zoom" alt="Bootstrap Portfolio"/>
		   <div className="card-body">
			 <h5 className="card-title">Physical Health Goal tracker <span className="badge badge-secondary">Individual project</span></h5>
			 <p className="card-text">Physic Health is a good tool to keep the records of your goal towards achieving a healthy life.</p>
			 <a href="https://mimitraining.netlify.app/"  className="btn btn-primary mt-2">View project</a>
			 <a href="https://github.com/LawrenceEgr/React-physicHealth"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		   </div>
		 </div>
	   </div>
	 </div> 
	 <div className="row">
	   <div className="col-sm-6 mb-3">
		 <div className="card" style={{Width : 100 }}>
		   <img src={Amazon} className="card-img-top hover-zoom " alt="Bootstrap Portfolio"/>
		   <div className="card-body">
			 <h5 className="card-title">Amazon Home Page <span className="badge badge-secondary">Team project</span></h5>
			 <p className="card-text">This website mimics the actual home page for Amazon_ecommerce website.</p>
			 {/* <a href="https://github.com/LawrenceEgr/Amazon_ecommerce"  className="btn btn-primary mt-2">View Project</a> */}
			 <a href="https://github.com/LawrenceEgr/Amazon_ecommerce"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		   </div>
		 </div>
	   </div>
	   {/* <div className="col-sm-6 mb-3">
		 <div className="card" style={{Width : 100 }}>
		   <img src={Physic} className="card-img-top hover-zoom" alt="Bootstrap Portfolio"/>
		   <div className="card-body">
			 <h5 className="card-title">Physical Health Goal tracker <span className="badge badge-secondary">Individual project</span></h5>
			 <p className="card-text">Physic Health is a good tool to keep the records of your goal towards achieving a healthy life.</p>
			 <a href="https://mimitraining.netlify.app/"  className="btn btn-primary mt-2">View project</a>
			 <a href="https://github.com/LawrenceEgr/React-physicHealth"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		   </div>
		 </div>
	   </div> */}
	 </div>

	 
  
{/* <!-- Featured projects --> */}
 <div className="description-end"></div>
 {/*
{/* <!-- Project selector --> */}
 {/* <div className="container mb-5">
   <div className="description-end"></div>
   <h3 className="mt-5">All projects</h3>
   <div className="row">
	 <div className="col-sm-4 mb-3">
	   <div className="card" style={{Width : 100 }}>
		 <img src={Auction} className="card-img-top hover-zoom" alt="Bootstrap Portfolio"/>
		 <div className="card-body">
		   <h5 className="card-title">Personal website <span className="badge badge-secondary">Own project</span></h5>
		   <p className="card-text">My personal website was the first project I worked on.</p>
		   <a href="https://marcelthiemann.com"  className="btn btn-primary mt-2">View Project</a>
		   <a href="https://github.com/cestmarcel/cestmarcel.github.io"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		 </div>
	   </div>
	 </div>
	 <div className="col-sm-4 mb-3">
	   <div className="card" style={{Width : 100 }}>
		 <img src={Auction} className="card-img-top hover-zoom" alt="Password Generator"/>
		 <div className="card-body">
		   <h5 className="card-title">Password generator <span className="badge badge-secondary">U of T</span></h5>
		   <p className="card-text">A simple password generator written in JavaScript to generate a secure password.</p>
		   <a href="https://marcelthiemann.com/uoft-password-generator"  className="btn btn-primary mt-2">View project</a>
		   <a href="https://github.com/cestmarcel/uoft-password-generator"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		 </div>
	   </div>
	 </div>
	 <div className="col-sm-4 mb-3">
	   <div className="card" style={{Width : 100 }}>
		 <img src={Auction} className="card-img-top hover-zoom" alt="Daily Planner"/>
		 <div className="card-body">
		   <h5 className="card-title">Daily planner <span className="badge badge-secondary">U of T</span></h5>
		   <p className="card-text">A simple daily schedule planner written in JavaScript.</p>
		   <a href="https://marcelthiemann.com/uoft-planner"  className="btn btn-primary mt-2">View Project</a>
		   <a href="https://github.com/cestmarcel/uoft-planner"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		 </div>
	   </div>
	 </div>
   </div>
   <div className="row">
	 <div className="col-sm-4 mb-3">
	   <div className="card" style={{Width : 100 }}>
		 <img src={Auction} className="card-img-top hover-zoom" alt="Bootstrap Portfolio"/>
		 <div className="card-body">
		   <h5 className="card-title">Weather dashboard <span className="badge badge-secondary">U of T</span></h5>
		   <p className="card-text">A weather app for basic weather info and forecast.</p>
		   <a href="https://marcelthiemann.com/uoft-weather"  className="btn btn-primary mt-2">View Project</a>
		   <a href="https://github.com/cestmarcel/uoft-weather"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		 </div>
	   </div>
	 </div>
	 <div className="col-sm-4 mb-3">
	   <div className="card" style={{Width : 100 }}>
		 <img src={Auction} lassName="card-img-top hover-zoom" alt="Bootstrap Portfolio"/>
		 <div className="card-body">
		   <h5 className="card-title">CLI readme generator <span className="badge badge-secondary">U of T</span></h5>
		   <p className="card-text">A command line application to easily create a quality readme.</p>
		   <a href="https://github.com/cestmarcel/uoft-readme-generator"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		 </div>
	   </div>
	 </div>
	 <div className="col-sm-4 mb-3">
	   <div className="card" style={{Width : 100 }}>
		 <img src={Auction} ssName="card-img-top hover-zoom" alt="Bootstrap Portfolio"/>
		 <div className="card-body">
		   <h5 className="card-title">CLI template engine <span className="badge badge-secondary">U of T</span></h5>
		   <p className="card-text">A command line application to generate an html team overview.</p>
		   <a href="https://github.com/cestmarcel/uoft-template-engine"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		 </div>
	   </div>
	 </div>
   </div>
   <div className="row">
	 <div className="col-sm-4 mb-3">
	   <div className="card" style={{Width : 100 }}>
		 <img src={Auction}assName="card-img-top hover-zoom" alt="Bootstrap Portfolio"/>
		 <div className="card-body">
		   <h5 className="card-title">Notes app <span className="badge badge-secondary">U of T</span></h5>
		   <p className="card-text">A simple application to write, view, and delete notes.</p>
		   <a href="https://stark-ravine-91812.herokuapp.com/"  className="btn btn-primary mt-2">View Project</a>
		   <a href="https://github.com/cestmarcel/uoft-notes"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		 </div>
	   </div>
	 </div>
	 <div className="col-sm-4 mb-3">
	   <div className="card" style={{Width : 100 }}>
		 <img src={Auction}className="card-img-top hover-zoom" alt="Bootstrap Portfolio"/>
		 <div className="card-body">
		   <h5 className="card-title">Employee tracker <span className="badge badge-secondary">U of T</span></h5>
		   <p className="card-text">A simple application for managing a company's employees using node, inquirer, and MySQL.</p>
		   <a href="https://github.com/cestmarcel/uoft-employee-tracker"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		 </div>
	   </div>
	 </div>
	 <div className="col-sm-4 mb-3">
	   <div className="card" style={{Width : 100 }}>
		 <img src={Auction} className="card-img-top hover-zoom" alt="Daily Planner"/>
		 <div className="card-body">
		   <h5 className="card-title">Burger restaurant app</h5>
		   <p className="card-text">An application to display menu items, built with MySQL and Express Handlebars.</p>
		   <a href="https://damp-caverns-25501.herokuapp.com/"  className="btn btn-primary mt-2">View Project</a>
		   <a href="https://github.com/cestmarcel/uoft-handlebars"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		 </div>
	   </div>
	 </div>
   </div>
   <div className="row">
	 <div className="col-sm-4 mb-3">
	   <div className="card" style={{Width : 100 }}>
		 <img src={Auction} className="card-img-top hover-zoom" alt="Bootstrap Portfolio"/>
		 <div className="card-body">
		   <h5 className="card-title">JavaScript Quiz <span className="badge badge-secondary">U of T</span></h5>
		   <p className="card-text">A quiz about JavaScript written in JavaScript.</p>
		   <a href="https://marcelthiemann.com/uoft-quiz"  className="btn btn-primary mt-2">View Project</a>
		   <a href="https://github.com/cestmarcel/uoft-quiz"  className="btn btn-primary mt-2">View Github <i className='fab fa-github'></i></a>
		 </div>
	   </div>
	 </div>
   </div>
 </div> */}

{/* <!-- Spacer --> */}
 <section className="spacer"></section>


{/* 
 <!-- Script to enable tooltip functionality --> */}
  {/* <script>
   $(function () {
	   $('[data-toggle="tooltip"]').tooltip({
	   container: 'body'
   })
   })
   </script> */}
   </div>  

   </div>
		
			



  )
}

export default Projects