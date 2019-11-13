import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  registerUserRequest,
  unregisterUserRequest,
  registerUserSuccess,
  registerUserFailure,
  authUserRequest,
  authUserSuccess,
  authUserFailure,
  upsertCardRequest,
  upsertCardSuccess,
  upsertCardFailure
} from "./actions";

const user = handleActions(
  {
    [registerUserRequest]: () => { return { token: null }},
    [unregisterUserRequest]: () => { return { token: null }},
    [registerUserSuccess]: (_state, action) => action.payload,
    [authUserRequest]: () => { return { token: null }},
    [authUserSuccess]: (_state, action) => action.payload,
  },
  { token: null },
);

const card = handleActions(
  {
    [upsertCardRequest]: () => {},
    [upsertCardSuccess]: (_state, action) => action.payload,
  },
  {},
);

const error = handleActions(
  {
    [registerUserRequest]: () => null,
    [registerUserFailure]: (_state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  user,
  card,
  error,
});

