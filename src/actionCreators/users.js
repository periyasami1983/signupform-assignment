import { ADD_NEW_USER, ADD_NEW_USER_SUCCESS, ADD_NEW_USER_FAILURE } from './../actionsTypes/users';

export function addUser(payload, id) {
  return {
    type: ADD_NEW_USER,
    payload,
    id,
  };
}

export function addUserSuccess(response) {
  return {
    type: ADD_NEW_USER_SUCCESS,
    response,
  };
}

export function addUserFailure(error) {
  return {
    type: ADD_NEW_USER_FAILURE,
    error,
  };
}
