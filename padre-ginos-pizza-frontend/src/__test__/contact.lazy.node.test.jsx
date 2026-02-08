import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, vi, test } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Route } from "../routes/contact.lazy";

const queryClient = new QueryClient();
const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();
afterEach(cleanup);

test("can submit contact form.", async () => {
  fetchMocker.mockResponse(JSON.stringify({ status: "ok" }));
  const screen = render(
    <QueryClientProvider client={queryClient}>
      <Route.options.component></Route.options.component>
    </QueryClientProvider>,
  );

  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const msgTextArea = screen.getByPlaceholderText("Message");
  const submitButton = screen.getByRole("button");

  const testData = {
    name: "Rubin",
    email: "rubin@example.com",
    message:
      "I loved your Pepperoni pizza. I'm gonna tell all my friends. Great job!",
  };

  nameInput.value = testData.name;
  emailInput.value = testData.email;
  msgTextArea.value = testData.message;
  submitButton.click();

  const h3 = await screen.findByRole("heading", { level: 3 });
  expect(h3.innerText).toBe("Submitted");

  const requests = fetchMocker.requests();
  expect(requests.length).toBe(1);
  expect(requests[0].url).toBe("/api/contact");
  expect(fetchMocker).toHaveBeenCalledWith("/api/contact", {
    method: "POST",
    body: JSON.stringify(testData),
    headers: {
      "Content-Type": "application/json",
    },
  });
});
