import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Navigation, Router, Footer } from '../'
import styles from './style.scss'
// import design from './canvas'

class App extends Component {
  // componentDidMount() {
  //   design()
  // }
  render() {
    return (
      <div className={styles.app}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Restautant</title>
          <link
            rel="shortcut icon" href="https://cdn2.iconfinder.com/data/icons/food-ink/512/restaurant-512.png" type="image/x-icon"
          />
        </Helmet>
        <Navigation />
        {/* <canvas /> */}
        <div className="container-fluid">
          <Router />
        </div>
        <Footer />
      </div>
    )
  }
}
export default App
