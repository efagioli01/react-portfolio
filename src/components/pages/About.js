import React from 'react';
import '../../About.css'
import profile from '../../images/profileresize.PNG'
import js from '../../images/skillsimg/JS.png'
import html from '../../images/skillsimg/html5.png'
import css from '../../images/skillsimg/css3.png'
import jquery from '../../images/skillsimg/jQuery.png'
import node from '../../images/skillsimg/nodeJS.png'
import express from '../../images/skillsimg/express.png'
import sql from '../../images/skillsimg/MySQL.jpg'
import mongo from '../../images/skillsimg/mongodb.png'
import all3 from '../../images/skillsimg/all3.png'
import npm from '../../images/skillsimg/npm.png'
import mern from '../../images/skillsimg/mern.jpg'
import github from '../../images/skillsimg/github.png'



import { Button } from '../Button'




export default function About() {
    return (

        <div className="aboutme">
            <h1 className='abouthead'>About me</h1>

            <p className='section'>

                <img id="profile" src={profile} />

                I am a full stack web development student at University of New Hampshire. Set to graduate in the coming months, I am eager to secure challenging roles in world of web development.
                My studies have provided me with broad proficiency in the use of coding methods, tools, software packages and techniques. Alongside this, I have been able to develop strong time management skills while studying and completing projects while working my full time management job. As such, I am confident that I can make an instant impact in web development roles.
                I am eager to learn about potential career opportunities, so I would be pleased to chat about job openings in the web development sphere. My key skills include: HTML5, CSS, JavaScript, jQuery, Bootstrap, React, MERN.

            </p>
            <h2 className='h2skill'>skills</h2>
            <section className='skillsection'>
               
                <span><img id="skills" src={js} /></span>
                <span><img id="skills" src={css} /></span>
                <span><img id="skills" src={html} /></span>
                <span><img id="skills" src={jquery} /></span>
                <span><img id="skills" src={node} /></span>
                <span><img id="skills" src={express} /></span>
                <span><img id="skills" src={sql} /></span>
                <span><img id="skills" src={mongo} /></span>
                <span><img id="all3" src={all3} /></span>
                <span><img id="skills" src={npm} /></span>
                <span><img id="skillsmern" src={mern} /></span>
                <span><img id="skills" src={github} /></span>
           



            </section>

            <div className='skills-btns'>
                <Button

                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'

                >
                    VIEW PROJECTS!
                </Button>
            </div>




        </div>





    )

}







