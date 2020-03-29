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
          {params: {id: 590}}
        }
        />
      </Router>)
  });

  it("should display the user's name with a greeting", () => {
    const { getByText } = utils;
    const name = getByText('Welcome, Ryan B');

    expect(name).toBeInTheDocument();
  })

  it("Should display the page label", () => {
    const { getByText } = utils;
    const label = getByText("Choose Your Listing");

    expect(label).toBeInTheDocument();
  })

  it("Should be able to get listings", async () => {
    const { queryByText } = utils;
    const listingA = await waitForElement(() => queryByText('Hip RiNo Party Spot'));
    const listingB = await waitForElement(() => queryByText('Lowkey Industrial Chic'));
    const listingC = await waitForElement(() => queryByText('New Modern Flat in RiNo'));
    const listingD = await waitForElement(() => queryByText('Upscale Modern Apartments'));
    const listingE = await waitForElement(() => queryByText('Loft Living in RiNo'));
    const listingF = await waitForElement(() => queryByText('Brand New RiNo Build'));

    expect(listingA).toBeInTheDocument();
    expect(listingB).toBeInTheDocument();
    expect(listingC).toBeInTheDocument();
    expect(listingD).toBeInTheDocument();
    expect(listingE).toBeInTheDocument();
    expect(listingF).toBeInTheDocument();
  })

})
