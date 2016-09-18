import React, { Component, PropTypes } from 'react';

class PageWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        { children }
      </div>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;
