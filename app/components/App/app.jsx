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
    const { children, isReady } = this.props;
    const currentPageSlug = this.getCurrentPageSlug();

    const styles = {
      app: classnames({
        [style.app]: true,
        [style.appReady]: isReady,
      }),
    };

    return (
      <div className={styles.app}>
        <Headband />
        <PagesDirector currentPageSlug={currentPageSlug}>{ children }</PagesDirector>
      </div>
    );
  }
}

App.propTypes = {
  isReady: PropTypes.bool,
  boot: PropTypes.func,
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default App;
