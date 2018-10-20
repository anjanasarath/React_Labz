import React from 'react';
import './drawer.css';

const Draw = (props) => (
  <div className={`draw-${props.position} draw-animate-${props.position}`}>
    <i className="i fa fa-window-close ml-auto mr-0"
      onClick={props.close}
      aria-hidden="true">
    </i>
    <div>{props.children}</div>
  </div>
)

const Drawer = (props) => (
  <Draw
    position={props.position}
    close={props.onClose}>
    {props.children}
  </Draw>
);

export default Drawer;
