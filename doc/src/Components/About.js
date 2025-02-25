import React from 'react'
import image from "../images/about.png"

function About() {
  return (    
    <div className="card card-side bg-base-100 shadow-xl">
    <figure>
      <img
        src={image}
        alt="Movie" />
    </figure>
    <div className="card-body">
        <button></button>
      <h2 className="card-title">Good Services And Better
      Health By Our Specialists</h2>
      <p>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
      <p>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed 
        in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
    </div>
  )
}

export default About