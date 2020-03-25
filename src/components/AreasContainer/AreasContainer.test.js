import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router, Link } from "react-router-dom";
import AreasContainer from './AreasContainer';

describe("AreasContainer", () => {
  it("should display the welcome message", () => {
    const { getByText } = render(<Router>
        <AreasContainer
          user={"Bob"}
        />
      </Router>);

      const welcomeElement = getByText("Welcome, Bob");

      expect(welcomeElement).toBeInTheDocument();
  })

})
