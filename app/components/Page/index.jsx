import React, { Component, PropTypes } from 'react';
import style from './style.css';

class PageWrapper extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={style.page}>
        { children }
      </div>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;
