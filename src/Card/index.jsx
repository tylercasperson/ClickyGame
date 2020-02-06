import React from 'react';
import './style.css';


// let imageArray = [picture1, picture2];
// let randomImage = Math.floor(Math.random()*imageArray.length);

function Picture1(props) {
  return (
    <div class="card border-primary mb-3 pictureCard">
      <img src={props.image} alt="card" />
    </div>
  );
}

export default Picture1;
