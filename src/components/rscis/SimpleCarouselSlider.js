import React, { useEffect } from 'react';
import './style.css';




const SimpleCarouselSlider = (props) => {

/*
    var images = [
        require('./img/1.jpg'),
        require('./img/2.jpg'),
        require('./img/4.jpg'),
        require('./img/6.jpg')
    ];
*/
console.log(props)
    var images = props.images;
    var width = props.width ? props.width :  "100%";
    var height = props.height ? props.height : "500px";
    var duration =  props.duration ? props.duration :"0.7s";
    var deley =  props.deley ? props.deley : 100;
    var infinity =  props.infinity ? props.infinity : true;
    var slideAutoPlay =  props.autoplay == false ? props.autoplay : true; 
    var autoPlayTime = props.autplayDelay ? props.autplayDelay : 3000; 

    var currentSlide = 0;

console.log(slideAutoPlay)
    // next slide 
    const nextBtn = () => {

        const first_slide = document.getElementById("essFirst");
        const second_slide = document.getElementById("essSecond");

        const sld = () => {

            first_slide.style.transition = "0s";
            second_slide.style.transition = "0s";
            first_slide.style.transform = "translate3d(0%, 0px, 0px)";
            second_slide.style.transform = "translate3d(100%, 0px, 0px)";
            second_slide.style.backgroundImage = `url(${images[currentSlide]})`;

            setTimeout(nextSlide, deley);
        }

        if (images.length > currentSlide + 1) {
            currentSlide++;
            sld();
        } else if (infinity) {
            currentSlide = 0;
            sld();
        }

    }

    // previous slide 
    const prevBtn = () => {

        const first_slide = document.getElementById("essFirst");
        const second_slide = document.getElementById("essSecond");

        const sld = () => {

            first_slide.style.transition = "0s";
            second_slide.style.transition = "0s";
            first_slide.style.transform = "translate3d(0%, 0px, 0px)";
            second_slide.style.transform = "translate3d(-100%, 0px, 0px)";
            second_slide.style.backgroundImage = `url(${images[currentSlide]})`;

            setTimeout(prevSlide, deley);
        }


        if (0 < currentSlide) {
            currentSlide--;
            sld();
        } else if (infinity) {
            currentSlide = images.length - 1;
            sld();
        }

    }

    const nextSlide = () => {

        const first_slide = document.getElementById("essFirst");
        const second_slide = document.getElementById("essSecond");

        first_slide.style.transition = duration;
        second_slide.style.transition = duration;
        first_slide.style.transform = "translate3d(-100%, 0px, 0px)";
        second_slide.style.transform = "translate3d(0%, 0px, 0px)";

        setTimeout(() => {
            first_slide.style.backgroundImage = `url(${images[currentSlide]})`;
        }, 100)

    }


    const prevSlide = () => {

        const first_slide = document.getElementById("essFirst");
        const second_slide = document.getElementById("essSecond");

        first_slide.style.transition = duration;
        second_slide.style.transition = duration;
        first_slide.style.transform = "translate3d(100%, 0px, 0px)";
        second_slide.style.transform = "translate3d(0%, 0px, 0px)";

        setTimeout(() => {
            first_slide.style.backgroundImage = `url(${images[currentSlide]})`;
        }, 100)

    }

    useEffect(() => {
        // html finder
        const slideParrentDiv = document.getElementById("essSlide")
        const first_slide = document.getElementById("essFirst");


        // parrent style
        slideParrentDiv.style.width = width;
        slideParrentDiv.style.height = height;

        // slider 
        first_slide.style.backgroundImage = `url(${images[currentSlide]})`;

        // autoplay 

        if(slideAutoPlay){

            setInterval(()=>{
                nextBtn(); 
            },autoPlayTime);
    
        }

    }, [])
    return (
        <>

            <div id="easySliderShs1">

                <div id="essSlide">
                    <div className="essSliderCls" id="essFirst"></div>
                    <div className="essSliderCls" id="essSecond"></div>
                </div>
                <div id="essController">
                    <button id="essNext" onClick={nextBtn}>  ⮜</button>
                    <button id="essPrev" onClick={prevBtn}> ⮞ </button>
                </div>

            </div>
        </>
    );
};

export default SimpleCarouselSlider;