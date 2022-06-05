import React, { useEffect } from 'react';

var styles = {"easySliderShs1":"_styles-module__easySliderShs1__1uwTh","essSlide":"_styles-module__essSlide__17tem","essSliderCls":"_styles-module__essSliderCls__2Y-TT","essParalax":"_styles-module__essParalax__1E1nI","essNext":"_styles-module__essNext__290N2","essPrev":"_styles-module__essPrev__3_rel"};

const SimpleCarouselSlider = props => {
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

  const autoPlayWait = () => {
    const d = new Date();
    let time = d.getTime();
    AutoPlaySlideWaitTime = time + autoPlayTime;
  };

  const nextBtn = () => {
    const first_slide = document.getElementById("essFirst");
    const second_slide = document.getElementById("essSecond");

    const sld = () => {
      if (!parallax) {
        first_slide.style.transition = "0s";
        second_slide.style.transition = "0s";
        first_slide.style.transform = "translate3d(0%, 0px, 0px)";
        second_slide.style.transform = "translate3d(100%, 0px, 0px)";
      }

      second_slide.style.backgroundImage = `url(${images[currentSlide]})`;
      setTimeout(nextSlide, deley);
    };

    if (images.length > currentSlide + 1) {
      currentSlide++;
      sld();
    } else if (infinity) {
      currentSlide = 0;
      sld();
    }

    autoPlayWait();
  };

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
    };

    if (0 < currentSlide) {
      currentSlide--;
      sld();
    } else if (infinity) {
      currentSlide = images.length - 1;
      sld();
    }

    autoPlayWait();
  };

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
    }, 100);
  };

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
    }, 100);
  };

  useEffect(() => {
    const slideParrentDiv = document.getElementById("essSlide");
    const first_slide = document.getElementById("essFirst");
    const second_slide = document.getElementById("essSecond");
    slideParrentDiv.style.width = width;
    slideParrentDiv.style.height = height;
    first_slide.style.backgroundImage = `url(${images[currentSlide]})`;
    second_slide.style.backgroundImage = `url(${images[currentSlide]})`;

    if (slideAutoPlay) {
      setInterval(() => {
        const d = new Date();
        let currentTime = d.getTime();

        if (currentTime > AutoPlaySlideWaitTime) {
          nextBtn();
        }
      }, autoPlayTime);
    }
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: "easySliderShs1",
    className: styles.easySliderShs1
  }, /*#__PURE__*/React.createElement("div", {
    id: "essSlide",
    className: styles.essSlide
  }, /*#__PURE__*/React.createElement("div", {
    className: parallax ? `${styles.essParalax} ${styles.essSliderCls}` : styles.essSliderCls,
    id: "essFirst"
  }), /*#__PURE__*/React.createElement("div", {
    className: parallax ? `${styles.essParalax} ${styles.essSliderCls}` : styles.essSliderCls,
    id: "essSecond"
  })), /*#__PURE__*/React.createElement("div", {
    id: "essController"
  }, /*#__PURE__*/React.createElement("button", {
    id: "essNext",
    className: styles.essNext,
    onClick: nextBtn
  }, "  \u2B9C"), /*#__PURE__*/React.createElement("button", {
    id: "essPrev",
    className: styles.essPrev,
    onClick: prevBtn
  }, " \u2B9E ")));
};

export { SimpleCarouselSlider };
//# sourceMappingURL=index.modern.js.map
