import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1525046400000,
    description: "Stub description",
    icon: 800,
    temperature: {
      min: 12,
      max: 22,
    },
  };
  const setterProp = { setSelectedDate: () => {} };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        setSelectedDate={setterProp.setSelectedDate}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        setSelectedDate={setterProp.setSelectedDate}
      />
    );

    expect(getByText("Mon Apr 30 2018")).toHaveAttribute(
      "class",
      "forecastSummary__date"
    );
    expect(getByText("Stub description")).toHaveAttribute(
      "class",
      "forecastSummary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveAttribute(
      "class",
      "forecastSummary__icon"
    );
    expect(getByText("22°C")).toHaveAttribute(
      "class",
      "forecastSummary__temperature"
    );
  });
});
