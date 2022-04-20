import SimpleCarouselSlider from './components/rscis/SimpleCarouselSlider';

function App() {

  var images = [
    require('./img/1.jpg'),
    require('./img/2.jpg'),
    require('./img/4.jpg'),
    require('./img/6.jpg')
];
  return (
    <div className="App">

      <SimpleCarouselSlider images={images} autoplay={false}/>

    </div>
  );
}

export default App;
