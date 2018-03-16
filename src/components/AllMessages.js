import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../actions/messages"

class AllMessages extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }
  render() {
    console.log(this.props)
    return (
      <ul>
        <li></li>
      </ul>
    )
  }
}

export default connect()(AllMessages);
