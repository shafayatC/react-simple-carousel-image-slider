import React from 'react'

import {SimpleCarouselSlider} from 'react-simple-carousel-image-slider'
import 'react-simple-carousel-image-slider/dist/index.css'


const images = [
  "https://raw.githubusercontent.com/shafayatC/react-simple-carousel-image-slider/main/src/img/1.jpg",
  "https://raw.githubusercontent.com/shafayatC/react-simple-carousel-image-slider/main/src/img/5.jpg"
   ];
const App = () => {
  
  return <SimpleCarouselSlider images={images} wdith="100%" height="600px"/>
}

export default App
