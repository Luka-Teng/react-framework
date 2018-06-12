import { call, put, takeEvery, all } from 'redux-saga/effects'
import { sessionIn, sessionOut } from '@/models/actions/session'
import { mockAsync } from '@/utils'

// effects
function * login (action) {
  const data = yield call(mockAsync, true)
  yield put(sessionIn(data))
}

function * logout (action) {
  const data = yield call(mockAsync, false)
  yield put(sessionOut(data))
}

function * watchLogin () {
  yield takeEvery('login', login)
}

function * watchLogout () {
  yield takeEvery('logout', logout)
}

export default function * () {
  yield all([
    watchLogin(),
    watchLogout()
  ])
}
