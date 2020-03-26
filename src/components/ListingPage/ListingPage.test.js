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

      debug();
    //   const shortNameElement = getByText(`(RiNo)`);
    //   const aboutElement = getByText("RiNo is a burgeoning area with ...");
    //
      expect(features).toBeInTheDocument();
      expect(favorite).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      // expect(aboutElement).toBeInTheDocument();
  })

})
