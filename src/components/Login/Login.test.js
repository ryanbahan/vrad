import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router} from "react-router-dom";
import Login from './Login';

describe("Login", () => {
  let utils;

  beforeEach(() => {
    utils = render(<Router>
        <Login
          handleSubmit={jest.fn()}
        />
      </Router>)
  })

  it("should have correct Label inputs", () => {
    const { getByLabelText } = utils;

    expect(getByLabelText("Name")).toBeInTheDocument();
    expect(getByLabelText("Email Address")).toBeInTheDocument();
    expect(getByLabelText("Account Type")).toBeInTheDocument();
  })

  it("should require Inputs value for input and selection", () => {
    const { getByPlaceholderText } = utils;

    expect(getByPlaceholderText("input-name")).toHaveAttribute("required");
    expect(getByPlaceholderText("input-email")).toHaveAttribute("required");
    expect(getByPlaceholderText("account-type")).toHaveAttribute("required");
  })

  it("should have value in enter inputs", () => {
    const { getByPlaceholderText } = utils;

    fireEvent.change(getByPlaceholderText('input-name'), {target: {value: "Tom"}});
    fireEvent.change(getByPlaceholderText('input-email'), {target: {value: "email@email.com"}});
    fireEvent.change(getByPlaceholderText('account-type'), {target: {value: "business"}});

    expect(getByPlaceholderText('input-name').value).toBe('Tom')
    expect(getByPlaceholderText('input-email').value).toBe('email@email.com')
    expect(getByPlaceholderText('account-type').value).toBe('business')
  })

})
