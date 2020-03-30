import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/';
import { BrowserRouter as Router, Link } from "react-router-dom";
import AreasContainer from './AreasContainer';

describe("AreasContainer - Navigation Display", () => {
  it("should display the Business welcome message", () => {
    const { getByText } = render(<Router>
        <AreasContainer
          user={"Bob"}
          userAccountType={"business"}
        />
      </Router>);

      const welcomeElement = getByText("Welcome, Bob");
      const accountTypeMessage = getByText("This is Business View")

      expect(welcomeElement).toBeInTheDocument();
      expect(accountTypeMessage).toBeInTheDocument();
  })

  it("should display the Vacation welcome message", () => {
    const { getByText } = render(<Router>
        <AreasContainer
          user={"Jane"}
          userAccountType={"vacation"}
        />
      </Router>);

      const welcomeElement = getByText("Welcome, Jane");
      const accountTypeMessage = getByText("This is Vacation View")

      expect(welcomeElement).toBeInTheDocument();
      expect(accountTypeMessage).toBeInTheDocument();
  })

  it("should display the Other welcome message", () => {
    const { getByText } = render(<Router>
        <AreasContainer
          user={"Tom"}
          userAccountType={"other"}
        />
      </Router>);

      const welcomeElement = getByText("Welcome, Tom");
      const accountTypeMessage = getByText("This is Other View")

      expect(welcomeElement).toBeInTheDocument();
      expect(accountTypeMessage).toBeInTheDocument();
  })

  it("should display the Default welcome message", () => {
    const { getByText } = render(<Router>
        <AreasContainer
          user={"Cindy"}
          userAccountType={"undefined"}
        />
      </Router>);

      const welcomeElement = getByText("Welcome, Cindy");
      const accountTypeMessage = getByText("This is VRad!")

      expect(welcomeElement).toBeInTheDocument();
      expect(accountTypeMessage).toBeInTheDocument();
  })

})

describe("AreasContainer - Area Card Display", () => {
  let utils;

  beforeEach(() => {
    utils = render(<Router>
        <AreasContainer
          user={"Bob"}
          userAccountType={"business"}
        />
      </Router>);
  })

  afterEach(() => {
    utils = null;
  })

  it("Should display the page label", () => {
    const { getByText } = utils;
    const label = getByText("Choose Your Destination");

    expect(label).toBeInTheDocument();
  })

  // it("should display the Business welcome message", () => {
  //   const { queryByText } = utils;
  //   const areaA = await waitForElement(() => queryByText('River North'));
  //
  //   expect(areaA).toBeInTheDocument();
  // })

})
