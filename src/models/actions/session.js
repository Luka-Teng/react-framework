/*
  data shape:
  session: {
    isLogin: false
  }
*/

const SESSION_IN = 'session/in'
const SESSION_OUT = 'session/out'

function sessionIn () {
  return {
    type: SESSION_IN
  }
}

function sessionOut () {
  return {
    type: SESSION_OUT
  }
}

export {
  SESSION_IN,
  SESSION_OUT,
  sessionIn,
  sessionOut
}
