/*
  AuthRoute -> props -> auth -> Components
*/
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

export default class AuthRoute extends Component {
  renderRoute = (props) => {
    const { component: Component, directedPath, auth, path, ...rest } = this.props
    if (auth) {
      return (
        <Component {...props} {...rest} />
      )
    } else {
      return (
        <Redirect
          to={{
            pathname: directedPath,
            state: {from: props.location}
          }}
        />
      )
    }
  }
  render () {
    const { path } = this.props
    return (
      <Route
        path={path}
        render={this.renderRoute}
      />
    )
  }
}
