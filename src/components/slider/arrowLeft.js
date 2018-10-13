import React from 'react';

const ArrowLeft = (props) => {
    return (
        <button className="dashboard-slider-arrow dashboard-slider-arrow_prev" onClick={props.prevSlide}>↓</button>
    )
}

export default ArrowLeft;
