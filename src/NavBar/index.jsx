import React from 'react';
import './style.css';

function NavBar(props) {
  return (
    <nav className="nav justify-content-center col-md-12">
        <div className="col-md-4 title">Natures charm</div>
        <div className="col-md-4 track"></div>
        <div className="score">Score: {props.score}</div>
        <div className="col-md-2 best">Best: {props.best}</div>
    </nav>
  );
}

export default NavBar;  
