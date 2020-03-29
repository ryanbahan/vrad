import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/';
import { BrowserRouter as Router, Link } from "react-router-dom";
import ListingCard from './ListingCard';
import Nav from '../Nav/Nav';

describe("ListingCard", () => {
  let utils;

  beforeEach(() => {
    utils = render(
      <Router>
        <ListingCard
        />
      </Router>)
  })

  it("Should be able to display listing card information", () => {
    const { debug } = utils;
    debug();
  })
})
