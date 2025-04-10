import React from 'react'
import './About.css'
import AboutTwo from '../../Pages/About/AboutTwo'
import AboutThree from './AboutThree'

const About = () => {
  return (
    <>
        <div className='AboutContainer'>
            <div className="AboutHero">
                <div className="Aboutpicture"></div>
                <div className="AboutText">
                    <div className="AboutUpperText">
                        <h1>About Me</h1>
                    </div>
                    <div className="AboutLowerText">
                        <div className="Aboutpag">
                            <p>My name is Michael Ifakachukwu Godwin, from Delta State, Nigeria.</p> <br></br>
                            <p>I grew up with the love for tech, so i started with graphic design, smartphone graphic design in particular. This was around 2020 when i had no Laptop to work with, so i just used my phone, From that to learning Smartphone video editing, i started hosting classes to earn some pocket money for myself and i was able to buy myself a laptop to work with.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AboutTwo />
        <AboutThree />
    </>
    
  )
}

export default About
