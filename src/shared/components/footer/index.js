import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './style.scss'

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/connect">Connect with us</Link></li>
        </ul>
      </div>
    )
  }
}
export default Footer

