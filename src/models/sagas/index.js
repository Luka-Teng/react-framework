import users from './users'
import session from './session'
import { all } from 'redux-saga/effects'

export default function * rootSaga () {
  yield all([
    users(),
    session()
  ])
}
