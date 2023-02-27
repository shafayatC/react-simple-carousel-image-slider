import React, { useEffect } from 'react';

import styles from './styles.module.css'



export const SimpleCarouselSlider = ({ images, width = "100%", height = "500px", duration = "0.7s", deley = 100, infinity = true, autoplay = true, autoPlayTime = 3000, parallax = false, responsive, thumb = false }) => {

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
            if (!parallax && first_slide != null && second_slide != null) {
                first_slide.style.transition = "0s";
                second_slide.style.transition = "0s";
                first_slide.style.transform = "translate3d(0%, 0px, 0px)";
                second_slide.style.transform = "translate3d(100%, 0px, 0px)";
            }

            second_slide != null ? second_slide.style.backgroundImage = `url(${images[currentSlide]})` : '';

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

            if (!parallax && first_slide != null && second_slide != null) {
                first_slide.style.transition = "0s";
                second_slide.style.transition = "0s";
                first_slide.style.transform = "translate3d(0%, 0px, 0px)";
                second_slide.style.transform = "translate3d(-100%, 0px, 0px)";
            }

            second_slide != null ? second_slide.style.backgroundImage = `url(${images[currentSlide]})` : '';

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

        first_slide != null ? first_slide.style.transition = duration : '';
        second_slide != null ? second_slide.style.transition = duration : '';

        if (!parallax && first_slide != null && second_slide != null) {
            first_slide.style.transform = "translate3d(-100%, 0px, 0px)";
            second_slide.style.transform = "translate3d(0%, 0px, 0px)";
        }

        setTimeout(() => {
            first_slide != null ? first_slide.style.backgroundImage = `url(${images[currentSlide]})` : '';
        }, 100)

    }


    const prevSlide = () => {

        const first_slide = document.getElementById("essFirst");
        const second_slide = document.getElementById("essSecond");

        first_slide != null ? first_slide.style.transition = duration : '';
        second_slide != null ? second_slide.style.transition = duration : '';

        if (!parallax && first_slide != null && second_slide != null) {
            first_slide.style.transform = "translate3d(100%, 0px, 0px)";
            second_slide.style.transform = "translate3d(0%, 0px, 0px)";
        }

        setTimeout(() => {
            first_slide.style.backgroundImage = `url(${images[currentSlide]})`;
        }, 100)

    }

    const eesThumbonClick = (imgIndex) => {
        console.log(imgIndex)
        currentSlide = imgIndex;

        const first_slide = document.getElementById("essFirst");
        const second_slide = document.getElementById("essSecond");

        const sld = () => {
            // if parallax true then stop left right movement
            if (!parallax && first_slide != null && second_slide != null) {
                first_slide.style.transition = "0s";
                second_slide.style.transition = "0s";
                first_slide.style.transform = "translate3d(0%, 0px, 0px)";
                second_slide.style.transform = "translate3d(100%, 0px, 0px)";
            }

            second_slide != null ? second_slide.style.backgroundImage = `url(${images[currentSlide]})` : '';

            setTimeout(nextSlide, deley);
        }

        sld();

        autoPlayWait()
    }

    useEffect(() => {

        if (responsive != undefined) {

            for (let i = 0; i < responsive.length; i++) {
                console.log(i)
                var media_query = "";
                if (i > 0) {
                    media_query = `screen and (min-width:${responsive[i - 1].breakPoint}px) and (max-width:${responsive[i].breakPoint}px)`;
                } else {
                    media_query = `screen and  (max-width:${responsive[i].breakPoint}px)`;
                }

                // matched or not
                var matched = window.matchMedia(media_query).matches;

                if (matched) {
                    if (responsive[i].height != undefined) {
                        height = responsive[i].height;
                    }
                    if (responsive[i].width != undefined) {
                        width = responsive[i].width;
                    }
                    if (responsive[i].parallax != undefined) {
                        parallax = responsive[i].parallax;
                    }
                    if (responsive[i].duration != undefined) {
                        duration = responsive[i].duration;
                    }
                    if (responsive[i].autoplay != undefined) {
                        autoplay = responsive[i].autoplay;
                    }
                }

            }
        }

        // html finder
        const slideParrentDiv = document.getElementById("essSlide")
        const first_slide = document.getElementById("essFirst");
        const second_slide = document.getElementById("essSecond");


        // parrent style

        slideParrentDiv != null ? slideParrentDiv.style.width = width : '';
        slideParrentDiv != null ? slideParrentDiv.style.height = height : '';

        // slider 
        first_slide != null ? first_slide.style.backgroundImage = `url(${images[currentSlide]})` : '';
        second_slide != null ? second_slide.style.backgroundImage = `url(${images[currentSlide]})` : '';

        // autoplay 

        if (autoplay) {

            setInterval(() => {

                // current milisecond time
                const d = new Date();
                let currentTime = d.getTime();

                if (currentTime > AutoPlaySlideWaitTime) {
                    nextBtn();
                }

            }, autoPlayTime);

        }

    }, [images])

    return (

        <div id="easySliderShs1" className={styles.easySliderShs1}>

            <div id="essSlide" className={styles.essSlide}>
                <div className={parallax ? `${styles.essParalax} ${styles.essSliderCls}` : styles.essSliderCls} id="essFirst"></div>
                <div className={parallax ? `${styles.essParalax} ${styles.essSliderCls}` : styles.essSliderCls} id="essSecond"></div>
            </div>
            <div id="essController">
                <button id="essPrev" className={styles.essPrev} onClick={prevBtn}>  ⮜</button>
                <button id="essNext" className={styles.essNext} onClick={nextBtn}> ⮞ </button>
            </div>
            {
            thumb &&
                <div id="essSliderThumb" className={styles.essSliderThumb}>
                    {images.map((data, index) =>
                        <button className={styles.essThumbButton} onClick={() => eesThumbonClick(index)}>
                            <img className={styles.essThumbImg} src={data} />
                        </button>
                    )}
                </div>
                }

        </div>
    );
};
