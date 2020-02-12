import React from 'react'
import {
  BrowserRouter,
  NavLink
} from 'react-router-dom'

const Nav = (props) => {
    return (
      <BrowserRouter>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to={`/search/${props.navItems[0]}`} onClick={() => props.onSearch(props.navItems[0])}>{props.navItems[0]}</NavLink>
            </li>
            <li>
              <NavLink to={`/search/${props.navItems[1]}`} onClick={() => props.onSearch(props.navItems[1])}>{props.navItems[1]}</NavLink>
            </li>
            <li>
              <NavLink to={`/search/${props.navItems[2]}`} onClick={() => props.onSearch(props.navItems[2])}>{props.navItems[2]}</NavLink>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    );
}

export default Nav;