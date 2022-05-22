import { render, screen } from "@testing-library/react";
import LinkList from "./LinkList";
import { BrowserRouter } from "react-router-dom";

test("show 6 links", async () => {
  render(
    <BrowserRouter>
      <LinkList />
    </BrowserRouter>
  );
  const links = await screen.findAllByRole("link");
  expect(links).toHaveLength(6);
});
