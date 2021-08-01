import React from 'react';
import '../../App.css';
import resume from '../resume/ericaresume.pdf';

export default function Contact() {
    
    return (
       
        <div className="contact">
            <div className="row">
                <div className="col-sm-9">
                    <h1 >CONTACT ME </h1>
                    <ul class="drop">
                        <li class='list'><i class="fas fa-envelope-square"></i><a class='text' href="mailto:efagioli01@gmail.com">Email</a></li>
                        <li class='list'><i class="fas fa-phone"></i><a class='text' href="tel:6173208514">Telephone</a></li>
                        <li class='list'><i class='fab fa-github'></i><a class='text' href="https://github.com/efagioli01">Github </a></li>
                        <li class='list'><i class='fab fa-linkedin'/><a class='text' href="https://www.linkedin.com/in/erica-fagioli-00535216a/">linkedin</a></li>
                        <a class='lists' href={resume} download>Resume</a>
                       
                    
                    </ul>

                </div>
                <div className="col-sm-3">

                </div>
            </div>
        </div>

    )
}