import './App.scss';

import React, { Component } from 'react';

import Navbar from "./navbar/navbar";
import TourC from "./Tour-C";

class App extends Component {
  render() {
    return (
     <main>
     
      <Navbar/>
      <TourC/>
     </main>
    );
  }
}

export default App;
