import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, Link } from "react-router-dom";
import AreasContainer from './AreasContainer';

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
    const label = getByText("Where to, friend?");

    expect(label).toBeInTheDocument();
  })

  it("Should be able to get Areas Name", async () => {
    const { getByText } = utils;
    const areaNameA = await waitForElement(() => getByText("River North"));
    const areaNameB = await waitForElement(() => getByText("Park Hill"));
    const areaNameC = await waitForElement(() => getByText("Lower Highlands"));
    const areaNameD = await waitForElement(() => getByText("Capitol Hill"));

    expect(areaNameA).toBeInTheDocument();
    expect(areaNameB).toBeInTheDocument();
    expect(areaNameC).toBeInTheDocument();
    expect(areaNameD).toBeInTheDocument();
  })

  it("Should be able to get Area Short Name", async () => {
    const { getByText } = utils;
    const areaShortNameA = await waitForElement(() => getByText("(RiNo)"));
    const areaShortNameB = await waitForElement(() => getByText("(Park Hill)"));
    const areaShortNameC = await waitForElement(() => getByText("(LoHi)"));
    const areaShortNameD = await waitForElement(() => getByText("(Cap Hill)"));

    expect(areaShortNameA).toBeInTheDocument();
    expect(areaShortNameB).toBeInTheDocument();
    expect(areaShortNameC).toBeInTheDocument();
    expect(areaShortNameD).toBeInTheDocument();
  })

  it("Should be able to get Area Summary", async () => {
    const { queryByText } = utils;
    const areaSummaryA = await waitForElement(() => queryByText("RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!"));
    const areaSummaryB = await waitForElement(() => queryByText("Park Hill features one of the best views of the downtown area and surrounding mountains. With easy access to City Park and the major highways, Park Hill also includes many unique styles of homes."));
    const areaSummaryC = await waitForElement(() => queryByText("The Lower Highlands area, often referred to as the Highlands or LoHi, was one of the first areas to experience massive growth from the downtown area. Known for many great bars and restaurants with a great eastern facing view of the Downtown area."));
    const areaSummaryD = await waitForElement(() => queryByText("Capitol Hill is home to many historic homes and parks in the Denver area. Cap Hill offers great proximity to Downtown area and has many options for enjoying the wonderful weather in Denver."));

    expect(areaSummaryA).toBeInTheDocument();
    expect(areaSummaryB).toBeInTheDocument();
    expect(areaSummaryC).toBeInTheDocument();
    expect(areaSummaryD).toBeInTheDocument();
  })

})
