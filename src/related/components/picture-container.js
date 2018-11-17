import React from 'react';
import './picture-container.css'

const PictureContainer = (props) => (
  <div className="PictureContainer">
    {props.children}
  </div>
)

export default PictureContainer
