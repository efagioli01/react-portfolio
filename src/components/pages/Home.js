import React from 'react';
import { Button } from '../Button'
import '../../HeroSection.css'

function Home() {
  return (
    <div className='hero-container'>
       
      <h1>Hello, I'm Erica!</h1>
      <p>Full Stack Web Developer working remotely out of Fort Myers, FL! </p>
      {/* <p>who has a passion for creating dynamic websites and applications. </p> */}
     
      <div className='hero-btns'>
        <Button
        
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
        >
          EXPLORE!
        </Button>
        
        
      </div>
    </div>
  );
}

export default Home;