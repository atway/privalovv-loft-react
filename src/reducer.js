import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  registerUserRequest,
  logoutUserRequest,
  registerUserSuccess,
  registerUserFailure,
  authUserRequest,
  authUserSuccess,
  authUserFailure,
  upsertCardRequest,
  upsertCardSuccess,
  fetchCardSuccess,
  upsertCardFailure
} from "./user/actions";

const user = handleActions(
  {
    [registerUserRequest]: () => {
      return { token: null };
    },
    [logoutUserRequest]: () => {
      return { token: null };
    },
    [registerUserSuccess]: (_state, action) => action.payload,
    [authUserRequest]: () => {
      return { token: null };
    },
    [authUserSuccess]: (_state, action) => action.payload
  },
  { token: null }
);

const card = handleActions(
  {
    [upsertCardRequest]: () => {},
    [upsertCardSuccess]: (_state, action) => action.payload,
    [fetchCardSuccess]: (_state, action) => action.payload
  },
  {}
);

const error = handleActions(
  {
    [registerUserRequest]: () => null,
    [registerUserFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  user,
  card,
  error
});
