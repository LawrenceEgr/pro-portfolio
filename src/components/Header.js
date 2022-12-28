import React from 'react';
// import { Link } from 'react-router-dom';

import Typewriter from 'typewriter-effect';
import Bootstrap from '../logos/Bootstrap.jpg';
import Css from '../logos/css.png';
import Html from '../logos/Html.jpg';
import Javascript from '../logos/javascript.png';
import ReactJS from '../logos/react.jpg';
import Python from '../logos/python.png'
function Header() {
    return ( 
        <div className = 'header-wraper' >
            <div className = 'main-info' >
           
                <p>Do you want any of these services?you are in the right place</p>
                {/* Adding typed feature */}
                <Typewriter 
                    className = "typedtext"
                    options={{
                    strings: ["Web design", "Web Development", "Figma design", "UI design", "Landing Pages"],
                    autoStart: true,
                    loop: true,
                    }}
                />

            </div> 
            <div className='skills'>
                <div className='skill'>
                   <img className='skill-icon' src={ReactJS} alt="React"/>
                   <p className='skill-name' >ReactJS</p> 
                </div>
                <div className='skill'>
                   <img className='skill-icon' src={Javascript} alt="Javascript"/>
                   <p className='skill-name' >Javascript</p> 
                </div>
                <div className='skill'>
                   <img className='skill-icon' src={Bootstrap} alt="Bootstrap"/>
                   <p className='skill-name' >Bootstrap</p> 
                </div>
                <div className='skill'>
                   <img className='skill-icon' src={Css} alt="Css"/>
                   <p className='skill-name' >Css</p> 
                </div>
                <div className='skill'>
                   <img className='skill-icon' src={Html} alt="Html"/>
                   <p className='skill-name' >HTML</p> 
                </div>
                <div className='skill'>
                   <img className='skill-icon' src={Python} alt="python"/>
                   <p className='skill-name' >Python</p> 
                </div>
                
              
            </div>
        </div >
    )
    
}


export default Header