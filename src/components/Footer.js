import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          EMAIL ME
        </p>
        <p className='footer-subscription-text'>
          LETS CONNECT
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>SEND</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h2>Social Media</h2>

            <a href="https://www.linkedin.com/in/erica-fagioli-00535216a/">linkedin</a>
            <a href="https://github.com/efagioli01">Github </a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              
              
            </Link>
          </div>
          <small class='website-rights'>ERICA FAGIOLI © 2021</small>
          <div class='social-icons'>


            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <a href="https://www.linkedin.com/in/erica-fagioli-00535216a/"><i class='fab fa-linkedin' /></a>

            </Link>
            <Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <a href="https://github.com/efagioli01"><i class='fab fa-github'/></a>

            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;