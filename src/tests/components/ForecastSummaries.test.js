import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1525046400000,
      temperature: {
        max: 15,
        min: 10,
      },
      wind: {
        speed: 11,
        direction: "se",
      },
      humidity: 67,
      description: "test",
      icon: 800,
    },
    {
      date: 1525046400022,
      temperature: {
        max: 10,
        min: 5,
      },
      wind: {
        speed: 19,
        direction: "n",
      },
      humidity: 78,
      description: "test2",
      icon: 800,
    },
  ];
  const setterProp = { setSelectedDate: () => {} };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps}
        setSelectedDate={setterProp.setSelectedDate}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProps}
        setSelectedDate={setterProp.setSelectedDate}
      />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
