import React from 'react';

const ArrowRight = (props) => {
    return (
        <button className="dashboard-slider-arrow dashboard-slider-arrow_next" onClick={props.nextSlide}>↑</button>
    )
}

export default ArrowRight;
