import { SESSION_IN, SESSION_OUT } from '@/models/actions/session'

const initState = {
  isLogin: false
}

export default function users (state = initState, action) {
  switch (action.type) {
    case SESSION_IN:
      return {
        isLogin: true
      }
    case SESSION_OUT:
      return {
        isLogin: false
      }
    default:
      return state
  }
}
