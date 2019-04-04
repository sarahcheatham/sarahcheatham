import React from 'react';
import "./Work.css";

class WorkHeader extends React.Component{
    render(){
        return(
            <div className="work">
                <h1 id="workH1">work.</h1>
                <div id="pinkBar"></div>
            </div>
        );
    }
}

export default WorkHeader;