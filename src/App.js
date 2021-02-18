import React from 'react';
import './App.css';

import Slideshow from './compenent/slideshow/slideshow';
import anh1 from './anh1.jpg';
import anh2 from './anh2.jpg';
import anh3 from './anh3.jpg';
import anh4 from './anh4.jpg';

const collection = [
  { src: anh1, caption: "Caption one" },
  { src: anh2, caption: "Caption two" },
  { src: anh3, caption: "Caption three" },
  { src: anh4, caption: "Caption four" },

];

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`manual`}
        />

        <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`1000`}
        />

      </div>
    );
  }
}