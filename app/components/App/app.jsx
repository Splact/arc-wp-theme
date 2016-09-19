import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './style.css';
import Headband from '../Headband';
import PagesDirector from '../PagesDirector';

class App extends Component {
  componentWillMount() {
    this.props.boot();
  }

  getCurrentPageSlug() {
    const { location } = this.props;
    return location ? location.pathname.split('/')[1] : 'root';
  }

  render() {
    const { children, isReady, theme } = this.props;
    const currentPageSlug = this.getCurrentPageSlug();

    const styles = {
      app: classnames({
        [style.base]: true,
        [theme]: true,
        [style.ready]: isReady,
      }),
    };

    return (
      <div className={styles.app}>
        <Headband />
        <PagesDirector
          isReady={isReady}
          currentPageSlug={currentPageSlug}
        >
          { children }
        </PagesDirector>
      </div>
    );
  }
}

App.propTypes = {
  isReady: PropTypes.bool,
  theme: PropTypes.string,
  boot: PropTypes.func,
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default App;
