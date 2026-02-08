import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../components/Pizza";

test("alt text renders on images", async () => {
  const name = "My favorite pizza";
  const description = "This is my favorite pizza";
  const src = "https://www.picsum.photos/200";
  const screen = render(
    <Pizza name={name} description={description} src={src} />,
  );

  const image = await screen.getByRole("img");
  await expect.element(image).toBeInTheDocument();
  await expect.element(image).toHaveAttribute("src", src);
  await expect.element(image).toHaveAttribute("alt", name);
});
