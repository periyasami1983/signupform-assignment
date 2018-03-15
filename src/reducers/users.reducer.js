import { ADD_NEW_USER, ADD_NEW_USER_SUCCESS, ADD_NEW_USER_FAILURE } from './../actionsTypes/users';

const initialState = {
  userdata: [],
  error: [],
  isLoading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_NEW_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userdata: action.response,
      };
    case ADD_NEW_USER_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default: {
      return state;
    }
  }
};

export default usersReducer;
