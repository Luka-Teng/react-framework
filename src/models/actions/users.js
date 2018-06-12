/*
  data shape:
  users: [
    {
      id: 1,
      name: 'luka',
      password: '123456'
    }
  ]
*/

const USERS_ADD = 'users/add'
const USERS_DELETE = 'users/delete'

function usersAdd (user) {
  return {
    type: USERS_ADD,
    payload: user
  }
}

function usersDelete (id) {
  return {
    type: USERS_DELETE,
    payload: id
  }
}

export {
  USERS_ADD,
  USERS_DELETE,
  usersAdd,
  usersDelete
}
