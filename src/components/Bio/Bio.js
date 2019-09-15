import React from 'react';
import Sarah from '../../images/gravatar.JPG';
import "./Bio.css";
import Icon from 'react-simple-icons';
import ContactInfo from "../ContactInfo/ContactInfo";
import BioInfo from './BioInfo';
import SocialIcons from '../SocialIcons/SocialIcons'
import { Container, Row, Col } from 'reactstrap';
import background from '../../images/background.jpg';

class Bio extends React.Component{
    render(){
        return(
            <Row className="Bio">
                <div id="name" className="name">Sarah Cheatham</div>
                <img src={background} alt="background-image" width="100%"/>
                <BioInfo/>
                <ContactInfo/>
                <SocialIcons/>
            </Row>
        )
    }
}

export default Bio;