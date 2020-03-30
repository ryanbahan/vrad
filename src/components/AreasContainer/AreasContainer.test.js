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
          userInfo={{userName: "Bob", accountType: "business"}}
        />
      </Router>);

      const welcomeElement = getByText("Welcome, Bob");
      const accountTypeMessage = getByText("Your Account Type: business")

      expect(welcomeElement).toBeInTheDocument();
      expect(accountTypeMessage).toBeInTheDocument();
  })

  it("should display the Vacation welcome message", () => {
    const { getByText } = render(<Router>
        <AreasContainer
          userInfo={{userName: "Jane", accountType: "vacation"}}
        />
      </Router>);

      const welcomeElement = getByText("Welcome, Jane");
      const accountTypeMessage = getByText("Your Account Type: vacation")

      expect(welcomeElement).toBeInTheDocument();
      expect(accountTypeMessage).toBeInTheDocument();
  })

  it("should display the Other welcome message", () => {
    const { getByText } = render(<Router>
        <AreasContainer
        userInfo={{userName: "Tom", accountType: "other"}}
        />
      </Router>);

      const welcomeElement = getByText("Welcome, Tom");
      const accountTypeMessage = getByText("Your Account Type: other")

      expect(welcomeElement).toBeInTheDocument();
      expect(accountTypeMessage).toBeInTheDocument();
  })

  it("should display the Default welcome message", () => {
    const { getByText } = render(<Router>
        <AreasContainer
          userInfo={{userName: "Cindy", accountType: "undefined"}}
        />
      </Router>);

      const welcomeElement = getByText("Welcome, Cindy");
      const accountTypeMessage = getByText("Your Account Type: Other")

      expect(welcomeElement).toBeInTheDocument();
      expect(accountTypeMessage).toBeInTheDocument();
  })

})

describe("AreasContainer - Area Card Display", () => {
  let utils;

  beforeEach(() => {
    utils = render(<Router>
        <AreasContainer
          userInfo={{userName: "Bob", accountType: "business"}}
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

})
