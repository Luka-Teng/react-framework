import React, { Component } from 'react'

export default class Login extends Component {
  render () {
    return (
      <div>
        <h1>hello, its login page</h1>
        <div>{JSON.stringify(this.props)}</div>
      </div>
    )
  }
}
