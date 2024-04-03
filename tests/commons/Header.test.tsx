import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../../src/common/components/Header/Header";
import {
  LoadingProvider,
  useLoading,
} from "../../src/common/contexts/LoadingContext";

jest.mock("../../src/common/contexts/LoadingContext", () => ({
  ...jest.requireActual("../../src/common/contexts/LoadingContext"),
  useLoading: jest.fn(),
}));

describe("Header component", () => {
  test("renders Podcaster title correctly", () => {
    (useLoading as jest.Mock).mockReturnValue({ loading: false });

    const { getByText } = render(
      <BrowserRouter>
        <LoadingProvider>
          <Header />
        </LoadingProvider>
      </BrowserRouter>
    );

    expect(getByText(/Podcaster/i)).toBeDefined();
  });

  test("renders loading indicator when loading is true", () => {
    (useLoading as jest.Mock).mockReturnValue({ loading: true });

    const { container } = render(
      <BrowserRouter>
        <LoadingProvider>
          <Header />
        </LoadingProvider>
      </BrowserRouter>
    );

    const loadingIndicator = container.querySelector(".loading-indicator");
    expect(loadingIndicator).toBeDefined();
  });
  test("Does not render loading indicator when loading is false", () => {
    (useLoading as jest.Mock).mockReturnValue({ loading: false });

    const { container } = render(
      <BrowserRouter>
        <LoadingProvider>
          <Header />
        </LoadingProvider>
      </BrowserRouter>
    );

    const loadingIndicator = container.querySelector(".loading-indicator");
    expect(loadingIndicator).toBeFalsy();
  });
});
