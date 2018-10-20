import React from 'react';

const RadioGroup = (props) => {
  console.log("hello");
  return(
        <div className="card" >
           <label className="container">Top
            <input
              type="radio"
              name="radio"
              value="top"
              onChange={props.onChange}
              />
            <span className="checkmark"></span>
          </label>
          <label className="container">Right
            <input
              type="radio"
              name="radio"
              value="right"
              onChange={props.onChange}
              />
            <span className="checkmark"></span>
          </label>
          <label className="container">Bottom
            <input
              type="radio"
              name="radio"
              value="bottom"
              onChange={props.onChange}
              />
            <span className="checkmark"></span>
          </label>
          <label className="container">Left
            <input
              type="radio"
              name="radio"
              value="left"
              onChange={props.onChange}
              />
            <span className="checkmark"></span>
          </label>
          <span className="p-10">
            <button className="button"
              onClick={props.isButtonClicked}>
              Open!
            </button>
          </span>
        </div>
      )
}
export default RadioGroup;
