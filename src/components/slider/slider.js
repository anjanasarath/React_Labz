import React from 'react';
import Image from '../../assets/img/chart.png';

const ContentSlider = (props) =>{
    return (
        <div className="card">
            <div className="card-title">{props.cardName}</div>
            <div className="card-content">{props.description}</div>
            <div className="card-image"><img src={Image} alt={props.cardName}/></div>
        </div>
    )
  }

  export default ContentSlider;
