import React from 'react'
import { render } from 'react-dom'

// router
import AppRouter from '@/router'

// redux
import { createStore, applyMiddleware } from 'redux'
import reducers from '@/models/reducers'
import { Provider } from 'react-redux'

// saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from '@/models/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
