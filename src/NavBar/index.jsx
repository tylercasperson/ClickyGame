import React from 'react';
import './style.css';


// let imageArray = [picture1, picture2];
// let randomImage = Math.floor(Math.random()*imageArray.length);

function NavBar(props) {
  return (
    <nav className="nav justify-content-center col-md-12">
        <div className="col-md-1">Clicky Game</div>
        <div className="col-md-4 track"></div>
        <div>Score: {props.score}</div>
        <div className="col-md-2">Best: {props.best}</div>
    </nav>
  );
}

export default NavBar;
