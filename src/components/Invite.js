import React from 'react'
import './invitefriends.css'

const Invite = () => {
  return (
<div className="bcontainer">
    <div className="contact-box">
      <div className="left"></div>
      <div className="right">
        <h2>Contact Us</h2>
        <input type="text" className="field" placeholder="Phone" />
        <textarea placeholder="Message" className="field"></textarea>
        <button className="btn">Send</button>
      </div>
    </div>
  </div>
    )

}

export default Invite
