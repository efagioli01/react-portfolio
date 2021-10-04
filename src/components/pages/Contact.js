import React from 'react';
import '../../Contact.css';
import profile from '../../images/profileresize.PNG'
import resume from '../resume/ericaresume.pdf';

export default function Contact() {

    return (
        <>


{/* <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="" class="card-link">Card link</a>
    <a href="" class="card-link">Another link</a>
  </div>
</div> */}
            <div className='contact'>
                <h1 className='contacthead'>Let's start something great.</h1>
                <div className="card">
                    <p>From design to execution, each new project presents the opportunity to push limits creatively and technically. 
                        Your site will be beautiful and highly usable all while being built with clean, semantic code. This results in fast
                        loading sites, improved accessibility, simplified maintenance and lower costs. 

                    </p>
                    <br></br>
                    <br></br>
                    <p>Get in touch!</p>
                </div>

                <div className="card">
                    <h1 className='contactheader'>Feel free to call, email, or connect with me on linkedin!</h1>
                    <br></br>
                    <p>Take a look at my <a className='resume' href={resume} download>Resume</a></p>
                    <br></br>
                    <p><a href="tel:6173208514">617-320-8514</a></p>
                    <br></br>
                    <p><a href="mailto:efagioli01@gmail.com">efagioli01@gmail.com</a></p>
                    <br></br>
                    <a href="https://github.com/efagioli01"><i className="fa fa-github"></i></a>
                    <a href="https://linkedin.com/in/erica-fagioli"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </>




    )
}