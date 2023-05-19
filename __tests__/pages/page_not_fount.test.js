import React from "react";
import { render, screen } from "@testing-library/react";
import PageNotFound from "@/components/page_not_found";

describe("PageNotFound", () => {
  test("renders search tips", () => {
    render(<PageNotFound />);
    const searchTips = screen.getByText(/Search Tips/i);
    expect(searchTips).toBeInTheDocument();
  });

  test('renders "No Matches Found" message', () => {
    render(<PageNotFound />);
    const noMatchesFound = screen.getByText(/No Matches Found/i);
    expect(noMatchesFound).toBeInTheDocument();
  });

  test('renders "Showing results for" message', () => {
    render(<PageNotFound />);
    const showingResultsFor = screen.getByText(/Showing results for/i);
    expect(showingResultsFor).toBeInTheDocument();
  });

  test('renders "Search for" message', () => {
    render(<PageNotFound />);
    const searchFor = screen.getByText(/Search for/i);
    expect(searchFor).toBeInTheDocument();
  });

  test('renders "Showing X results" message', () => {
    render(<PageNotFound />);
    const showingResults = screen.getByText(/Showing \d+ results/i);
    expect(showingResults).toBeInTheDocument();
  });

  test('renders "Speak to a Specialist" section', () => {
    render(<PageNotFound />);
    const speakToSpecialist = screen.getByText(/Speak to a Specialist/i);
    expect(speakToSpecialist).toBeInTheDocument();
  });

  test('renders "Send Feedback" section', () => {
    render(<PageNotFound />);
    expect(screen.getByText("Send Feedback")).toBeInTheDocument();
  });
});
