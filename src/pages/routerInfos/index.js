import React, { Component } from 'react'
import { Styles } from '@/constant'
import { renderRoute } from '@/router/routerConf'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const child1 = Styles.child1

@connect(
  ({users}) => {
    return {
      users
    }
  }
)
export default class App extends Component {
  addUser = () => {
    console.log(this.props)
    const { dispatch } = this.props
    console.log(dispatch({type: 'addUser'}))
  }
  render () {
    const { match, users } = this.props
    return (
      <div className={child1.luka}>
        <ul>
          <li><Link to={`${match.url}/home`}>RouterInfos-home</Link></li>
        </ul>
        <button onClick={this.addUser}>new user</button>
        <ul>
          {users.map((user, index) => {
            return (<li className={'luka'} key={index}>{user.name}</li>)
          })}
        </ul>
        <div>
          {JSON.stringify(this.props)}
        </div>
        {renderRoute(this.props.routes)}
      </div>
    )
  }
}
