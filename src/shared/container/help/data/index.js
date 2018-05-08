import React, { Component } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'

class Data extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  state = {
    name: '',
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const name = this.state.name
    axios.post('/data', { name })
      .then((res) => {
        console.log(`when I come from server I get this message :${res.data}`)
      })
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h1>welcome with NOSQL</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">@</span>
            </div>
            <input onChange={this.handleChange} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <input type="submit" value="Save!" className="btn btn-info btn-lg btn-block" />
        </form>
      </div>
    )
  }
}
Data.proptypes = {
  state: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}
export default Data
