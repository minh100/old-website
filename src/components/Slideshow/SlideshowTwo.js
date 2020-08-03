import React, { useState, useEffect } from 'react';
import '../../css/SlideshowTwo.css';

function SlideshowTwo({ interval = 3000 }) {
    const [pictures, setPictures] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    const images = [
        require('../../images/Fam.jpg'),
        require('../../images/3boys.jpg'),
        require('../../images/Haku.jpg'),

    ]

    useEffect(() => {
        setPictures(images);
        setCurrentSlideStyle({
            backgroundImage: "url('" + images[currentSlide] + "')"
        });
        const loop = setInterval(() => {
            if (currentSlide === images.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }, interval);
        return () => clearInterval(loop);
    }, [currentSlide, interval]);

    function previous() {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(pictures.length - 1);
        }
    }

    function next() {
        if (currentSlide === pictures.length - 1) {
            setCurrentSlide(0);
        }
        else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    return (

        <section className="slideshow">
            <div className="slide-holder">
                <section className="slide current-slide">
                    <div style={currentSlideStyle} className="slide-thumbnail"></div>
                </section>
            </div>
            <div className="slideshow-controller">
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </section>
    );
}

export default SlideshowTwo;