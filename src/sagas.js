import { call, put, takeLatest } from "redux-saga/effects";
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  authUserRequest,
  authUserSuccess,
  authUserFailure,
  upsertCardRequest,
  upsertCardSuccess,
  upsertCardFailure,
  fetchCardRequest,
  fetchCardSuccess,
  fetchCardFailure
} from "./user/actions";

const fetchData = (url, params) =>
  fetch(`https://loft-taxi.glitch.me/${url}`, params).then(response =>
    response.json()
  );

function* registrationSaga(action) {
  try {
    const response = yield call(fetchData, "register", {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: { "Content-Type": "application/json" }
    });
    yield put(registerUserSuccess(response.token));
  } catch (error) {
    yield put(registerUserFailure(error));
  }
}

function* authorizationSaga(action) {
  try {
    const response = yield call(fetchData, "auth", {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: { "Content-Type": "application/json" }
    });
    yield put(authUserSuccess(response));
  } catch (error) {
    yield put(authUserFailure(error));
  }
}

function* paymentSaga(action) {
  if (action.type === 'UPSERT_CARD_REQUEST') {
    try {
      const response = yield call(fetchData, "card", {
        method: "POST",
        body: JSON.stringify(action.payload),
        headers: { "Content-Type": "application/json" }
      });
      if (response.success === true) {
        yield put(upsertCardSuccess(action.payload));
      }
    } catch (error) {
      yield put(upsertCardFailure(error));
    }
  } else {
    try {
      const response = yield call(fetchData, `card?token=${action.payload}`, {
        method: "GET",
      });
      yield put(fetchCardSuccess(response));
    } catch (error) {
      yield put(fetchCardFailure(error));
    }
  }
}

export default function* rootSaga(action) {
  yield takeLatest("REGISTER_USER_REQUEST", registrationSaga);
  yield takeLatest("AUTH_USER_REQUEST", authorizationSaga);
  yield takeLatest("UPSERT_CARD_REQUEST", paymentSaga);
  yield takeLatest("FETCH_CARD_REQUEST", paymentSaga);
}
