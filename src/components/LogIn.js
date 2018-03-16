import React from 'react'

class LogIn extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state.username, this.state.password)
  }

  render () {
    return (
      <form>
        <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
        <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
        <input type="submit" />
      </form>
    )
  }
}

export default LogIn;
