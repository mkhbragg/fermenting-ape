import React from 'react'
import { NavLink } from 'react-router-dom'
import { Authentication } from './authentication'

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper cyan darken-1 px1">
      <NavLink to="/" className="brand-logo">
        Redux + TypeScript
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li cy-data="home-nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <Authentication />
      </ul>
    </div>
  </nav>
)
