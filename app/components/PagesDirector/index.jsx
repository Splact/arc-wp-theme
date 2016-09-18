import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import style from './style.css';
import PageWrapper from './pageWrapper';

class PagesDirector extends Component {
  render() {
    const { children: page, currentPageSlug } = this.props;

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
        transitionAppearTimeout={500}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={250}
      >
        <PageWrapper key={`page-${currentPageSlug}`}>{ page }</PageWrapper>
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
};

export default PagesDirector;
