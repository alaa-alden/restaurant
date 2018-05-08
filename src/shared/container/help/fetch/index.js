/* eslint "react/prop-types":0 */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getPersonsQuery } from '../../queries'

class fetching extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.displayPersons = this.displayPersons.bind(this)
  }
  displayPersons=() => {
    const data = this.props.data
    if (data.loading) {
      return (<div>Loading books...</div>)
    }
    return data.persons.map(person => (
      <li key={person.id}>{person.name}</li>
        ))
  }
  render() {
    return (
      <div>
        <h1>welcome</h1>
        <h2>fetching data now</h2>
        <ul>
          {this.displayPersons()}
        </ul>
      </div>
    )
  }
}
export default graphql(getPersonsQuery)(fetching)
