import React from 'react';
import "./Projects.css";
import arraynge from '../../images/arraynge.png';

class Arraynge extends React.Component{
    render(){
        return(
            <div className="arraynge">
                <h2 className="arrayngeHeader"><a href="http://arraynge.herokuapp.com">Arraynge</a></h2>
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