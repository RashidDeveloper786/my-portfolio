// Contact.js

import React from 'react';
import { useState } from 'react';
import '../CSSComponents/Contact.css';
import linkedin from '../Images/linkedin-pic.png';
import github from '../Images/github-pic.png';
import insta from '../Images/instagram-pic.png';
const Contact = () => {

  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    
    if(message.length===0)
    {
      alert("write something then submit...")
    }
    else{
      setMessage('');
      const showAlert = () => {
        alert('message sent to Rashid..');
      };
      setTimeout(showAlert, 2000);
      
    }
    
    
  };
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        Let's connect! Feel free to reach out if you have any questions, collaboration ideas,
        or just want to chat about web development.
      </p>
      <div className="message">
      <textarea id="textarea" maxLength={500} cols="30" rows="10" placeholder='write something.....' value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
      <div className="contact-details">
        <p id="email">Email: ra125601123@gmail.com</p>
        <p id='follow'>You Can Follow me on : </p>
        <div className="source">
          <a href="https://www.linkedin.com/in/rashid-ansari-4a24362b9/"><img src={linkedin} alt="" /></a>
          <a href="https://github.com/RashidDeveloper786"><img src={github} alt="" /></a>
          <a href="https://www.instagram.com/rashidansari326/"><img src={insta} alt="" /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// https://www.linkedin.com/in/rashid-ansari-4a24362b9/
// https://github.com/RashidDeveloper786