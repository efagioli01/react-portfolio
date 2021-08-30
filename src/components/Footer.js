import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import resume from './resume/ericaresume.pdf'

function Footer() {
  return (

    <div className='footer'>
      <h4 className="heading4">ERICA FAGIOLI © 2021</h4>
      <div className='footer-container'>

        <Link
          className='social-icon-link linkedin'
          to='/'
          target='_blank'
          aria-label='LinkedIn'
        >
          <a href="https://www.linkedin.com/in/erica-fagioli-00535216a/"><i class='fab fa-linkedin' /></a>

        </Link>


        <Link
          className='social-icon-link github'
          to='/'
          target='_blank'
          aria-label='Github'
        >
          <a href="https://github.com/efagioli01"><i class='fab fa-github' /></a>

        </Link>

        <Link
          className='social-icon-link Email'
          to='/'
          target='_blank'
          aria-label='Email'
        >
          <a href="mailto:efagioli01@gmail.com"><i class='fas fa-envelope-square' /></a>

        </Link>

        <Link
          className='social-icon-link Resume'
          to='/'
          target='_blank'
          aria-label='Resume'
        >
          <a href={resume} download><i class="far fa-file"></i></a>

        </Link>


      </div>

    </div>

  );
}

export default Footer;