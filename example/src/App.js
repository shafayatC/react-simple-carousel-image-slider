import React from 'react'
import './index.css'
import { SimpleCarouselSlider } from 'react-simple-carousel-image-slider'
import 'react-simple-carousel-image-slider/dist/index.css'


const images = [
  "https://raw.githubusercontent.com/shafayatC/react-simple-carousel-image-slider/main/src/img/1.jpg",
  "https://raw.githubusercontent.com/shafayatC/react-simple-carousel-image-slider/main/src/img/5.jpg",
  "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
  "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg"
];
const App = () => {

  return (
    <>
      <SimpleCarouselSlider images={images} wdith="100%" height="600px" parallax={true} autoplay={true} thumb={true}
        responsive={[
          {
            breakPoint: 420,
            height: "200px",
            width: "300px",
            parallax: false
          },
          {
            breakPoint: 600,
            height: "300px",
          },
          {
            breakPoint: 1000,
            height: "500px"
          }
        ]}
      />
      <section>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
          <tr><td>width</td><td>String</td><td>Optional</td><td>	Image Slider Width</td><td></td></tr>
          <tr><td>height</td><td>String</td><td>Optional</td><td>	Image Slider Height</td><td></td></tr>
          <tr><td>Image Slider Height</td><td>Array</td><td>Required</td><td>	Images,
            Array Elements should be like this structure,
            {`{'image.jpg', 'image2.jpg'}`}</td><td></td></tr>
          <tr><td>duration</td><td>String</td><td>Optional</td><td>	css object</td><td>	0.7s</td></tr>
          <tr> <td>infinity</td><td>Boolean</td><td>Optional</td><td>	Infinity image slide</td><td>true</td></tr>
          <tr><td>autoplay</td><td>Boolean</td><td>Optional</td><td>	Auto play slider</td><td>true</td></tr>
          <tr> <td>autplayDelay</td><td>Number</td><td>Optional</td><td>	Auto play slide delay time</td><td>3000</td></tr>
          <tr> <td>parallax</td><td>Boolean</td><td>Optional</td><td>Parallax slider image</td><td>false</td></tr>
          <tr> <td>thumb</td><td>Boolean</td><td>Optional</td><td>Slider thumbnail</td><td>false</td></tr>
          <tr> <td>responsive</td><td>Array</td><td>Optional</td><td>responsive by media query</td><td></td></tr>
        </table>
        <div class='optionInfo'>
          <p>Responsive <span>object details bellow :</span></p>
          <ol>
            <li>breakPoint : 'number for media query'</li>
            <li>height : 'string'</li>
            <li>width : 'string'</li>
            <li>parallax : 'boolean'</li>
            <li>duration : 'string'</li>
            <li>autoplay : 'boolean'</li>
          </ol>
        </div>
      </section>
    </>
  )
}

export default App
