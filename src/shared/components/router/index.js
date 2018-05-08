import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import {
    Home,
    About,
    Connect,
    Add

} from '../../container'
import styles from './style.scss'

class Router extends React.PureComponent {
  render() {
    return (
      <div className={styles.router}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/connect" component={Connect} />
          <Route exact path="/add" component={Add} />
        </Switch>
      </div >
    )
  }

}
export default withRouter(Router)
