import { render, screen, act } from "@testing-library/react";
import FooterComponent from "@/components/footer";
import axios from "axios";
import { footerData } from "./__mocks__/footer";
jest.mock("axios");

describe("FooterComponent - Display values from CMS", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: footerData });
  });

  test("Display values from CMS", async () => {
    await act(async () => {
      render(<FooterComponent />);
    });
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });
});
