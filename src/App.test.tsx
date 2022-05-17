import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithRouter } from "./utils/tests";

describe("all main routes should be shown", () => {
  test("Home page", () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
  test("Contacts page", () => {
    renderWithRouter(<App />, { route: "/contacts" });
    expect(screen.getByText(/Contacts/i)).toBeInTheDocument();
  });
  test("Email page", () => {
    renderWithRouter(<App />, { route: "/email" });
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
  });
  test("User page", () => {
    renderWithRouter(<App />, { route: "/user" });
    expect(screen.getByText(/User/i)).toBeInTheDocument();
  });
  test("Role page", () => {
    renderWithRouter(<App />, { route: "/role" });
    expect(screen.getByText(/Role/i)).toBeInTheDocument();
  });
});

describe("contacts", () => {
  const contactId = 12345;
  test("Update page", () => {
    renderWithRouter(<App />, { route: `/contacts/${contactId}/update` });
    expect(
      screen.getByText(new RegExp(`${contactId}`, "i"))
    ).toBeInTheDocument();
  });
  test("Delete page", () => {
    renderWithRouter(<App />, { route: `/contacts/${contactId}/delete` });
    expect(
      screen.getByText(new RegExp(`${contactId}`, "i"))
    ).toBeInTheDocument();
  });
  test("Create page", () => {
    renderWithRouter(<App />, { route: `/contacts/create` });
    expect(screen.getByText(/Create contact/i)).toBeInTheDocument();
  });
  test("List page", () => {
    renderWithRouter(<App />, { route: `/contacts` });
    expect(screen.getByText(/List Contact/i)).toBeInTheDocument();
  });
});
