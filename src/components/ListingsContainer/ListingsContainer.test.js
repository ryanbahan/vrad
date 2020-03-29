import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/';
import { BrowserRouter as Router, Link } from "react-router-dom";
import ListingsContainer from './ListingsContainer';
import Nav from '../Nav/Nav';

describe("ListingsContainer - RiNo View", () => {
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
  })

  afterEach(() => {
    utils = null;
  })

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

describe("ListingsContainer - Park Hill View", () => {
  let utils;

  beforeEach(() => {
    utils = render(
      <Router>
        <ListingsContainer
        user={"Tim N"}
        match={
          {params: {id: 751}}
        }
        />
      </Router>)
  })

  it("Should display the user's name with a greeting", () => {
    const { getByText } = utils;
    const name = getByText('Welcome, Tim N');

    expect(name).toBeInTheDocument();
  })

  it("Should display the page label", () => {
    const { getByText } = utils;
    const label = getByText("Choose Your Listing");

    expect(label).toBeInTheDocument();
  })

  it("Should be able to get listings", async () => {
    const { queryByText } = utils;
    const listingA = await waitForElement(() => queryByText('Spacious New Build in Park Hill'));
    const listingB = await waitForElement(() => queryByText('Updated Park Hill Duplex'));
    const listingC = await waitForElement(() => queryByText('Historic Park Hill abode'));

    expect(listingA).toBeInTheDocument();
    expect(listingB).toBeInTheDocument();
    expect(listingC).toBeInTheDocument();
  })
})

describe("ListingsContainer - LoHi View", () => {
  let utils;

  beforeEach(() => {
    utils = render(
      <Router>
        <ListingsContainer
        user={"Khalid W"}
        match={
          {params: {id: 408}}
        }
        />
      </Router>)
  })

  it("Should display the user's name with a greeting", () => {
    const { getByText } = utils;
    const name = getByText('Welcome, Khalid W');

    expect(name).toBeInTheDocument();
  })

  it("Should display the page label", () => {
    const { getByText } = utils;
    const label = getByText("Choose Your Listing");

    expect(label).toBeInTheDocument();
  })

  it("Should be able to get listings", async () => {
    const { queryByText } = utils;
    const listingA = await waitForElement(() => queryByText('LoHi Heaven'));
    const listingB = await waitForElement(() => queryByText('LoHi Bungalow'));
    const listingC = await waitForElement(() => queryByText('Quaint Lohi Duplex'));
    const listingD = await waitForElement(() => queryByText('Downtown Views Galore'));
    const listingE = await waitForElement(() => queryByText('LoHi Super Pad'));
    const listingF = await waitForElement(() => queryByText('Gorgeous LoHi Home'));
    const listingG = await waitForElement(() => queryByText('Open Layout LoHi Getaway'));

    expect(listingA).toBeInTheDocument();
    expect(listingB).toBeInTheDocument();
    expect(listingC).toBeInTheDocument();
    expect(listingD).toBeInTheDocument();
    expect(listingE).toBeInTheDocument();
    expect(listingF).toBeInTheDocument();
    expect(listingG).toBeInTheDocument();
  })
})

describe("ListingsContainer - Cap Hill View", () => {
  let utils;

  beforeEach(() => {
    utils = render(
      <Router>
        <ListingsContainer
        user={"Robbie J"}
        match={
          {params: {id: 240}}
        }
        />
      </Router>)
  })

  it("Should display the user's name with a greeting", () => {
    const { getByText } = utils;
    const name = getByText('Welcome, Robbie J');

    expect(name).toBeInTheDocument();
  })

  it("Should display the page label", () => {
    const { getByText } = utils;
    const label = getByText("Choose Your Listing");

    expect(label).toBeInTheDocument();
  })

  it("Should be able to get listings", async () => {
    const { queryByText } = utils;
    const listingA = await waitForElement(() => queryByText('Cap Hill Overlook'));
    const listingB = await waitForElement(() => queryByText('Cap Hill Duplex Delight'));
    const listingC = await waitForElement(() => queryByText('Cap Hill Castle'));
    const listingD = await waitForElement(() => queryByText('Elegant Cap Hill Mansion'));

    expect(listingA).toBeInTheDocument();
    expect(listingB).toBeInTheDocument();
    expect(listingC).toBeInTheDocument();
    expect(listingD).toBeInTheDocument();
  })
})
