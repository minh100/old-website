import React from 'react';
import SlideShowTwo from './Slideshow/SlideshowTwo.js';


import '../css/About.css';

function About() {

    return (

        <div id="about" className="About-page">
            <div className="about-heading">
                <h2>About Me</h2>
            </div>
            <div className="about-text">
                <p>
                    Hello my name is Minh Truong and I am currently in my 2nd year at the University of North Carolina at Chapel Hill.
                    I am pursuing a Bachelor of Science in Computer Science. 
                    Although, I am still figuring out which field of CS I would like to pursue, this project was my little stab at web development.
                    Aside from CS I enjoy being social and being with friends.
                    Some things I like to do with or without friends is play games (video/board), play volleyball, learn and enjoy Korean culture, and watch horror movies (only with friends).
                    


                </p>
            </div>
            <div className="about-pictures">
                <SlideShowTwo />
            </div>
        </div>
    );


}

export default About;