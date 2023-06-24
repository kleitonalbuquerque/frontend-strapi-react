/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-node-access */
import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import Home from ".";
import { theme } from "../../styles/theme";

test("renders learn react link", () => {
  const { debug } = renderTheme(<Home />);
  debug();
  const headingContainer = screen.getByRole("heading", {
    name: "Hello!",
  }).parentElement;
  expect(headingContainer).toHaveStyleRule({
    background: theme.colors.secondaryBg,
  });
  // expect(headingContainer).toHaveStyleRule('background', 'blue');
  expect(headingContainer).toMatchSnapshot();
});
