const ReactTestRenderer = require("react-test-renderer");
import HeaderComponent from "@/components/header";

it("renders correctly", () => {
  const tree = ReactTestRenderer.create(
    <HeaderComponent>McKesson</HeaderComponent>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
jest.mock("next/router", () => {
  return {
    useRouter: jest.fn(),
  };
});
