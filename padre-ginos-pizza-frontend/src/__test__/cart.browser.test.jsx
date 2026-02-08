import { afterEach, expect, test } from "vitest";
import { cleanup, render } from "@testing-library/react";
import Cart from "../components/Cart";

afterEach(cleanup);
test("snapshot with nothing in cart", async () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment).toMatchSnapshot();
});
