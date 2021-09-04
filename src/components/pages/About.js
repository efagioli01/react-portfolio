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


                Exceptionally creative and dependable Web Developer with a stellar customer service record and superb work ethic. Deeply knowledgeable in a wide variety of computer languages, user interface, and debugging processes as well as the principles and techniques of website construction and maintenance. Equipped with a diverse and promising skill set. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.

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







