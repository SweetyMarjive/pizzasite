import React from 'react'
import restroImg from '../assets/restroImg.jpg'
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
        <div 
        className="aboutTop"
        style={{backgroundImage:`url(${restroImg})`}}
       ></div>
            <h1>ABOUT US</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Quo provident nulla, ad ullam deserunt sed vel aliquid quae voluptatem tempore debitis a tenetur nostrum veniam,
                  ducimus error temporibus beatae veritatis facilis distinctio.
                   Molestiae ad voluptate dolorem distinctio minus voluptatem quasi unde,
                    veritatis rem enim beatae. Amet temporibus vitae tenetur cumque!
            </p>

        </div>
      
   
  )
}

export default About
