import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card1 from './Card';
import picture1 from "./Card1/picture1.jpg";
import picture2 from "./Card2/picture2.jpg";

function App() {
  return (
    <div className="App">
      <div class="score">Score: </div>
      <div class="increment">+</div>
      <div class="decrement">-</div>

      <h1>hello</h1>
      <Card1 image={props.image}/>
    </div>
  );
}

export default App;
