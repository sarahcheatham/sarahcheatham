import React from 'react';
import { Row, Col } from 'reactstrap';
import Icon from 'react-simple-icons';

const SocialIcons = () => {
    return (
        <Col className="icons">
            <a href="https://www.linkedin.com/in/sarahcheatham14/">
                <Icon size={46} name='linkedin' fill="#0077B5"/>
            </a>
            <a href="https://github.com/sarahcheatham">
                <Icon size={46} name='github' fill="#181717" />
            </a>
            <a href="mailto:sarah.cheatham14@gmail.com">
                <svg height={46} width={46} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail icon</title><path fill="#D14836" d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/></svg>
            </a>
        </Col>
    )
}

export default SocialIcons;