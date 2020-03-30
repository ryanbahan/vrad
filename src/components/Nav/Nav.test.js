import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router} from "react-router-dom";
import Nav from './Nav';

describe("Nav", () => {
  it("should display the Business welcome message", () => {
    const { getByText } = render(<Router>
        <Nav
          userInfo={{name: "Bob", accountType: "business"}}
        />
        </Router>);

      const welcomeElement = getByText("Welcome, Bob");
      const accountTypeMessage = getByText("Your Account Type: business")

      expect(welcomeElement).toBeInTheDocument();
      expect(accountTypeMessage).toBeInTheDocument();
  })

  it("should display the Vacation welcome message", () => {
    const { getByText } = render(<Router>
        <Nav
          userInfo={{name: "Jane", accountType: "vacation"}}
        />
      </Router>);

      const welcomeElement = getByText("Welcome, Jane");
      const accountTypeMessage = getByText("Your Account Type: vacation")

      expect(welcomeElement).toBeInTheDocument();
      expect(accountTypeMessage).toBeInTheDocument();
  })

  it("should display the Other welcome message", () => {
    const { getByText } = render(<Router>
        <Nav
        userInfo={{name: "Tom", accountType: "other"}}
        />
      </Router>);

      const welcomeElement = getByText("Welcome, Tom");
      const accountTypeMessage = getByText("Your Account Type: other")

      expect(welcomeElement).toBeInTheDocument();
      expect(accountTypeMessage).toBeInTheDocument();
  })

  it("should display the Default welcome message", () => {
    const { getByText } = render(<Router>
        <Nav
          userInfo={{}}
        />
      </Router>);

      const welcomeElement = getByText("Welcome, friend!");
      const accountTypeMessage = getByText("Your Account Type: Other")

      expect(welcomeElement).toBeInTheDocument();
      expect(accountTypeMessage).toBeInTheDocument();
  })

})
