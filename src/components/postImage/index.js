import React from 'react';
import './styles.css';

export const PostImage = ({ input, type }) => {
    delete input.value
    return (
      <div className="upload-btn-wrapper">
          <button className="btn">
            <span className="icon-camera icon-camera-config" />
          </button>
          <input className="input-img-config" {...input} type={type}/>
      </div>
    )
  }
