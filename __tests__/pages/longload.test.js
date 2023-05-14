import React from "react";
import { render } from "@testing-library/react";
import LongLoadComponent from "../../components/long_load/longload";

describe("LongLoadComponent", () => {
  it("renders the correct text", () => {
    const { getByText } = render(<LongLoadComponent />);
    expect(getByText("Sorry!")).toBeInTheDocument();
    expect(
      getByText("This page load is taking longer than we expected.")
    ).toBeInTheDocument();
  });

  it("renders the correct image", () => {
    const { getByAltText } = render(<LongLoadComponent />);
    expect(getByAltText("long_load_img")).toBeInTheDocument();
  });

  it("renders the progress bar", () => {
    const { getByLabelText } = render(<LongLoadComponent />);
    expect(getByLabelText("Long Loader in Progress Bar")).toBeInTheDocument();
  });

  it("renders the progress percentage", () => {
    const { getByText } = render(<LongLoadComponent />);
    expect(getByText("52%")).toBeInTheDocument();
  });
});
