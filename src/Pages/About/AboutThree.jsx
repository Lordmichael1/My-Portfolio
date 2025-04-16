import React from 'react'
import './AboutThree.css'
import HackathonPics from '../../assets/HackathonPics.jpg'

const AboutThree = () => {
  return (
    <div className='Parent'>
    <div className="HeroThree">
    <div className="About3pics">
      <img src={HackathonPics} alt="" />
    </div>
      <div className="AboutText3">
        <div className="Txt">
          <div className="TextCon" draggable>
            <p>For our final project at <a href="https://www.the-curve.africa/">The Curve Africa</a>, We were paired in group in preparation for our Hackathon</p><br></br>
            <p>My teammates and i come together and we were able to build a website called <a href="https://www.the-curve.africa/">"RentWave"</a>, where Landlord and tanant can interact, make rent payment, send maintaince request and add new tanant  </p>
            <p>We used React to build the UI, with redux, useState and useReducer for state management. for api consumption we used axios. </p>
            <p>Big thanks to my teammates for the cooperation, and determination to completing the our project.  </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutThree
