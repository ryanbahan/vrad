import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, Link } from "react-router-dom";
import ListingPage from './ListingPage';

describe("ListingPage", () => {

  it("should display the listing information", async () => {
    const { getByText, debug } = render(<Router>
        <ListingPage
          match={
            { params: {id: 3} }
          }
        />
      </Router>);

      const features = getByText("Features");
      const favorite = getByText("Favorite");
      const title = await waitForElement(() => getByText('Hip RiNo Party Spot'));
      const address = await waitForElement(() => getByText('2250 Lawrence St'));
      const locationShortname = await waitForElement(() => getByText('rino'));
      const locationDetails = await waitForElement(() => getByText('$420 per night / 3 beds / 2.5 baths'));

      debug();

      expect(features).toBeInTheDocument();
      expect(favorite).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(address).toBeInTheDocument();
      expect(locationShortname).toBeInTheDocument();
      expect(locationDetails).toBeInTheDocument();

  })

})
