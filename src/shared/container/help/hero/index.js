import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Hero extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeImage = this.handleChangeImage.bind(this)
  }
  state = {
    name: '',
    image: {}
  }
  handleChangeName = (event) => {
    this.setState({ name: event.target.value })
  }
  handleChangeImage=(event) => {
    this.setState({ image: event.target.files[0] })// is event
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData()
    data.append('name', this.state.name)
    data.append('image', this.state.image)
    // console.log(data.get('message'))
    // console.log(data.get('file'))

    axios.post('/hero', data)
      .then((res) => {
        console.log(`when I come from server I get this message :${res.data}`)
      })
    // console.log(this.state.image)
  }
  render() {
    console.log('this is Hero')
    return (
      <div>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <input onChange={this.handleChangeName} type="text" />
          <br />
          <input onChange={this.handleChangeImage} type="file" name="image" id="image" />
          <br />
          <input type="submit" value="POST..." />
        </form>
      </div>
    )
  }
}
Hero.proptypes = {
  state: PropTypes.object,
  handleChangeImage: PropTypes.func,
  handleChangeName: PropTypes.func,
  handleSubmit: PropTypes.func,

}
export default Hero
/*
 i need two funciton , axios

*/
