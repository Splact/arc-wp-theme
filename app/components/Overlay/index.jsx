import React, { Component, PropTypes } from 'react';
import style from './style.css';

class Overlay extends Component {

  getTrueOpacity(opacityBucket) {
    let trueOpacity = 0;
    if (opacityBucket === 'subtle') {
      trueOpacity = 0.2;
    } else if (opacityBucket === 'moderate') {
      trueOpacity = 0.5;
    } else if (opacityBucket === 'intense') {
      trueOpacity = 0.8;
    }

    return trueOpacity;
  }

  render() {
    const { color, opacity } = this.props;

    const innerStyle = {
      backgroundColor: color,
      opacity: this.getTrueOpacity(opacity),
    };

    return (
      <div className={style.base} style={innerStyle} />
    );
  }
}

Overlay.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};

export default Overlay;
