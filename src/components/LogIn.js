import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logInUser } from '../actions/messages'
class LogIn extends Component {

  state = {
    username: '',
    email: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log("submitting message", this.state)
    e.preventDefault()

    this.props.logInUser(this.state)

    this.setState({
      username: '',
      email: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>UserName</label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleInput} />
        <br />
        <label>eMail</label>
        <input type="text" name="email" value={this.state.email} onChange={this.handleInput} />
        <br />
        <input type="submit"/>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    email: state.email
  }
}

export default connect(mapStateToProps, { logInUser })(LogIn)
