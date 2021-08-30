import React from 'react';
import '../../Contact.css';
import profile from '../../images/profileresize.PNG'
import resume from '../resume/ericaresume.pdf';

export default function Contact() {

    return (
        <>
            <div className='contact'>
                <h1 className='contacthead'>Let's start something great.</h1>
                <div className="card">
                    <p>Have a question?
                        Let's get to know each other. How can I be useful to your service?
                        Please feel free to reach out to me. I would be delighted to answer all your questions or concerns</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>University of New Hampshire</p>
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
                    <a href="#"><i className="fa fa-github"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </>




    )
}