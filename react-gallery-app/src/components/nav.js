import React from 'react'
import {
  BrowserRouter,
  NavLink
} from 'react-router-dom'

const navItem1 = 'Cats'
const navItem2 = 'Dogs'
const navItem3 = 'Birds'

const Nav = (props) => {
    return (
      <BrowserRouter>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to={`/search/${navItem1}`} onClick={() => props.onSearch(navItem1)}>{navItem1}</NavLink>
            </li>
            <li>
              <NavLink to={`/search/${navItem2}`} onClick={() => props.onSearch(navItem2)}>{navItem2}</NavLink>
            </li>
            <li>
              <NavLink to={`/search/${navItem3}`} onClick={() => props.onSearch(navItem3)}>{navItem3}</NavLink>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    );
}

export default Nav;