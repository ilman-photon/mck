import Home from "../../pages/index";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should render home page with hello world", () => {
    const textToFind = "Hello World!";
    render(<Home />);

    // const heading = screen.queryAllByText(textToFind);
    const logoImg = screen.getByRole("img");

    expect(logoImg).toBeInTheDocument();
  });
});
