// Home.js

import React from 'react';
import '../CSSComponents/Home.css';
import profile from '../Images/mainPic.jpeg';

const Home = () => {
  return (
    <section id="home">
      {/* <div className="ball">R</div> */}
      <h1 >Welcome to My Portfolio</h1>
      <div className="pic-div">
        <img src={profile} alt="" />
        <h2>Rashid Ansari</h2>
        
      </div>
    </section>
  );
};

export default Home;
