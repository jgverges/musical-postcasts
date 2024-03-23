import React from "react";
import { getByRole, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("App renders the  heading h1 with the text 'Podcaster'", () => {
  const { getByText, getByRole } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(getByRole("heading", { level: 1 })).toBeDefined();
  expect(getByRole("heading", { level: 1, name: /Podcaster/i })).toBeDefined();
});
