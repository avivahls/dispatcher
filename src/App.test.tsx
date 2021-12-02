import React from "react";
import App from "./App";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { fireEvent, render, screen, waitFor } from "./utils/test-utils";
// import userEvent from "@testing-library/user-event";

describe("Welcome Component", () => {
  test("render welcome page title", () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to Dispatcher/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("render welcome page content", () => {
    render(<App />);
    const linkElement = screen.getByText(
      /Locate articles and breaking news headlines from news sources and blogs across the web/i
    );
    expect(linkElement).toBeInTheDocument();
  });
  test("render welcome page continue button", () => {
    render(<App />);
    const linkElement = screen.getByText("CONTINUE");
    expect(linkElement).toBeInTheDocument();
  });
  // test("render welcome page continue button if clicked", async () => {
  //   render(
  //     <Auth0ProviderWithHistory>
  //       <App />
  //     </Auth0ProviderWithHistory>
  //   );
  //   fireEvent.click(screen.getByRole("button"));
  //   await waitFor(() => screen.queryByText(/Welcome to Dispatcher/i));
  //   expect(screen.queryByText(/Welcome to Dispatcher/i)).toBeNull();
  // });
});
