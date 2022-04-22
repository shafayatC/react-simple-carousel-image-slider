
import SimpleCarouselSlider from 'react-simple-carousel-image-slider';

//import SimpleCarouselSlider from './components/rscis/SimpleCarouselSlider';

function App() {

  var images = [
    require('./img/1.jpg'),
    require('./img/2.jpg'),
    require('./img/3.jpg'),
    require('./img/4.jpg'),
    require('./img/5.jpg')
  ];
  return (
    <div className="App">
      <div style={{ width: "1100px", margin: "auto" }}>
        <SimpleCarouselSlider
          images={images}
          autoplay={false} 
        />
      </div>
    </div>
  );
}

export default App;
