import React from 'react';
import "./Work.css";

class Work extends React.Component{
    render(){
        return(
            <div className="experiences">
               <h3 className="job-title">Austin Coding Academy<br/><i className="italics">JavaScript Tutor</i></h3>
               <h3 className="dates">Decemeber 2018 - Present</h3>
               <p className="desc">
                    Responsible for instructing students in a 1:1 or group setting with a variety of topics based on skill level.<br/>
                    These topics include HTML, CSS, foundational javascript and logic problems, building terminal games using Node.js, building small applications in React.js, and building servers using Express.js.
                </p>
                <h3 className="job-title">Harmony Science Academy Austin<br/><i className="italics">Teacher and Curriculum Writer</i></h3>
               <h3 className="dates">August 2015 - Present</h3>
               <p className="desc">
                    Kindergarten ESL Teacher and Math Curriculum Writer for Hamony kindergarten teachers state-wide. <br/>
                    Experience using data to better implement instruction, and helped to improve kindergarten within my own classroom, within my grade level team and district team.
                </p>
            </div>
        );
    }
}

export default Work;