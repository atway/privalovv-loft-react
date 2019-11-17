import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, getByTestId, getAllByText, wait } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import createStore from "./store";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

const store = createStore();

describe("application behavior without logging in", () => {
  it("show login & signup", () => {
    const MockApp = () => (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const { getByText, queryByText, getAllByText } = render(<MockApp />);
    expect(getByText("email")).toBeTruthy();
    expect(getByText("name")).toBeTruthy();
    expect(getByText("surname")).toBeTruthy();
    expect(getByText("password")).toBeTruthy();
    fireEvent.click(getAllByText(/.*Войти.*/)[0]);
    expect(getByText("email")).toBeTruthy();
    expect(getByText("password")).toBeTruthy();
    expect(queryByText("surname")).toBeFalsy();
    fireEvent.click(getAllByText(/.*Войти.*/)[0]);
  });
});

describe("application behavior after logging in", () => {
  it("show tabs", async () => {
    const MockApp = () => (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );  
    const { getByText, getByTestId, getAllByText, queryByText } = render(<MockApp />);
    fireEvent.click(getAllByText(/.*Войти.*/)[0]);
    expect(getByText("email")).toBeTruthy();
    expect(getByText("password")).toBeTruthy();
    expect(queryByText("surname")).toBeFalsy();
    fireEvent.click(getAllByText(/.*Войти.*/)[0]);
    expect(getByTestId("loginemail")).toBeTruthy();
    fireEvent.change(getByTestId("loginemail"), {
      target: { value: "123@123" }
    });
    expect(getByTestId("loginpassword")).toBeTruthy();
    fireEvent.change(getByTestId("loginpassword"), {
      target: { value: "123" }
    });
    expect(getAllByText("Войти")[1]).toBeTruthy();
    fireEvent.click(getAllByText("Войти")[1]);
    await wait(() => getByText("Profile"));
    fireEvent.click(getByText("Profile"));
    expect(getByText("user profile")).toBeTruthy();
    fireEvent.click(getByText("Logout"));
    expect(getByText("email")).toBeTruthy();
    expect(getByText("password")).toBeTruthy();
  });
});
