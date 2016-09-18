import React, { Component, PropTypes } from 'react';
import style from './style.css';

class Title extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <div className={style.base}>
        <div className={style.title}>{ title }</div>
        <div className={style.line} />
        <div className={style.description}>{ description }</div>
      </div>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Title;
