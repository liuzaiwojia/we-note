import { SET_FOCUS } from './actionTypes/focusActionType'

function setFocus (focusType) {
  return {
    type: SET_FOCUS,
    focus: focusType
  }
}

export {
  setFocus
}