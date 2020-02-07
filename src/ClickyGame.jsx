import React, { Component } from 'react';
import './ClickyGame.css';
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






class ClickyGame extends Component {
    
    state =
    {
        debug: true,
        score: 0,
        imagesClicked: [],
        pictureArray: [picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8, picture9, picture10, picture11, picture12].sort(function() { return 0.5 - Math.random() })
    }

    alreadyClicked = (picture) => {
      const newPictures = [ ...this.state.pictureArray, picture];
      this.setState=({imagesClicked:newPictures});

      console.log();
   
      // console.log('2');
      // console.log(newPictures);
      // console.log('3');
      // console.log(picture);
      // console.log('4');
      // console.log(this.state.pictureArray);
      
    }


    render = () =>
    {
    return (
      <div className="App">
        <NavBar 
          score={2+2}
        />
    
        {this.state.pictureArray.map((pictureArr, i) =>
          {
            return(
                <Card
                  key={i+1}
                  src={pictureArr}
                  alt={'picture' + i}
                  onClick={() => this.alreadyClicked(i+1)}
                />
            )
          })}
      </div>
    );
  }
}

export default ClickyGame;
