import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/';
import { BrowserRouter as Router, Link } from "react-router-dom";
import ListingsContainer from './ListingsContainer';
import Nav from '../Nav/Nav';

describe("ListingsContainer", () => {
  let utils;

  beforeEach(() => {
    utils = render(
      <Router>
        <ListingsContainer
        user={"Ryan B"}
        match={
          {params: {id: 5}}
        }
        />
      </Router>)
  });

  it("should display the user's name with a greeting", () => {
    const { debug, getByText } = utils;
    const name = getByText('Welcome, Ryan B');

    expect(name).toBeInTheDocument();
  })

  it("Should display the page label", () => {
    const { debug, getByText } = utils;
    const label = getByText("Choose Your Listing");

    expect(label).toBeInTheDocument();
  })

})
