import React from 'react';
import '../../Works.css'
import '../../App'
import { Link } from "react-router-dom";

import js from '../../images/skillsimg/JS.png'
import html from '../../images/skillsimg/html5.png'
import css from '../../images/skillsimg/css3.png'
import jquery from '../../images/skillsimg/jQuery.png'
import node from '../../images/skillsimg/nodeJS.png'
import express from '../../images/skillsimg/express.png'
import sql from '../../images/skillsimg/MySQL.jpg'
import mongo from '../../images/skillsimg/mongodb.png'
import react from '../../images/skillsimg/React.png'
import npm from '../../images/skillsimg/npm.png'
import mern from '../../images/skillsimg/mern.jpg'
import github from '../../images/skillsimg/github.png'
import all3 from '../../images/skillsimg/all3.png'




export default function Works() {
    return (

        <>


            <section id="projects" className='hideSection'>
                <div class="section-container">
                    <div class="title">
                        <h1 id="projectTitleName"> Projects</h1>
                    </div>

                    <div class="main-content">
                        <menu id="buttons-menu">
                            {/* <button><a className="btns" buttonStyle="btn--outline" buttonSize='btn--large' href="/works" target="_blank">FRONT END</a></button>
                            <button><a className="btns" buttonStyle="btn--outline" buttonSize='btn--large' href="/works" target="_blank">MERN</a></button>
                            <button><a className="btns" buttonStyle="btn--outline" buttonSize='btn--large' href="/works" target="_blank">FULL STACK</a></button> */}

                        </menu>

                        
                            <div class="row frontend-projects">
                                <div class="dotted col-md-6">

                                    <div class="project-item food"></div>
                                </div>

                                <div class="col-md-6">
                                    <h4 id="project-name">Find Me Food</h4>

                                    <p className='project-info'>Find Me Food application pulls a user's location from their IP address and feeds it into Google Maps to populate a list of nearby restaurants.</p>


                                    <div class="skills">
                                        <h2>Technologies</h2>
                                        <span><img id="skills" src={js} /></span>
                                        <span><img id="skills" src={css} /></span>
                                        <span><img id="skills" src={html} /></span>
                                    </div>

                                    <div class="btn-links">
                                        <a id="demo" class="btn btn-success" href="https://unh-bootcamp-projects.github.io/project-1-group-c/" target="_blank">Demo</a>
                                        <a id="github" class="btn btn-info" href="https://github.com/efagioli01/Find-Me-Food-Application"
                                            target="_blank">GitHub</a>
                                    </div>

                                </div>
                            </div>
                        

                        <div class="row mern-projects">

                            <div class="dotted col-md-6">
                                <div class="project-item codebr"></div>
                            </div>

                            <div class="col-md-6">
                                <h4 id="project-name">Code Break</h4>

                                <p className='project-name'>Code Break was created with React and the MVC paradigm. It includes GraphQL with a Node.js and Express.js server. A MongoDB with the Mongoose ODM was implemented for the database. Queries and mutations for creating, retrieving, adding, updating, and deleting data. JSON Web Tokens (JWT) were used for authentication. The application allows users to share and create code snippets.</p>

                                <div class="skills">
                                    <span><img id="skills" src={js} /></span>
                                    <span><img id="skills" src={node} /></span>
                                    <span><img id="skills" src={express} /></span>
                                    <span><img id="skills" src={mongo} /></span>
                                    <span><img id="all3" src={all3} /></span>




                                </div>

                                <div class="btn-links">
                                    <a id="demo" class="btn btn-success" href="https://code-br.herokuapp.com/" target="_blank">Demo</a>
                                    <a id="github" class="btn btn-info" href="https://github.com/efagioli01/Code-Break-Application" target="_blank">GitHub</a>
                                </div>


                            </div>

                        </div>

                        {/* <div class="row mern-projects">
                            <div class="dotted col-md-6">
                                <h4 id="project-name">Virtual GBooks</h4>
                                <p className='project-name'>jndhuhfdhfhdfhl</p>


                                <div class="skills">

                                    <span><img id="skills" src={css} /></span>
                                    <span><img id="skills" src={html} /></span>
                                    <span><img id="skills" src={jquery} /></span>
                                    <span><img id="skills" src={node} /></span>
                                    <span><img id="skills" src={express} /></span>
                                    <span><img id="skills" src={sql} /></span>
                                    <span><img id="skills" src={mongo} /></span>
                                    <span><img id="skills" src={react} /></span>
                                    <span><img id="skills" src={npm} /></span>
                                    <span><img id="skillsmern" src={mern} /></span>
                                    <span><img id="skills" src={github} /></span>

                                </div>

                                <div class="btn-links">
                                    <a id="demo" class="btn btn-success" href="https://virtualgbooks.herokuapp.com/" target="_blank">Demo</a>
                                    <a id="github" class="btn btn-info" href="https://github.com/kalmontee/windex" target="_blank">GitHub</a>
                                </div>

                            </div>
                            <div class="col-md-6">

                                <div class="project-item maskeraid"></div>
                            </div>
                        </div> */}


                        <div class="row fullStack-projects">
                            <div class="project-item maskeraid"></div>
                            <div class="dotted col-md-6">
                                <h4 id="project-name">Masker Aid</h4>
                                <p className='project-name'>About
                                    The Face Mask Info app is an application that allows the user to add mask status updates to businesses in their area and save the information to a database.</p>
                                <div class="skills">


                                    <span><img id="skills" src={js} /></span>
                                    <span><img id="skills" src={jquery} /></span>
                                    <span><img id="skills" src={node} /></span>
                                    <span><img id="skills" src={express} /></span>
                                    <span><img id="skills" src={sql} /></span>
                                    <span><img id="skills" src={npm} /></span>



                                </div>

                                <div class="btn-links">
                                    <a id="demo" class="btn btn-success" href="https://github.com/abalcs/Masker-Aid/deployments/activity_log" target="_blank">Demo</a>
                                    <a id="github" class="btn btn-info" href="https://github.com/efagioli01/Masker-Aid-Face-Mask-Application" target="_blank">GitHub</a>
                                </div>

                            </div>



                        </div>



                    </div>


                </div>



            </section>


        </>












    )

}

