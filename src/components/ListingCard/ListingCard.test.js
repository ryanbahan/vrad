import React from 'react';
import { render, waitForElement, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/';
import { BrowserRouter as Router, Link } from "react-router-dom";
import ListingCard from './ListingCard';
import Nav from '../Nav/Nav';

describe("ListingCard", () => {
  let utils;
  const mockToggleFavorite = jest.fn().mockImplementation((e) => console.log(e));

  beforeEach(() => {

    utils = render(
      <Router>
        <ListingCard
          areaID="751"
          id={3921}
          isFavorite="inactive"
          name="Spacious New Build in Park Hill"
          toggleFavorite={mockToggleFavorite}
        />
      </Router>)
  })

  afterEach(() => {
    cleanup
  })

  it("Should be able to display listing card information", () => {
    const { getByText, getByTestId } = utils;
    const title = getByText("Spacious New Build in Park Hill");
    const viewListingButton = getByText("View Listing");
    const favoriteButton = getByTestId("listing-card-favorite-button");

    expect(title).toBeInTheDocument();
    expect(viewListingButton).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
  })

  it("Should be able to toggle favorites", () => {
    const { getByTestId, debug } = utils;
    const favoriteButton = getByTestId("listing-card-favorite-button");

    expect(favoriteButton.className).toBe("favorite-button-inactive");

    fireEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
  })
})
