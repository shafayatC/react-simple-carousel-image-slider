import React, { useEffect } from 'react';

import styles from './styles.module.css'



export const SimpleCarouselSlider = (props) => {

    var images = props.images;
    var width = props.width ? props.width : "100%";
    var height = props.height ? props.height : "500px";
    var duration = props.duration ? props.duration : "0.7s";
    var deley = props.deley ? props.deley : 100;
    var infinity = props.infinity == false ? false : true;
    var slideAutoPlay = props.autoplay == false ? false : true;
    var autoPlayTime = props.autplayDelay ? props.autplayDelay : 3000;
    var parallax = props.parallax == true ? true : false;
    var currentSlide = 0;
    var AutoPlaySlideWaitTime = 0;

    // Auto play delay time func
    const autoPlayWait = () => {

        const d = new Date();
        let time = d.getTime();

        AutoPlaySlideWaitTime = time + autoPlayTime

    }
    // next slide 
    const nextBtn = () => {

        const first_slide = document.getElementById("essFirst");
        const second_slide = document.getElementById("essSecond");

        const sld = () => {
            // if parallax true then stop left right movement
            if (!parallax) {
                first_slide.style.transition = "0s";
                second_slide.style.transition = "0s";
                first_slide.style.transform = "translate3d(0%, 0px, 0px)";
                second_slide.style.transform = "translate3d(100%, 0px, 0px)";
            }
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

        autoPlayWait()
    }

    // previous slide 
    const prevBtn = () => {

        const first_slide = document.getElementById("essFirst");
        const second_slide = document.getElementById("essSecond");

        const sld = () => {

            if (!parallax) {
                first_slide.style.transition = "0s";
                second_slide.style.transition = "0s";
                first_slide.style.transform = "translate3d(0%, 0px, 0px)";
                second_slide.style.transform = "translate3d(-100%, 0px, 0px)";
            }

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

        autoPlayWait()

    }

    const nextSlide = () => {

        const first_slide = document.getElementById("essFirst");
        const second_slide = document.getElementById("essSecond");

        first_slide.style.transition = duration;
        second_slide.style.transition = duration;

        if (!parallax) {
            first_slide.style.transform = "translate3d(-100%, 0px, 0px)";
            second_slide.style.transform = "translate3d(0%, 0px, 0px)";
        }

        setTimeout(() => {
            first_slide.style.backgroundImage = `url(${images[currentSlide]})`;
        }, 100)

    }


    const prevSlide = () => {

        const first_slide = document.getElementById("essFirst");
        const second_slide = document.getElementById("essSecond");

        first_slide.style.transition = duration;
        second_slide.style.transition = duration;
        
        if (!parallax) {
            first_slide.style.transform = "translate3d(100%, 0px, 0px)";
            second_slide.style.transform = "translate3d(0%, 0px, 0px)";
        }

        setTimeout(() => {
            first_slide.style.backgroundImage = `url(${images[currentSlide]})`;
        }, 100)

    }

    useEffect(() => {
        // html finder
        const slideParrentDiv = document.getElementById("essSlide")
        const first_slide = document.getElementById("essFirst");
        const second_slide = document.getElementById("essSecond");


        // parrent style
        slideParrentDiv.style.width = width;
        slideParrentDiv.style.height = height;

        // slider 
        first_slide.style.backgroundImage = `url(${images[currentSlide]})`;
        second_slide.style.backgroundImage = `url(${images[currentSlide]})`;

        // autoplay 

        if (slideAutoPlay) {

            setInterval(() => {

                // current milisecond time
                const d = new Date();
                let currentTime = d.getTime();

                if (currentTime > AutoPlaySlideWaitTime) {
                    nextBtn();
                }

            }, autoPlayTime);

        }

    }, [])
    return (

        <div id="easySliderShs1" className={styles.easySliderShs1}>

            <div id="essSlide" className={styles.essSlide}>
                <div className={parallax ? `${styles.essParalax} ${styles.essSliderCls}` : styles.essSliderCls} id="essFirst"></div>
                <div className={parallax ? `${styles.essParalax} ${styles.essSliderCls}` : styles.essSliderCls} id="essSecond"></div>
            </div>
            <div id="essController">
                <button id="essNext" className={styles.essNext} onClick={nextBtn}>  ⮜</button>
                <button id="essPrev" className={styles.essPrev} onClick={prevBtn}> ⮞ </button>
            </div>

        </div>
    );
};

