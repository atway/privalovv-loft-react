import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByTestId } from '@testing-library/react'

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('application behavior without logging in', () => {
  it('show tabs', () => {
    const MockApp = () => (
      <App />
    );
    const { getByText, getByLabelText } = render(<MockApp />);
    fireEvent.click(getByText('Profile'));
    expect(getByText('You are not logged')).toBeTruthy()
    fireEvent.click(getByText('Map'));
    expect(getByText('please log in')).toBeTruthy()
    fireEvent.click(getByText('Login'));
    expect(getByText('email')).toBeTruthy()
    expect(getByText('password')).toBeTruthy()
    fireEvent.click(getByText('SignUp'));
    expect(getByText('email')).toBeTruthy()
    expect(getByText('name')).toBeTruthy()
    expect(getByText('surname')).toBeTruthy()
    expect(getByText('password')).toBeTruthy()
    fireEvent.click(getByText('Logout'));
    expect(getByText('email')).toBeTruthy()
    expect(getByText('password')).toBeTruthy()
  })
});

describe('application behavior after logging in', () => {
  it('show tabs', () => {
    const MockApp = () => (
      <App />
    );
    const { getByText, getByTestId } = render(<MockApp />);
    fireEvent.click(getByText('Profile'));
    expect(getByText('You are not logged')).toBeTruthy()
    fireEvent.click(getByText('Login'));
    expect(getByTestId('loginemail')).toBeTruthy()
    fireEvent.change(getByTestId('loginemail'),{ target: { value: '123@123' } });
    expect(getByTestId('loginpassword')).toBeTruthy()
    fireEvent.change(getByTestId('loginpassword'),{ target: { value: '123' } });
    expect(getByText('Signing')).toBeTruthy()
    fireEvent.click(getByText('Signing'));
    fireEvent.click(getByText('Profile'));
    expect(getByText('user profile')).toBeTruthy()
    fireEvent.click(getByText('Logout'));
    expect(getByText('email')).toBeTruthy()
    expect(getByText('password')).toBeTruthy()
  })
})