import React from 'react';
import "./Projects.css";
import arraynge from '../../images/arraynge.png';

class Arraynge extends React.Component{
    render(){
        return(
            <div className="arraynge">
                <div className="arrayngeContent">
                    <h2 id="arrayngeHeader"><a href="http://arraynge.herokuapp.com">Arraynge</a></h2>
                    <h4 id="arrayngeSubHeader"><i>Capstone Project</i></h4>
                    <p className="arrayngeDesc">A full-stack web application made for Kindergarten through Eighth grade teachers to allow teachers the ability to enter students test scores, sort students from high-to-low based on their test scores and then arrange students into leveled groups. </p>
                    <p className="arrayngeDesc">Built using React.js for the front-end, Node.js and Express.js for the back-end, and MongoDB for the database.</p>
                </div>
                <img
                    src={arraynge}
                    alt="arraynge"
                    id="arrayngeimg"
                />
            </div>
        );
    }
}

export default Arraynge;