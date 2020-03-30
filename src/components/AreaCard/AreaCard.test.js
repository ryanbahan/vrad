import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, Link } from "react-router-dom";
import AreaCard from './AreaCard';

describe("AreaCard - Listing Information", () => {
  let utils;

  beforeEach(() => {
    utils = render(<Router>
        <AreaCard
          id={5}
          key={5}
          name={"River North"}
          shortname={"RiNo"}
          about={"RiNo is a burgeoning area with ..."}
        />
      </Router>)
  });

  it("should display the area Name", () => {
    const { getByText } = utils;
    const nameElement = getByText("River North");

    expect(nameElement).toBeInTheDocument();
  })

  it("should display the area Short Name", () => {
    const { getByText } = utils;
    const shortNameElement = getByText(`(RiNo)`);

    expect(shortNameElement).toBeInTheDocument();
  })

  it("should display the area About", () => {
    const { getByText } = utils;
    const aboutElement = getByText("RiNo is a burgeoning area with ...");

    expect(aboutElement).toBeInTheDocument();
  })

})

describe("AreaCard - Overall Card", () => {
  it("should display the area Name", () => {
    const { getByText } = render(<Router>
        <AreaCard
          id={2}
          key={2}
          name={"South Park"}
          shortname={"SPark"}
          about={"Located 25 miles from ..."}
        />
      </Router>);

    const nameElement = getByText("South Park");
    const shortNameElement = getByText(`(SPark)`);
    const aboutElement = getByText("Located 25 miles from ...");

    expect(nameElement).toBeInTheDocument();
    expect(shortNameElement).toBeInTheDocument();
    expect(aboutElement).toBeInTheDocument();
  })

})
