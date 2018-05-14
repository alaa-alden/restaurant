import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.scss'

class Nav extends Component {
  render() {
    return (
      <div className={styles.navigation}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/add">ADD</Link></li>
        </ul>
      </div>
    )
  }
}
export default Nav

// fix show nav bar
