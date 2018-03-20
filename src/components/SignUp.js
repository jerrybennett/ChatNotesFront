import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/messages'
import { withRouter } from 'react-router-dom'

class SignUp extends Component {

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

    this.props.addUser(this.state)

    this.setState({
      username: '',
      email: ''
    })

    this.props.history.push('/chats')
  }

  render() {
    console.log(this.state.username)
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

export default connect(mapStateToProps, { addUser })(SignUp)
