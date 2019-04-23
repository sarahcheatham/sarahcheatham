import React from 'react';
import "./Education.css";

class Education extends React.Component{
    render(){
        return(
            <div className="projects">
               <h3 className="job-title">Austin Coding Academy<br/><i className="italics">Full Stack JavaScript Web Development</i></h3>
               <h3 className="dates">April 2018 - January 2019</h3>
               <p className="desc">MERN Stack Web Development</p>
               <h3 className="job-title">Texas State University<br/><i className="italics">Teacher and Curriculum Writer</i></h3>
               <h3 className="dates">August 2015 - Present</h3>
               <p className="desc">BS Interdisciplinary Studies with a minor in Art and Design</p>
               <p className="desc">30+ Post-BS hours in Studio Art with an emphasis in Painting</p>
            </div>
        );
    }
}

export default Education;