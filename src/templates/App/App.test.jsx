/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-node-access */
import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import Home from ".";
import { theme } from "../../styles/theme";

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  })
})

// test("renders learn react link", () => {
//   const { debug } = renderTheme(<Home />);
//   debug();
//   const headingContainer = screen.getByRole("heading", {
//     name: "Configurando o Storybook - Parte 1!",
//   }).parentElement;
//   expect(headingContainer).toHaveStyleRule({
//     background: theme.colors.secondaryColor,
//   });
//   // expect(headingContainer).toHaveStyleRule('background', 'blue');
//   expect(headingContainer).toMatchSnapshot();
// });
