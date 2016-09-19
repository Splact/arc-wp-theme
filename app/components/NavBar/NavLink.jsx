import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import style from './style.css';

class NavLink extends Component {
  render() {
    const { children, to, index } = this.props;

    if (index) {
      return (
        <IndexLink
          to="/"
          className={style.link}
          activeClassName={style.linkActive}
        >{children}</IndexLink>
      );
    }

    return (
      <Link
        to={to}
        className={style.link}
        activeClassName={style.linkActive}
      >{children}</Link>
    );
  }
}

NavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  index: PropTypes.bool,
};

export default NavLink;
