import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Pizza from "../components/Pizza";

afterEach(cleanup);

test("alt test renders on Pizza image", async () => {
  const name = "my favorite pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
  const name = "A new pizza type";
  const description = "Made with love by chef Alexandro";
  const screen = render(<Pizza name={name} description={description} />);

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
