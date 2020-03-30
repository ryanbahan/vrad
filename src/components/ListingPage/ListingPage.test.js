import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/';
import { BrowserRouter as Router, Link } from "react-router-dom";
import ListingPage from './ListingPage';

describe.skip("ListingPage", () => {
  let utils;

  beforeEach(() => {
    utils = render(<Router>
        <ListingPage
          match={
            { params: {id: 3} }
          }
        />
      </Router>);
  });

  it("should display the listing title", async () => {
      const { getByText } = utils;
      const title = await waitForElement(() => getByText('Hip RiNo Party Spot'));

      expect(title).toBeInTheDocument();
  })

  it("should display the listing address", async () => {
      const { getByText } = utils;
      const address = await waitForElement(() => getByText('2250 Lawrence St'));

      expect(address).toBeInTheDocument();
  })

  it("should display the location shortname", async () => {
      const { getByText } = utils;
      const locationShortname = await waitForElement(() => getByText('rino'));

      expect(locationShortname).toBeInTheDocument();
  })

  it("should display the location details", async () => {
      const { getByText } = utils;
      const locationDetails = await waitForElement(() => getByText('$420 per night / 3 beds / 2.5 baths'));

      expect(locationDetails).toBeInTheDocument();
  })

  it("should display the listing features", async () => {
      const { getByText, queryByText } = utils;
      const features = getByText("Features");
      const featureA = await waitForElement(() => getByText('hot tub'));
      const featureB = await waitForElement(() => queryByText('espresso machine'));

      expect(features).toBeInTheDocument();
      expect(featureA).toBeInTheDocument();
      expect(featureB).toBeInTheDocument();
  })

})
