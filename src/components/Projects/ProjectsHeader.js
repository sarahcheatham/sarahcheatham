import React from 'react';
import "./Projects.css";

class ProjectHeader extends React.Component{
    render(){
        return(
            <div className="workcontainer">
                <div id="yellowBar"></div>
                <h1 id="projectsH1">resume.</h1>
            </div>
        );
    }
}

export default ProjectHeader;