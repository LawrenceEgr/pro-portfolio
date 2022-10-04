import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import Typed from "react-typed";
/*

          
 */
function Header() {
    return ( 
        <div className = 'header-wraper' >
        <div className = 'main-info' >
        <h1> do you want a cool mobile responsive websites ?
            
            
        Great then you are in the right place </h1> 
        <>
        <Particles id = "tsparticles"
        className = "tsparticles-canvas"
        options = {
            {

                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 20,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#5dade2",
                    },
                    links: {
                        color: "#5dade2",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 1.2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "polygon",
                    },
                    size: {
                        random: true,
                        value: 10,
                    },
                },
                detectRetina: true,
            }
        }
        />


        {/* Adding typed feature */}


        <Typed className = "typed-text"
        strings = {
            ["Web design", "Web Development", "Web scraping", "UI design", "pentration testing"]
        }
        typeSpeed = { 40 }
        backSpeed = { 5 }
        loop>
        </Typed> 
        <Link className = 'btn-main-offer'
        to = { '/contact' } > contact me </Link> </
        > </div> 
        </div >
    )
    
}


export default Header