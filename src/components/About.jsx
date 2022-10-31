import React from 'react'
import { FaGlobeAmericas, FaHeadset, FaBookOpen } from 'react-icons/fa';
import { BsFillArrowDownCircleFill } from "react-icons/bs"

const About = () => {
  return (
    <article className='container p-3'>

      <h1 className='text-center'>ABOUT US</h1>

      <div className='row text-center d-flex justify-content-center'>
      <i className="fas fa-globe-americas fa-2x"></i>
      <h4>Online Courses</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus magni distinctio, dolorum labore quasi et nobis animi sit blanditiis explicabo possimus perferendis veniam nam consequuntur cupiditate similique ullam maxime?</p>
      </div>

      <div>
       <i className="fas fas fa-headset fa-2x"></i>
      <h4>Full-time Mentoring</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus magni distinctio, dolorum labore quasi et nobis animi sit blanditiis explicabo possimus perferendis veniam nam consequuntur cupiditate similique ullam maxime?</p>
      </div>

      <div>
      <i className="BsFillArrowDownCircleFill"></i>
      <h4>Learn Yourself</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus magni distinctio, dolorum labore quasi et nobis animi sit blanditiis explicabo possimus perferendis veniam nam consequuntur cupiditate similique ullam maxime?</p>
      </div>

    </article>
  )
}

export default About
