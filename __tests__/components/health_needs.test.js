import { render, screen, act } from "@testing-library/react";
import HealthNeedsComponent from "@/components/health_needs";

jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          contentLink: {
            id: 128,
            workId: 0,
            guidValue: "ce527f9a-97d8-4ccf-be55-b1c0da77e198",
            providerName: null,
            url: null,
            expanded: null,
          },
          image: { expandedValue: { url: "dfgd" } },
          title: { value: "CarouselComponent" },
          request: {},
          contentArea: { expandedValue: ["Health"] },
        },
      ],
    })
  ),
}));

jest.mock("next/router", () => {
  return {
    useRouter: jest.fn(),
  };
});
describe("HealthNeedsComponent - Display values from CMS", () => {
  test("Display values from CMS", async () => {
    await act(async () => {
      render(<HealthNeedsComponent />);
    });
  });
});
