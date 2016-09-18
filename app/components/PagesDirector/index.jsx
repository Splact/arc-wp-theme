import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import style from './style.css';

class PagesDirector extends Component {
  render() {
    const { children: page, currentPageSlug, isReady } = this.props;

    return (
      <ReactCSSTransitionGroup
        component="div"
        className={style.pagesDirector}
        transitionName={{
          appear: style.pageAppear,
          appearActive: style.pageAppearActive,
          enter: style.pageEnter,
          enterActive: style.pageEnterActive,
          leave: style.pageLeave,
          leaveActive: style.pageLeaveActive,
        }}
        transitionAppear
        transitionAppearTimeout={1000}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={250}
      >
        {
          isReady && React.cloneElement(page, {
            key: `page-${currentPageSlug}`,
          })
        }
      </ReactCSSTransitionGroup>
    );
  }
}

PagesDirector.defaultProps = {
  currentPageSlug: 'no-name',
};

PagesDirector.propTypes = {
  children: PropTypes.node,
  currentPageSlug: PropTypes.string,
  isReady: PropTypes.bool,
};

export default PagesDirector;
