import React from 'react';
import './style.css';


// let imageArray = [picture1, picture2];
// let randomImage = Math.floor(Math.random()*imageArray.length);

function Picture(props) {
  return (
    <button className="card border-primary mb-3 pictureCard" onClick={props.onClick}>
      <img src={props.src} alt={props.alt} />
      <div className="tracker" id={props.id}></div>
    </button>
  );
}

export default Picture;
