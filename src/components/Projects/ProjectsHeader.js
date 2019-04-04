import React from 'react';
import "./Projects.css";

class ProjectHeader extends React.Component{
    render(){
        return(
            <div className="projectsContainer">
                <h1 id="projectsH1">projects.</h1>
                <div id="yellowBar"></div>
            </div>
        );
    }
}

export default ProjectHeader;