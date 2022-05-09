function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"easySliderShs1":"_1uwTh","essSlide":"_17tem","essSliderCls":"_2Y-TT","essParalax":"_1E1nI","essNext":"_290N2","essPrev":"_3_rel"};

var SimpleCarouselSlider = function SimpleCarouselSlider(props) {
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

  var autoPlayWait = function autoPlayWait() {
    var d = new Date();
    var time = d.getTime();
    AutoPlaySlideWaitTime = time + autoPlayTime;
  };

  var nextBtn = function nextBtn() {
    var first_slide = document.getElementById("essFirst");
    var second_slide = document.getElementById("essSecond");

    var sld = function sld() {
      first_slide.style.transition = "0s";
      second_slide.style.transition = "0s";
      first_slide.style.transform = "translate3d(0%, 0px, 0px)";
      second_slide.style.transform = "translate3d(100%, 0px, 0px)";
      second_slide.style.backgroundImage = "url(" + images[currentSlide] + ")";
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
      first_slide.style.transition = "0s";
      second_slide.style.transition = "0s";
      first_slide.style.transform = "translate3d(0%, 0px, 0px)";
      second_slide.style.transform = "translate3d(-100%, 0px, 0px)";
      second_slide.style.backgroundImage = "url(" + images[currentSlide] + ")";
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
    first_slide.style.transition = duration;
    second_slide.style.transition = duration;
    first_slide.style.transform = "translate3d(-100%, 0px, 0px)";
    second_slide.style.transform = "translate3d(0%, 0px, 0px)";
    setTimeout(function () {
      first_slide.style.backgroundImage = "url(" + images[currentSlide] + ")";
    }, 100);
  };

  var prevSlide = function prevSlide() {
    var first_slide = document.getElementById("essFirst");
    var second_slide = document.getElementById("essSecond");
    first_slide.style.transition = duration;
    second_slide.style.transition = duration;
    first_slide.style.transform = "translate3d(100%, 0px, 0px)";
    second_slide.style.transform = "translate3d(0%, 0px, 0px)";
    setTimeout(function () {
      first_slide.style.backgroundImage = "url(" + images[currentSlide] + ")";
    }, 100);
  };

  React.useEffect(function () {
    var slideParrentDiv = document.getElementById("essSlide");
    var first_slide = document.getElementById("essFirst");
    slideParrentDiv.style.width = width;
    slideParrentDiv.style.height = height;
    first_slide.style.backgroundImage = "url(" + images[currentSlide] + ")";

    if (slideAutoPlay) {
      setInterval(function () {
        var d = new Date();
        var currentTime = d.getTime();

        if (currentTime > AutoPlaySlideWaitTime) {
          nextBtn();
        }
      }, autoPlayTime);
    }
  }, []);
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
    id: "essNext",
    className: styles.essNext,
    onClick: nextBtn
  }, "  \u2B9C"), /*#__PURE__*/React__default.createElement("button", {
    id: "essPrev",
    className: styles.essPrev,
    onClick: prevBtn
  }, " \u2B9E ")));
};

exports.SimpleCarouselSlider = SimpleCarouselSlider;
//# sourceMappingURL=index.js.map
