import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom/';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Login from './Login';

describe("Login", () => {
  it("should store Login information", () => {
    // 
    // const { getByPlaceholderText, getByText } = render(<Router><Login handleSubmit={jest.fn()}/></Router>)
    //
    // fireEvent.change(getByPlaceholderText('input-name'), {target: {value: "Tom"}});
    // fireEvent.change(getByPlaceholderText('input-email'), {target: {value: "email@email.com"}});
    // fireEvent.change(getByPlaceholderText('input-type'), {target: {value: "business"}});

  })

})
