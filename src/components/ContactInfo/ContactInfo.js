import React from 'react';
import "./ContactInfo.css";

class ContactInfo extends React.Component{
    render(){
        return (
            <div className="contactinfo">
                <h1 id="contactinfoheader">Contact Info:</h1>
                <h2 id="resume" className="linkHeader">PDF Resume</h2>
                <p id="email">Email: sarah.cheatham14@gmail.com</p>
                <p id="phone">Phone: (281) 961 - 6790</p>
                {/* <h2 className="linkHeader">
                    <a href="https://github.com/sarahcheatham">sarah cheatham</a>
                </h2> */}
            </div>
        )
    }

}

export default ContactInfo;
    