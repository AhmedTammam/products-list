import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "App";
import { store } from "store";
describe("Products list page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("Should render products", async () => {
    const product = await screen.findByText(/Product 1/i);

    expect(product).toBeInTheDocument();
  });

  test("Should show product details", async () => {
    const product = await screen.findByText(/Product 1/i);

    fireEvent.click(product);
    const productDetails = await screen.findByTestId("product-details");

    expect(productDetails).toBeInTheDocument();
  });
});
