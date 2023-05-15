const ReactTestRenderer = require("react-test-renderer");
import HeaderComponent from "@/components/header";

jest.mock("next/router", () => {
  return {
    useRouter: jest.fn(),
  };
});

it("renders correctly", () => {
  const tree = ReactTestRenderer.create(
    <HeaderComponent>McKesson</HeaderComponent>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
