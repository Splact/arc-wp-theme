import React, { Component } from 'react';
import NavLink from './NavLink';
import style from './style.css';

class NavBar extends Component {
  render() {
    return (
      <nav className={style.nav}>
        <NavLink to="/photographer">Photographer</NavLink>
        <NavLink to="/interior-designer">Interior designer</NavLink>
      </nav>
    );
  }
}

export default NavBar;
