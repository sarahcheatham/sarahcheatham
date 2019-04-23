import React from 'react';
import "./Education.css";

class EducationHeader extends React.Component{
    render(){
        return(
            <div className="educationContainer">
                <h1 id="educationH1">education.</h1>
                <div id="yellowBar"></div>
            </div>
        );
    }
}

export default EducationHeader;