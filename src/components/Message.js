import React, { Component } from 'react'
import { connect } from "react-redux";

class Message extends Component {

  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit = () => {
    console.log("Click!")
  }

  render () {
    console.log(this.state.message)
    return (
      <div>
        <input type="text" name="message" onChange={this.handleChange} value={this.state.message} />
        <input type="submit" name="submit" onClick={this.handleSubmit} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    message: state.message
  };

}

export default connect(mapStateToProps)(Message);
