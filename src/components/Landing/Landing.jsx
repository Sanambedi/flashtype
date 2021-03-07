import React from 'react';
import  Typewriter  from 'typewriter-effect';
import flash from "../../assests/flash.png"
import "./Landing.css";

const Landing = () => {
    return ( 
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type...</h1>
                <div className="typewriter-container">
                    <Typewriter
                        options = {{
                            strings:["Fast?",'Correct?','Quick?'],
                            autoStart: true,
                            loop:true,
                        }}
                    />
                </div>
            </div>
            <div data-aos="fade-left" className="landing-right">
                <img 
                    className="flash-image"
                    src={flash}
                    alt="hero"
                />
            </div>
        </div>    
    );
}
 
export default Landing;