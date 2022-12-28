import React from 'react'
import Auction from "../project images/Investors2.png"
import Physic from "../project images/1.png" 

import Amazon from '../project images/Amazon.png'
import BillCalculator from '../project images/BillCalculator.png'
import Calculator from '../project images/Calculator.png'


function Web() {
  return (
    <div className='projects'>
        
	 	
			<div className="polaroid">
				<img className="project" src={Auction} alt="auction" />
				<div className="container">
				 <h5 className="card-title">Auction Page <span className="badge badge-secondary">Team project</span></h5>
				 <p className="card-text">Investors dashboard has minimal functionality but it emulates a real business management platform for keeping track of business transactions</p>
				 <a href="https://lawrenceegr.github.io/Investor-s-Dashboard/"  className="btn btn-primary mt-2">View</a>
				 <a href="https://github.com/LawrenceEgr/Investor-s-Dashboard"  className="btn btn-primary mt-2" style={{Padding:'left 20px'}} ><i className='fab fa-github'></i></a>
		   
				</div>
			</div>
			
				
	   
		 <div className="polaroid" style={{Width : 100 }}>
		   <img src={Physic} className="project" alt="Bootstrap Portfolio"/>
		   <div className="container">
			 <h5 className="card-title">Physical Health Goal tracker <span className="badge badge-secondary">Individual project</span></h5>
			 <p className="card-text">Physic Health is a good tool to keep the records of your goal towards achieving a healthy life.</p>
			 <a href="https://mimitraining.netlify.app/"  className="btn btn-primary mt-2">View</a>
			 <a href="https://github.com/LawrenceEgr/React-physicHealth"  className="btn btn-primary mt-2"><i className='fab fa-github'></i></a>
		   </div>
		 </div>
	   
	   
		 <div className="polaroid" style={{Width : 100 }}>
		   <img src={BillCalculator} className="project " alt="Bootstrap Portfolio"/>
		   <div className="container">
			 <h5 className="card-title">Bill Tip Calculator<span className="badge badge-secondary">Individual Project</span></h5>
			 <p className="card-text">Helps you to estimated the billa and amount to be paid by each individual.</p>
			 <a href="https://lawrenceegr.github.io/Bill-Tip-Calculator/"  className="btn btn-primary mt-2">View</a>
			 <a href="https://github.com/LawrenceEgr/Bill-tip-Calculator"  className="btn btn-primary mt-2" style={{Padding:'left 20px'}} ><i className='fab fa-github'></i></a>
		   </div>
		 </div>
	   
	   
		 <div className="polaroid" style={{Width : 100  }}>
		   <img src={Calculator} className="project" alt="Bootstrap Portfolio"/>
		   <div className="container">
			 <h5 className="card-title">Calculator<span className="badge badge-secondary">Individual project</span></h5>
			 <p className="card-text">Does simple mathematical operations.</p>
			 <a href="https://lawrenceegr.github.io/Calculator/"  className="btn btn-primary "> View</a>
			 <a href="https://github.com/LawrenceEgr/Calculator"  className="btn btn-primary mt-2"><i className='fab fa-github'></i></a>
		   </div>
		 </div>
	   
	  
       
	   
		 <div className="polaroid" style={{Width : 100  }}>
		   <img src={Amazon} className="project " alt="Bootstrap Portfolio"/>
		   <div className="container">
			 <h5 className="card-title">Amazon Home Page <span className="badge badge-secondary">Team project</span></h5>
			 <p className="card-text">This website mimics the actual home page for Amazon_ecommerce website.</p>
			 {/* <a href="https://github.com/LawrenceEgr/Amazon_ecommerce"  className="btn btn-primary mt-2">View</a> */}
			 <a href="https://github.com/LawrenceEgr/Amazon_ecommerce"  className="btn btn-primary mt-2"><i className='fab fa-github'></i></a>
		   </div>
		 </div>
	   
       
	 </div>
    
  )
}

export default Web