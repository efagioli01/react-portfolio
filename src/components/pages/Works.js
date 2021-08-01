import React from 'react';
import '../../App.css';
import mask from '../../images/mask.PNG';
import food from '../../images/findmefood.PNG';
import fitness from '../../images/fitness.PNG';
import weather from '../../images/weather.PNG';
import workday from '../../images/workday.PNG';
import tech from '../../images/tech.PNG';



export default function Works() {
    return (
        <div className="container">

            <div className="card">
                <img id='projects' src={mask} alt="maskeraid project" />
                <p><strong>MASKER-AID</strong></p>
                <div className="container">
                    <a href="https://github.com/abalcs/Masker-Aid" target="_blank"><p class='style'>GITHUB REPOSITORY</p></a>
                </div>
            </div>
            <br></br>

            <div className="container-fluid text-center bg-grey">
                <div className="card2">
                    <img id='projects' src={food} alt="find me food project" />
                    <p><strong>FIND ME FOOD</strong></p>
                    <div className="container">
                        <a href="https://unh-bootcamp-projects.github.io/project-1-group-c/" target="_blank"><p class='style'>GITHUB REPOSITORY</p></a>
                    </div>
                </div>
                <br></br>

                <div className="card3">
                    <img id='projects' src={fitness} alt="fitness tracker" />
                    <p><strong>FITNESS TRACKER</strong></p>
                    <div className="container">
                        <a href="https://github.com/efagioli01/Fitness-tracker" target="_blank"><p class='style'>GITHUB REPOSITORY</p></a>
                    </div>
                </div>
                <br></br>

                <div className="card4">
                    <img id='projects' src={weather} alt="weather dashboard" />
                    <p><strong>WEATHER DASHBOARD</strong></p>
                    <div className="container">
                        <a href="https://efagioli01.github.io/Weather-Dashboard" target="_blank"><p class='style'>GITHUB REPOSITORY</p></a>
                    </div>
                </div>
                <br></br>

                <div className="card5">
                    <img id='projects' src={workday} alt="workday scheduler" />
                    <p><strong>WORKDAY SCHEDULER</strong></p>
                    <div className="container">
                        <a href="https://github.com/efagioli01/Work-Day-Scheduler-Code-Refactor" target="_blank"><p class='style'>GITHUB REPOSITORY</p></a>
                    </div>
                </div>
                <br></br>

                <div className="card">
                    <img id='projects' src={tech} alt="tech blog/mvc" />
                    <p><strong>TECH BLOG/MVC</strong></p>
                    <div className="container">
                        <a href="https://github.com/efagioli01/Tech-Blog" target="_blank"><p class='style'>GITHUB REPOSITORY</p></a>
                    </div>
                </div>


            </div>
        </div>


    )

}

