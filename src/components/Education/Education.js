import React from 'react';
import "./Education.css";

class Education extends React.Component{
    render(){
        return(
            <div className="edu">
               <h3 className="school">Austin Coding Academy<br/><i className="italics">Full Stack JavaScript Web Development</i></h3>
               <h3 className="dates">April 2018 - January 2019</h3>
               <p className="school-desc">Proficient in MongoDB, Mongoose.js, Express.js, Node.js, React, and Redux</p>
               <h3 className="school">Texas State University<br/><i className="italics">Teacher and Curriculum Writer</i></h3>
               <h3 className="dates">August 2015 - Present</h3>
               <p className="school-desc">BS in Interdisciplinary Studies</p>
               <p className="school-desc">Post Baccalaureate Studies: 30+ hours in Studio Art with an emphasis in Painting</p>
            </div>
        );
    }
}

export default Education;