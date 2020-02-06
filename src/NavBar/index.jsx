import React from 'react';
import './style.css';


// let imageArray = [picture1, picture2];
// let randomImage = Math.floor(Math.random()*imageArray.length);

function NavBar(props) {
  return (
    <nav class="nav nav-pills nav-fill">
        <div className="col-md-1">Clicky Game</div>
        <div className="col-md-4"></div>
        <div>Score: {props.score}</div>
    </nav>
  );
}

export default NavBar;
