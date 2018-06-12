import React, { Component } from 'react'

export default class Home extends Component {
  render () {
    return (
      <div>
        <h1>hello, its first page</h1>
        <div>{JSON.stringify(this.props)}</div>
      </div>
    )
  }
}
