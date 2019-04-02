import React from 'react';
import "./Projects.css";
import method from '../../images/method.png';

class JSCheats extends React.Component{
    render(){
        return(
            <div className="jscheats">
               <h2 className="jscheatsHeader"><a href="https://js-cheats.now.sh">JS Cheats</a></h2>
               <img
                    src={method}
                    alt="JS Cheats"
                    id="jscheatsimg"
                />
            </div>
        );
    }
}

export default JSCheats;