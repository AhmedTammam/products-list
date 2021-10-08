import { fireEvent, render, screen } from "@testing-library/react";
import App from "App";
import { Provider } from "react-redux";

import { store } from "store";

import { ImageGallery } from "./image-gallery";

describe("Image Gallery", () => {
  beforeEach(() => {
    const images = [
      {
        thumbnail: "http://picsum.photos/100/100/?image=13",
        photo: "http://picsum.photos/1015/1015/?image=13",
      },
      {
        thumbnail: "http://picsum.photos/100/100/?image=14",
        photo: "http://picsum.photos/1015/1015/?image=14",
      },
      {
        thumbnail: "http://picsum.photos/100/100/?image=15",
        photo: "http://picsum.photos/1015/1015/?image=15",
      },
      {
        thumbnail: "http://picsum.photos/100/100/?image=16",
        photo: "http://picsum.photos/1015/1015/?image=16",
      },
      {
        thumbnail: "http://picsum.photos/100/100/?image=20",
        photo: "http://picsum.photos/1015/1015/?image=20",
      },
      {
        thumbnail: "http://picsum.photos/100/100/?image=27",
        photo: "http://picsum.photos/1015/1015/?image=27",
      },
    ];
    render(
      <Provider store={store}>
        <ImageGallery images={images} />
      </Provider>
    );
  });

  test("Should render images", async () => {
    const imagesList = await screen.getAllByRole("img");
    const selectedImage = screen.getByTestId("selected-img");
    const selectedImageSrc = selectedImage.getAttribute("src");

    expect(imagesList).toHaveLength(7);

    expect(selectedImageSrc).toBe("http://picsum.photos/1015/1015/?image=13");
  });

  test("Should render selected image when click", async () => {
    const imagesList = await screen.getAllByRole("img");

    fireEvent.click(imagesList[2]);

    const selectedImage = screen.getByTestId("selected-img");
    const selectedImageSrc = selectedImage.getAttribute("src");

    expect(selectedImageSrc).toBe("http://picsum.photos/1015/1015/?image=14");
  });

  afterAll(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
