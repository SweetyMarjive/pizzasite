import React from 'react'
import "../styles/Contact.css"

import contactimg from"../assets/contactimg.png"

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactimg})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name" className='lname'>Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email" className='em'>Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message" className='msg'>Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact