import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './style.css';
import Overlay from '../Overlay';

class PageWrapper extends Component {
  render() {
    const { children, background, flex, overlay } = this.props;

    const classes = {
      page: classnames({
        [style.base]: true,
        [style.flex]: flex,
      }),
    };

    const inlineStyle = {
      backgroundImage: `url(${background})`,
    };

    return (
      <div className={classes.page} style={inlineStyle}>
        <div className={style.content}>
          { children }
        </div>
        <Overlay color={overlay.color} opacity={overlay.opacity} />
      </div>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  overlay: PropTypes.shape({
    color: PropTypes.string,
    opacity: PropTypes.string,
  }),
  flex: PropTypes.bool,
};

export default PageWrapper;
