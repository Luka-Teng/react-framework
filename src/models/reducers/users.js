import { USERS_ADD, USERS_DELETE } from '@/models/actions/users'

const initState = [
  {
    id: 1,
    name: 'luka',
    password: '123456'
  }
]

export default function users (state = initState, action) {
  switch (action.type) {
    case USERS_ADD:
      return [
        ...state,
        { ...action.payload }
      ]
    case USERS_DELETE:
      const newState = [...state].filter((user) => {
        return user.id !== action.paylod
      })
      return newState
    default:
      return state
  }
}
