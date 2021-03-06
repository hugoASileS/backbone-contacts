import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithRouter } from "./utils/tests";
import store from "./store/store";
import { Provider } from "react-redux";

describe("all main routes should be shown", () => {
  test("Home page", () => {
    const { container } = renderWithRouter(<App />);
    const header = screen.getByRole("heading", { level: 1, name: "Home" });
    expect(header).toBeInTheDocument();
  });
  test("Contacts page", () => {
    renderWithRouter(
      <Provider store={store}>
        <App />
      </Provider>,
      { route: "/contacts" }
    );
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
  });

  test("Email page", () => {
    renderWithRouter(<App />, { route: "/email" });
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
  });
  test("User page", () => {
    renderWithRouter(<App />, { route: "/user" });
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
  });
  test("Role page", () => {
    renderWithRouter(<App />, { route: "/role" });
    const header = screen.getByRole("heading", { level: 1 });
    expect(header).toBeInTheDocument();
  });
});

describe("contacts", () => {
  const contactId = 12345;
  test("Update page", () => {
    renderWithRouter(
      <Provider store={store}>
        <App />
      </Provider>,
      { route: `/contacts/${contactId}/update` }
    );
    expect(screen.getByText(/Update Contact/i)).toBeInTheDocument();
  });
  test("Delete page", () => {
    renderWithRouter(
      <Provider store={store}>
        <App />
      </Provider>,
      { route: `/contacts/${contactId}/delete` }
    );
    expect(
      screen.getByText(new RegExp(`${contactId}`, "i"))
    ).toBeInTheDocument();
  });
  test("Create page", () => {
    renderWithRouter(
      <Provider store={store}>
        <App />
      </Provider>,
      { route: `/contacts/create` }
    );
    expect(screen.getByText(/New Contact/i)).toBeInTheDocument();
  });
  test("List page", () => {
    renderWithRouter(
      <Provider store={store}>
        <App />
      </Provider>,
      { route: `/contacts` }
    );
    expect(screen.getByText(/List Contact/i)).toBeInTheDocument();
  });
});
