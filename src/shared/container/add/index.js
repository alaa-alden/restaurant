import React, { Component } from 'react'
import PropTypes from 'prop-types'// work
import axios from 'axios'
import style from './style.scss'

class Add extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePrice = this.handleChangePrice.bind(this)
    this.handleChangeImage = this.handleChangeImage.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
  }
  state = {
    name: '',
    price: '',
    image: {},
    description: ''
  }
  /* #region for change input */
  handleChangeName(e) {
    this.setState({ name: e.target.value })
  }
  handleChangePrice(e) {
    this.setState({ price: e.target.value })
  }
  handleChangeImage(e) {
    this.setState({ image: e.target.files[0] })
  }
  handleChangeDescription(e) {
    this.setState({ description: e.target.value })
  }
  /* #endregion */

  // work when SUBMIT
  handleSubmit(e) {
    e.preventDefault()
    const data = new FormData()
    data.append('name', this.state.name)
    data.append('price', this.state.price)
    data.append('image', this.state.image)
    data.append('description', this.state.description)
    // console.log(this.props.location.pathname)
    axios.post('/add', data).then((res) => {
      // you know when coding in server
      if (1) {
        this.props.history.push('/')
        console.log(res.data)
      }
    })
  }
  // RENDRE
  render() {
    // const { match, location, history } = this.props
    return (
      <div className={style.add}>
        <h1>welcome in Add New Meal</h1>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data" id="add">
          <div className="form-group">
            <label htmlFor="name">Name for Meal</label>
            <input onChange={this.handleChangeName} name="name" type="text" className="form-control" placeholder="Enter Meal's name pleace ....." />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price of Meal</label>
            <input onChange={this.handleChangePrice} name="price" type="number" className="form-control" placeholder="Enter Price of Meal pleace ....." />
          </div>
          <div className="custom-file">
            <input onChange={this.handleChangeImage} name="image" id="image" type="file" accept=".jpg, .jpeg, .png" multiple className="custom-file-input" />
            <label className="custom-file-label" htmlFor="image">Choose file</label>
          </div>
        </form>
        <br />
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
          </div>
          <textarea onChange={this.handleChangeDescription} name="description" form="meal" className="form-control" aria-label="With description" />
        </div>
        <br />
        <button type="submit" form="add" value="Submit" className="btn btn-lg btn-block">Submit</button>
      </div>
    )
  }
}
Add.proptypes = {
  state: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  history: PropTypes.func
}
export default Add
/*
  name
<div className="form-group">
<label htmlFor="name">Name for Meal</label>
<input type="text" className="form-control" id="name" placeholder="Enter name pleace ....." />
</div>
*/
