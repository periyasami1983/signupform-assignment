import { put, takeLatest, call } from 'redux-saga/effects';
import { ADD_NEW_USER } from './../actionsTypes/users';
import { addUserSuccess, addUserFailure } from './../actionCreators/users';


const url = 'http://localhost:4000/users';

function* doAddUser() {  
  try {
    const response = yield fetch(url + {
      method: 'POST',
      headers: {
        Accept: 'application/Json',
        'Content-Type': 'application/Json',
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
      }),
    });
    yield put(addUserSuccess(response));
    console.log(response);
  } catch (error) {
    // console.log(error);
    yield put(addUserFailure(error));
  }
}

export default function* rootSaga() {
  yield [takeLatest(ADD_NEW_USER, doAddUser)];
}
