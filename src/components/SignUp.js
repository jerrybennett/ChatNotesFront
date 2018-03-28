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

    console.log(this.props)
    this.props.history.push('/chats')
  }

  render() {
    console.log(this.props)
    return (
      <div className="container" id="signUpForm">
        <div className="row">
          <div className="col justify-content-center align-items-center">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>User Name</label>
                <input class="form-control" type="text" name="username" value={this.state.username} onChange={this.handleInput} />

                <label>eMail</label>
                <input class="form-control" type="text" name="email" value={this.state.email} onChange={this.handleInput} />

                </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>

            </form>
          </div>
        </div>
      </div>
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
