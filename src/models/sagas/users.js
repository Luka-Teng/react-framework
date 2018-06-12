import { call, put, takeEvery } from 'redux-saga/effects'
import { usersAdd } from '@/models/actions/users'
import { mockAsync } from '@/utils'

// effects
function * getUsers (action) {
  const data = yield call(mockAsync, {
    id: 2,
    name: 'luka',
    password: '123456'
  })
  yield put(usersAdd(data))
}

export default function * watch () {
  yield takeEvery('addUser', getUsers)
}
