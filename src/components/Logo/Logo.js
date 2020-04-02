import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import brain from './Brain.png';

const Logo = () =>{
    return (
       <div className='ma4 mt0'>
            <Tilt className="Tilt br4 shadow-2"
            options={{ maxGlare: .5, maxTilt : 55, speed: 300}} 
            style={{ height: 150, width: 150}} 
            >
                <div className="Tilt-inner"> 
                    <img alt='logo' src={brain}/> 
                </div>
            </Tilt>
       </div>
    );
}

export default Logo;
