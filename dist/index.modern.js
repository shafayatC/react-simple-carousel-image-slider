import React, { useEffect } from 'react';

var styles = {"easySliderShs1":"_styles-module__easySliderShs1__1uwTh","essSlide":"_styles-module__essSlide__17tem","essSliderCls":"_styles-module__essSliderCls__2Y-TT","essParalax":"_styles-module__essParalax__1E1nI","essNext":"_styles-module__essNext__290N2","essPrev":"_styles-module__essPrev__3_rel","essSliderThumb":"_styles-module__essSliderThumb__3LCYW","essThumbButton":"_styles-module__essThumbButton__3T2Tv","essThumbImg":"_styles-module__essThumbImg__-B1Qt"};

const SimpleCarouselSlider = ({
  images,
  width: _width = "100%",
  height: _height = "500px",
  duration: _duration = "0.7s",
  deley: _deley = 100,
  infinity: _infinity = true,
  autoplay: _autoplay = true,
  autoPlayTime: _autoPlayTime = 3000,
  parallax: _parallax = false,
  responsive,
  thumb: _thumb = false
}) => {
  var currentSlide = 0;
  var AutoPlaySlideWaitTime = 0;

  const autoPlayWait = () => {
    const d = new Date();
    let time = d.getTime();
    AutoPlaySlideWaitTime = time + _autoPlayTime;
  };

  const nextBtn = () => {
    const first_slide = document.getElementById("essFirst");
    const second_slide = document.getElementById("essSecond");

    const sld = () => {
      if (!_parallax && first_slide != null && second_slide != null) {
        first_slide.style.transition = "0s";
        second_slide.style.transition = "0s";
        first_slide.style.transform = "translate3d(0%, 0px, 0px)";
        second_slide.style.transform = "translate3d(100%, 0px, 0px)";
      }

      second_slide != null ? second_slide.style.backgroundImage = `url(${images[currentSlide]})` : '';
      setTimeout(nextSlide, _deley);
    };

    if (images.length > currentSlide + 1) {
      currentSlide++;
      sld();
    } else if (_infinity) {
      currentSlide = 0;
      sld();
    }

    autoPlayWait();
  };

  const prevBtn = () => {
    const first_slide = document.getElementById("essFirst");
    const second_slide = document.getElementById("essSecond");

    const sld = () => {
      if (!_parallax && first_slide != null && second_slide != null) {
        first_slide.style.transition = "0s";
        second_slide.style.transition = "0s";
        first_slide.style.transform = "translate3d(0%, 0px, 0px)";
        second_slide.style.transform = "translate3d(-100%, 0px, 0px)";
      }

      second_slide != null ? second_slide.style.backgroundImage = `url(${images[currentSlide]})` : '';
      setTimeout(prevSlide, _deley);
    };

    if (0 < currentSlide) {
      currentSlide--;
      sld();
    } else if (_infinity) {
      currentSlide = images.length - 1;
      sld();
    }

    autoPlayWait();
  };

  const nextSlide = () => {
    const first_slide = document.getElementById("essFirst");
    const second_slide = document.getElementById("essSecond");
    first_slide != null ? first_slide.style.transition = _duration : '';
    second_slide != null ? second_slide.style.transition = _duration : '';

    if (!_parallax && first_slide != null && second_slide != null) {
      first_slide.style.transform = "translate3d(-100%, 0px, 0px)";
      second_slide.style.transform = "translate3d(0%, 0px, 0px)";
    }

    setTimeout(() => {
      first_slide != null ? first_slide.style.backgroundImage = `url(${images[currentSlide]})` : '';
    }, 100);
  };

  const prevSlide = () => {
    const first_slide = document.getElementById("essFirst");
    const second_slide = document.getElementById("essSecond");
    first_slide != null ? first_slide.style.transition = _duration : '';
    second_slide != null ? second_slide.style.transition = _duration : '';

    if (!_parallax && first_slide != null && second_slide != null) {
      first_slide.style.transform = "translate3d(100%, 0px, 0px)";
      second_slide.style.transform = "translate3d(0%, 0px, 0px)";
    }

    setTimeout(() => {
      first_slide.style.backgroundImage = `url(${images[currentSlide]})`;
    }, 100);
  };

  const eesThumbonClick = imgIndex => {
    console.log(imgIndex);
    currentSlide = imgIndex;
    const first_slide = document.getElementById("essFirst");
    const second_slide = document.getElementById("essSecond");

    const sld = () => {
      if (!_parallax && first_slide != null && second_slide != null) {
        first_slide.style.transition = "0s";
        second_slide.style.transition = "0s";
        first_slide.style.transform = "translate3d(0%, 0px, 0px)";
        second_slide.style.transform = "translate3d(100%, 0px, 0px)";
      }

      second_slide != null ? second_slide.style.backgroundImage = `url(${images[currentSlide]})` : '';
      setTimeout(nextSlide, _deley);
    };

    sld();
    autoPlayWait();
  };

  useEffect(() => {
    if (responsive != undefined) {
      for (let i = 0; i < responsive.length; i++) {
        console.log(i);
        var media_query = "";

        if (i > 0) {
          media_query = `screen and (min-width:${responsive[i - 1].breakPoint}px) and (max-width:${responsive[i].breakPoint}px)`;
        } else {
          media_query = `screen and  (max-width:${responsive[i].breakPoint}px)`;
        }

        var matched = window.matchMedia(media_query).matches;

        if (matched) {
          if (responsive[i].height != undefined) {
            _height = responsive[i].height;
          }

          if (responsive[i].width != undefined) {
            _width = responsive[i].width;
          }

          if (responsive[i].parallax != undefined) {
            _parallax = responsive[i].parallax;
          }

          if (responsive[i].duration != undefined) {
            _duration = responsive[i].duration;
          }

          if (responsive[i].autoplay != undefined) {
            _autoplay = responsive[i].autoplay;
          }
        }
      }
    }

    const slideParrentDiv = document.getElementById("essSlide");
    const first_slide = document.getElementById("essFirst");
    const second_slide = document.getElementById("essSecond");
    slideParrentDiv != null ? slideParrentDiv.style.width = _width : '';
    slideParrentDiv != null ? slideParrentDiv.style.height = _height : '';
    first_slide != null ? first_slide.style.backgroundImage = `url(${images[currentSlide]})` : '';
    second_slide != null ? second_slide.style.backgroundImage = `url(${images[currentSlide]})` : '';

    if (_autoplay) {
      setInterval(() => {
        const d = new Date();
        let currentTime = d.getTime();

        if (currentTime > AutoPlaySlideWaitTime) {
          nextBtn();
        }
      }, _autoPlayTime);
    }
  }, [images]);
  return /*#__PURE__*/React.createElement("div", {
    id: "easySliderShs1",
    className: styles.easySliderShs1
  }, /*#__PURE__*/React.createElement("div", {
    id: "essSlide",
    className: styles.essSlide
  }, /*#__PURE__*/React.createElement("div", {
    className: _parallax ? `${styles.essParalax} ${styles.essSliderCls}` : styles.essSliderCls,
    id: "essFirst"
  }), /*#__PURE__*/React.createElement("div", {
    className: _parallax ? `${styles.essParalax} ${styles.essSliderCls}` : styles.essSliderCls,
    id: "essSecond"
  })), /*#__PURE__*/React.createElement("div", {
    id: "essController"
  }, /*#__PURE__*/React.createElement("button", {
    id: "essPrev",
    className: styles.essPrev,
    onClick: prevBtn
  }, "  \u2B9C"), /*#__PURE__*/React.createElement("button", {
    id: "essNext",
    className: styles.essNext,
    onClick: nextBtn
  }, " \u2B9E ")), _thumb && /*#__PURE__*/React.createElement("div", {
    id: "essSliderThumb",
    className: styles.essSliderThumb
  }, images.map((data, index) => /*#__PURE__*/React.createElement("button", {
    className: styles.essThumbButton,
    onClick: () => eesThumbonClick(index)
  }, /*#__PURE__*/React.createElement("img", {
    className: styles.essThumbImg,
    src: data
  })))));
};

export { SimpleCarouselSlider };
//# sourceMappingURL=index.modern.js.map
