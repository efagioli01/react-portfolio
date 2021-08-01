import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
       
      <h1>ERICA FAGIOLI</h1>
     
      <div className='hero-btns'>
        <Button
        
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
        >
          EXPLORE MY WORK
        </Button>
        
        
      </div>
    </div>
  );
}

export default HeroSection;