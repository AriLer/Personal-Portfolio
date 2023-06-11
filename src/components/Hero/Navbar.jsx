import React from 'react'
import './navbar.css'
import { navItems } from './../../constants/index'

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <ul className="nav-items">
          {navItems.map((item, idx) => (
            <a href={`#${item.toLowerCase()}`} key={`navItem-${item}`}>
              <li>
                <span key={`navItemNum-${idx}`}>{`0${idx + 1}.`}</span> {item}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
