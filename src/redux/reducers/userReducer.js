
import { SET_USER }  from '../actions/actionTypes/userActionType'

const userApp = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      if (action.user) {
        return Object.assign({}, state, action.user)
      } else {
        return action.user
      }
    default:
      return state
  }
}

export default userApp