import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router, Link } from "react-router-dom";
import AreaCard from './AreaCard';

describe("AreaCard", () => {
  it("should display the area information", () => {
    const { getByText } = render(<Router><AreaCard
        id={5}
        key={5}
        name={"River North"}
        shortname={"RiNo"}
        about={"RiNo is a burgeoning area with ..."}
      /></Router>);

      const nameElement = getByText("River North");
      const shortNameElement = getByText(`(RiNo)`);
      const aboutElement = getByText("RiNo is a burgeoning area with ...");

      expect(nameElement).toBeInTheDocument();
      expect(shortNameElement).toBeInTheDocument();
      expect(aboutElement).toBeInTheDocument();
  })

})
