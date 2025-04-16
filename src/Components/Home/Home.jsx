import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='MainContainer'>
      <div className="Hero">
        <div className="text">
          <div className="upperText" draggable>
            <h1>I'm Michael Godwin</h1>
          </div>
          <div className="lowerText">
            <div className="pag" draggable>
              <p>I'm a Front-end Developer, Graphic Designer & Video Editor</p>
              <p>Got my first Software engineering certification at <a href="https://www.the-curve.africa/">The Curve Africa</a></p>
            </div>
            <Link to="/projects" className='btn'>View my Works <IoIosArrowForward /></Link>
          </div>
        </div>
        <div className="picture">
        </div>
      </div>
    </div>
  )
}

export default Home
