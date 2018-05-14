import React, { Component } from 'react'
// import styles from './style.scss'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'

import { getMealsQuery } from '../../queries'

class Home extends Component {
  constructor(props) {
    super(props)
    this.disPlayMeal = this.disPlayMeal.bind(this)
  }
  disPlayMeal() {
    const data = this.props.data
    if (data.loading) {
      return (<div>Loading books...</div>)
    }

    return data.meals.map(meal => (
      <li key={meal.id}>
        <h2 className="name">{meal.name}</h2>
        <h3 className="price">{meal.price}</h3>
        <p className="description">{meal.description}</p>
        <img className="image" src={meal.UrlImage} alt="loading" width="750" height="750" />
        <button onClick={console.log('update')}>update</button>
        <button onClick={console.log('delete')}>delete</button>
      </li>
    ))
  }
  render() {
    return (
      <div >
        <h1>welcome home for meal</h1>
        <ul>{this.disPlayMeal()}</ul>
      </div>
    )
  }
}
Home.propTypes = {
  data: PropTypes.object.isRequired,
}
export default graphql(getMealsQuery)(Home)
