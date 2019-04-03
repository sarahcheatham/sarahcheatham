import React from 'react';
import "./Projects.css";
import method from '../../images/method.png';
import Icon from 'react-simple-icons';

class JSCheats extends React.Component{
    render(){
        return(
            <div className="jscheats">
                <div className="jscheatsContent">
                    <h2 id="jscheatsHeader"><a href="https://js-cheats.now.sh">JS Cheats</a></h2>
                    <h4 id="jscheatsSubHeader"><i>Group Project</i></h4>
                    <p className="jscheatsDesc">A web application built using React and Redux on the front-end, Mongoose and a MongoDB database for the blog on the back-end, and passport for authentication.</p>
                    <p className="jscheatsDesc">As a group we built this project to better aide student’s who are beginning to learn javascript the ability to quickly navigate through javascript properties and methods to help with projects or whiteboarding.</p>
                    <Icon size={26} name='github' fill="#181717" className="github-icon2"/><a href="https://github.com/sarahcheatham/js-cheats"><code>GitHub Source</code></a>
                </div>
                <a href="https://js-cheats.now.sh" className="jscheatsimg">
                    <img
                        src={method}
                        alt="JS Cheats"
                        id="jscheatsimg"
                    />
                </a>
            </div>
        );
    }
}

export default JSCheats;