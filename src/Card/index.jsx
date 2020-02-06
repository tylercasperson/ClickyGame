import React from 'react';
import './style.css';


let imageArray = [picture1, picture2];
let randomImage = Math.floor(Math.random()*imageArray.length);

function Picture1(props) {
  return (
      <div class="w3-card-4">
        <img src={this.props.image} alt="picture1"></img>
      </div>
  );
}

export default Picture1;
