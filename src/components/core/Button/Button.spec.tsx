import { render, screen } from "@testing-library/react";
import Button from ".";

it("renders 'Button'", () => {
  render(<Button />);
  const myElement = screen.getByText(/click/);
  expect(myElement).toBeInTheDocument();
});
