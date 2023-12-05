import { logRoles, render, screen, fireEvent } from "@testing-library/react";
import Component from "./component";

test("button has correct initial color, ", () => {
  render(<Component />);

  const colorButton = screen.getByRole("button", {
    name: "Change to Blue",
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {
  render(<Component />);

  const colorButton = screen.getByRole("button", {
    name: "Change to Blue", // 컴포넌트에 해당 role을 가진 버튼이 여러개라면, name을 통해 구분할 수 있다.
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton).toHaveTextContent("Change to Red");
});
