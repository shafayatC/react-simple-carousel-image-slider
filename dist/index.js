function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"easySliderShs1":"_styles-module__easySliderShs1__1uwTh","essSlide":"_styles-module__essSlide__17tem","essSliderCls":"_styles-module__essSliderCls__2Y-TT","essParalax":"_styles-module__essParalax__1E1nI","essNext":"_styles-module__essNext__290N2","essPrev":"_styles-module__essPrev__3_rel","essSliderThumb":"_styles-module__essSliderThumb__3LCYW","essThumbButton":"_styles-module__essThumbButton__3T2Tv","essThumbImg":"_styles-module__essThumbImg__-B1Qt"};

var SimpleCarouselSlider = function SimpleCarouselSlider(_ref) {
  var images = _ref.images,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? "100%" : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? "500px" : _ref$height,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? "0.7s" : _ref$duration,
      _ref$deley = _ref.deley,
      deley = _ref$deley === void 0 ? 100 : _ref$deley,
      _ref$infinity = _ref.infinity,
      infinity = _ref$infinity === void 0 ? true : _ref$infinity,
      _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === void 0 ? true : _ref$autoplay,
      _ref$autoPlayTime = _ref.autoPlayTime,
      autoPlayTime = _ref$autoPlayTime === void 0 ? 3000 : _ref$autoPlayTime,
      _ref$parallax = _ref.parallax,
      parallax = _ref$parallax === void 0 ? false : _ref$parallax,
      responsive = _ref.responsive,
      _ref$thumb = _ref.thumb,
      thumb = _ref$thumb === void 0 ? false : _ref$thumb;
  var currentSlide = 0;
  var AutoPlaySlideWaitTime = 0;

  var autoPlayWait = function autoPlayWait() {
    var d = new Date();
    var time = d.getTime();
    AutoPlaySlideWaitTime = time + autoPlayTime;
  };

  var nextBtn = function nextBtn() {
    var first_slide = document.getElementById("essFirst");
    var second_slide = document.getElementById("essSecond");

    var sld = function sld() {
      if (!parallax && first_slide != null && second_slide != null) {
        first_slide.style.transition = "0s";
        second_slide.style.transition = "0s";
        first_slide.style.transform = "translate3d(0%, 0px, 0px)";
        second_slide.style.transform = "translate3d(100%, 0px, 0px)";
      }

      second_slide != null ? second_slide.style.backgroundImage = "url(" + images[currentSlide] + ")" : '';
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

  var prevBtn = function prevBtn() {
    var first_slide = document.getElementById("essFirst");
    var second_slide = document.getElementById("essSecond");

    var sld = function sld() {
      if (!parallax && first_slide != null && second_slide != null) {
        first_slide.style.transition = "0s";
        second_slide.style.transition = "0s";
        first_slide.style.transform = "translate3d(0%, 0px, 0px)";
        second_slide.style.transform = "translate3d(-100%, 0px, 0px)";
      }

      second_slide != null ? second_slide.style.backgroundImage = "url(" + images[currentSlide] + ")" : '';
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

  var nextSlide = function nextSlide() {
    var first_slide = document.getElementById("essFirst");
    var second_slide = document.getElementById("essSecond");
    first_slide != null ? first_slide.style.transition = duration : '';
    second_slide != null ? second_slide.style.transition = duration : '';

    if (!parallax && first_slide != null && second_slide != null) {
      first_slide.style.transform = "translate3d(-100%, 0px, 0px)";
      second_slide.style.transform = "translate3d(0%, 0px, 0px)";
    }

    setTimeout(function () {
      first_slide != null ? first_slide.style.backgroundImage = "url(" + images[currentSlide] + ")" : '';
    }, 100);
  };

  var prevSlide = function prevSlide() {
    var first_slide = document.getElementById("essFirst");
    var second_slide = document.getElementById("essSecond");
    first_slide != null ? first_slide.style.transition = duration : '';
    second_slide != null ? second_slide.style.transition = duration : '';

    if (!parallax && first_slide != null && second_slide != null) {
      first_slide.style.transform = "translate3d(100%, 0px, 0px)";
      second_slide.style.transform = "translate3d(0%, 0px, 0px)";
    }

    setTimeout(function () {
      first_slide.style.backgroundImage = "url(" + images[currentSlide] + ")";
    }, 100);
  };

  var eesThumbonClick = function eesThumbonClick(imgIndex) {
    console.log(imgIndex);
    currentSlide = imgIndex;
    var first_slide = document.getElementById("essFirst");
    var second_slide = document.getElementById("essSecond");

    var sld = function sld() {
      if (!parallax && first_slide != null && second_slide != null) {
        first_slide.style.transition = "0s";
        second_slide.style.transition = "0s";
        first_slide.style.transform = "translate3d(0%, 0px, 0px)";
        second_slide.style.transform = "translate3d(100%, 0px, 0px)";
      }

      second_slide != null ? second_slide.style.backgroundImage = "url(" + images[currentSlide] + ")" : '';
      setTimeout(nextSlide, deley);
    };

    sld();
    autoPlayWait();
  };

  React.useEffect(function () {
    if (responsive != undefined) {
      for (var i = 0; i < responsive.length; i++) {
        console.log(i);
        var media_query = "";

        if (i > 0) {
          media_query = "screen and (min-width:" + responsive[i - 1].breakPoint + "px) and (max-width:" + responsive[i].breakPoint + "px)";
        } else {
          media_query = "screen and  (max-width:" + responsive[i].breakPoint + "px)";
        }

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

    var slideParrentDiv = document.getElementById("essSlide");
    var first_slide = document.getElementById("essFirst");
    var second_slide = document.getElementById("essSecond");
    slideParrentDiv != null ? slideParrentDiv.style.width = width : '';
    slideParrentDiv != null ? slideParrentDiv.style.height = height : '';
    first_slide != null ? first_slide.style.backgroundImage = "url(" + images[currentSlide] + ")" : '';
    second_slide != null ? second_slide.style.backgroundImage = "url(" + images[currentSlide] + ")" : '';

    if (autoplay) {
      setInterval(function () {
        var d = new Date();
        var currentTime = d.getTime();

        if (currentTime > AutoPlaySlideWaitTime) {
          nextBtn();
        }
      }, autoPlayTime);
    }
  }, [images]);
  return /*#__PURE__*/React__default.createElement("div", {
    id: "easySliderShs1",
    className: styles.easySliderShs1
  }, /*#__PURE__*/React__default.createElement("div", {
    id: "essSlide",
    className: styles.essSlide
  }, /*#__PURE__*/React__default.createElement("div", {
    className: parallax ? styles.essParalax + " " + styles.essSliderCls : styles.essSliderCls,
    id: "essFirst"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: parallax ? styles.essParalax + " " + styles.essSliderCls : styles.essSliderCls,
    id: "essSecond"
  })), /*#__PURE__*/React__default.createElement("div", {
    id: "essController"
  }, /*#__PURE__*/React__default.createElement("button", {
    id: "essPrev",
    className: styles.essPrev,
    onClick: prevBtn
  }, "  \u2B9C"), /*#__PURE__*/React__default.createElement("button", {
    id: "essNext",
    className: styles.essNext,
    onClick: nextBtn
  }, " \u2B9E ")), thumb && /*#__PURE__*/React__default.createElement("div", {
    id: "essSliderThumb",
    className: styles.essSliderThumb
  }, images.map(function (data, index) {
    return /*#__PURE__*/React__default.createElement("button", {
      className: styles.essThumbButton,
      onClick: function onClick() {
        return eesThumbonClick(index);
      }
    }, /*#__PURE__*/React__default.createElement("img", {
      className: styles.essThumbImg,
      src: data
    }));
  })));
};

exports.SimpleCarouselSlider = SimpleCarouselSlider;
//# sourceMappingURL=index.js.map
