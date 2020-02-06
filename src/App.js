import React from 'react';
import './App.css';
import NavBar from './Navbar';
import Card from './Card';
import picture1 from "./Card/images/picture1.jpg";
import picture2 from "./Card/images/picture2.jpg";
import picture3 from "./Card/images/picture3.jpg";
import picture4 from "./Card/images/picture4.jpg";
import picture5 from "./Card/images/picture5.jpg";
import picture6 from "./Card/images/picture6.jpg";
import picture7 from "./Card/images/picture7.jpg";
import picture8 from "./Card/images/picture8.jpg";
import picture9 from "./Card/images/picture9.jpg";
import picture10 from "./Card/images/picture10.jpg";
import picture11 from "./Card/images/picture11.jpg";
import picture12 from "./Card/images/picture12.jpg";


function App() {
  return (
    <div className="App">
      <NavBar 
        score={2+2}
      />
      <Card image={picture1}/>
      <Card image={picture2}/>
      <Card image={picture3}/>
      <Card image={picture4}/>
      <Card image={picture5}/>
      <Card image={picture6}/>
      <Card image={picture7}/>
      <Card image={picture8}/>
      <Card image={picture9}/>
      <Card image={picture10}/>
      <Card image={picture11}/>
      <Card image={picture12}/>
    </div>
  );
}

export default App;
