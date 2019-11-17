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
} from "./actions";

export const taxiUserMiddleware = store => next => action => {
  if (action.type === registerUserRequest.toString()) {
    fetch("https://loft-taxi.glitch.me/register", {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(response => {
        if (response.success === true) {
          store.dispatch(
            registerUserSuccess({ ...action.payload, token: response.token })
          );
        }
      })
      .catch(error => {
        store.dispatch(registerUserFailure(error));
      });
  } else if (action.type === authUserRequest.toString()) {
    fetch("https://loft-taxi.glitch.me/auth", {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(token => {
        store.dispatch(authUserSuccess(token));
      })
      .catch(error => {
        store.dispatch(authUserFailure(error));
      });
  } else if (action.type === upsertCardRequest.toString()) {
    fetch("https://loft-taxi.glitch.me/card", {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(card => {
        store.dispatch(upsertCardSuccess(card));
      })
      .catch(error => {
        store.dispatch(upsertCardFailure(error));
      });
  } else if (action.type === fetchCardRequest.toString()) {
    fetch(`https://loft-taxi.glitch.me/card?token=${action.payload}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(card => {
        store.dispatch(fetchCardSuccess(card));
      })
      .catch(error => {
        store.dispatch(fetchCardFailure(error));
      });
  }

  return next(action);
};
