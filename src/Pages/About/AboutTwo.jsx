import React from 'react'
import './AboutTwo.css'
import pics from '../../assets/Certificate.png'

const AboutTwo = () => {
  return (
    <div className='Wrapper'>
      <div className="HeroTwo">
        <div className="AboutText2">
          <div className="AboutLowerTxt">
            <div className="Aboutpag" draggable>
              <p>I decided to remove Michael Godwin from the skill, so i started my own graphics based brand "Quick Effect Graphics". I got a graphic design job, fully remote with <a href="https://www.the-curve.africa/">Eazytranz Exchange</a></p><br></br>
              <p>Around December 2023, I heard about this software engineering school <a href="https://www.the-curve.africa/">The Curve Africa</a>, I applied and got in, started receiving lectures April 2024.</p>
              <p>I was based on learning frontend development. After the six month intensive program i got my certification</p>
            </div>
          </div>
        </div>
        <div className="Aboutpics">
          <img src={pics} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutTwo
