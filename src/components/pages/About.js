import React from 'react';
import '../../App.css';
import profile from '../../images/profileresize.PNG'




export default function About() {
    return (

        <div className="aboutme">
            <span><img id="profile" src={profile} /></span>
            <div className="row">
                <div className="col-sm-9">
                    <h1 >ABOUT ME</h1>
                    <br></br>
                    <br></br>
                    <h3 > I am a full stack web development student at University of New Hampshire. Set to graduate in the coming months, I am eager to secure challenging roles in world of web development.<p></p></h3>
                    <h3 > My studies have provided me with broad proficiency in the use of coding methods, tools, software packages and techniques.<p></p> Alongside this, I have been able to develop strong time management skills while studying and completing projects while working my full time management job. As such, I am confident that I can make an instant impact in web development roles.<p></p>
                        <p></p>I am eager to learn about potential career opportunities, so I would be pleased to chat about job openings in the web development sphere. My key skills include: HTML5, CSS, JavaScript, jQuery, Bootstrap, React, MERN.
                    </h3>
                </div>
                <div className="col-sm-3">
                </div>
            </div>
        </div>

    )

}







