import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { SetUntitle } from '../../../action'

class Redux extends Component {
  render() {
    console.log('this is Hero')
    return (
      <div>
        <h1>welcome in Hero</h1>
        <h2>word in state is {this.props.untitle}</h2>
        <button className="btn btn-success btn-lg btn-block" onClick={() => this.props.set_untitle('apple')}>click</button>
      </div>
    )
  }
}
Redux.propTypes = {
  untitle: PropTypes.string.isRequired,
  set_untitle: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  untitle: state.untitle.untitle
})
const mapDispatchToProps = dispatch => ({
  set_untitle: (untitle) => {
    dispatch(
      SetUntitle(untitle)
    )
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redux)
