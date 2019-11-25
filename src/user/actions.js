import { createAction } from 'redux-actions';

export const registerUserRequest = createAction('REGISTER_USER_REQUEST');
export const registerUserSuccess = createAction('REGISTER_USER_SUCCESS');
export const registerUserFailure = createAction('REGISTER_USER_FAILURE');

export const authUserRequest = createAction('AUTH_USER_REQUEST');
export const authUserSuccess = createAction('AUTH_USER_SUCCESS');
export const authUserFailure = createAction('AUTH_USER_FAILURE');
export const logoutUserRequest = createAction('LOGOUT_USER_REQUEST');

export const upsertCardRequest = createAction('UPSERT_CARD_REQUEST');
export const upsertCardSuccess = createAction('UPSERT_CARD_SUCCESS');
export const upsertCardFailure = createAction('UPSERT_CARD_FAILURE');

export const fetchCardRequest = createAction('FETCH_CARD_REQUEST');
export const fetchCardSuccess = createAction('FETCH_CARD_SUCCESS');
export const fetchCardFailure = createAction('FETCH_CARD_FAILURE');
