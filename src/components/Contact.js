import React from 'react';
import '../css/Contact.css';

function Contact() {
    return (
        <div id="contact" className="contact-page">
            <h2 className="contact-heading">Contact</h2>
            <div className="icons">
                <div className="email">
                    <a href="mailto:minh100@live.unc.edu"><i className="fas fa-envelope-square"></i> Outlook</a>
                    
                </div>
                <div className="linkedin">
                    <a href="www.linkedin.com/in/minh100"><i className="fab fa-linkedin"></i> Linkedin</a>

                </div>
                <div className="github">
                    <a href="https://github.com/minh100"><i className="fab fa-github-square"></i> Github</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;