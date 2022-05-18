# react-simple-carousel-image-slider

[![ReactJs][react-image]][react-url]
[![Download Count][download-image]][download-url]
[![GitHub license][license-image]][license-url]

[react-image]: https://img.shields.io/badge/ReactJS-%5E18.x-blue
[react-url]: https://reactjs.org
[download-image]: https://img.shields.io/npm/dm/react-simple-carousel-image-slider?label=downlaod
[download-url]: https://www.npmjs.com/package/react-simple-carousel-image-slider
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://github.com/shafayatC/react-simple-carousel-image-slider/blob/main/LICENSE

Simple Carousel Image Slider Component for ReactJS v18<br>

- Just Two Elements will be used. (for display images)
- Support GPU Render, by default.
- Support Image Preload.
- Support SSR. ( server-side-rendering )
# Live demo

  ![demo gif](https://raw.githubusercontent.com/shafayatC/react-simple-carousel-image-slider/main/slider.gif)
  <br>
  
[`live demo link`](https://shafayatc.github.io/react-simple-carousel-image-slider/)<br>


# Video Tutorial

[![Video tutorial][video-image]][video-url]

[video-image]: https://raw.githubusercontent.com/shafayatC/react-simple-carousel-image-slider/main/tube.jpg
[video-url]: https://youtu.be/piVIv3OeGCg

# Install

```
// npm
npm install react-simple-carousel-image-slider --save

// yarn
yarn add react-simple-carousel-image-slider
```

# Usage
##### image load from local storage.
```
import SimpleCarouselSlider from 'react-simple-carousel-image-slider';

  const images = [
    require('./img/1.jpg'),
    require('./img/2.jpg'),
    require('./img/3.jpg'),
    require('./img/4.jpg'),
    require('./img/5.jpg')
  ];

const App = () => {
  return (
    <div>
      <SimpleCarouselSlider
      images={images} 
      autoplay={false}
      width= "100%"
      height="450px"
      />
    </div>
  );
}
```
**or**
##### image load from website.

 ```
import SimpleCarouselSlider from 'react-simple-carousel-image-slider';

  const images = [
"https://raw.githubusercontent.com/shafayatC/react-simple-carousel-image-slider/main/src/img/1.jpg",
"https://raw.githubusercontent.com/shafayatC/react-simple-carousel-image-slider/main/src/img/5.jpg"
  ];

const App = () => {
  return (
    <div>
      <SimpleCarouselSlider
      images={images} 
      autoplay={false}
      width= "100%"
      height="450px"
      />
    </div>
  );
}
```


If You want to see more detail source,<br>

- [`example/App.tsx`](https://github.com/shafayatC/react-simple-carousel-image-slider)<br>

# Props

|        Name         |    Type    |  Required  | Description                                                                                                                                                       | Default   |
| :-----------------: | :--------: | :--------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
|      **width**      |  `Number`  | `Optional` | Image Slider Width                                                                                                                                                |           |
|     **height**      |  `Number`  | `Optional` | Image Slider Height                                                                                                                                               |           |
|     **images**      |  `Array`   | `Required` | Images,<br>Array Elements should be like this structure,<br/>{"image.jpg", ""image2.jpg}                                                                              |           |
|      **duration**      |  `String`  | `Optional` | css object                                                                                                                                                        |      0.7s     |
|  **infinity**  |  `Boolean`  | `Optional` | Infinity image slide                                                                                                                                  | true     |
|    **autoplay**     |  `Boolean`  | `Optional` | Auto play slider<br>                                                                                                                                  | true       |
|     **autplayDelay**     |  `Number`  | `Optional` | Auto play slide delay time                                                                                                                                                        | 3000        |
|     **parallax**     |  `Boolean`  | `Optional` | Parallax slider image                                                                                                                                                         | false        |

If You want to see more detail,<br>


# Style customize

- can customize by className with `!important`;

```
/* slider */ 
#essSlide {  // do something }
.essSliderCls { // do something } 

/* controller */ 
.essController { // do something }
.essNext { // do something }
.essPrev { // do something }

```


# License

MIT