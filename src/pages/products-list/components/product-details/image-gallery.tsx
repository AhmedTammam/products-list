import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import * as Colors from "style/colors";
import type { Product } from "types/product";

const StyledGalleryWrapper = styled.div({
  textAlign: "center",
  marginTop: 20,
});

const StyledSelectedImage = styled.img({
  maxHeight: 300,
  border: `3px solid ${Colors.Secondary}`,
  marginBottom: 10,
});

const StyledImage = styled.img(
  (props: { selectedImage: string; image: { photo: string } }) => ({
    marginBottom: 10,
    border:
      props.selectedImage === props.image.photo
        ? `3px solid ${Colors.Secondary}`
        : "none",
    opacity: props.selectedImage === props.image.photo ? 1 : 0.6,
  })
);

const ImageGallery = ({ images }: { images: Product["pictures"] }) => {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (images?.length) {
      setSelectedImage(images[0].photo);
    }
  }, [images]);
  return (
    <StyledGalleryWrapper>
      <StyledSelectedImage
        src={selectedImage}
        alt={selectedImage}
        data-testid="selected-img"
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {images?.map((image) => (
          <StyledImage
            selectedImage={selectedImage}
            image={image}
            src={image.thumbnail}
            key={image.thumbnail}
            alt={image.thumbnail}
            onClick={() => setSelectedImage(image.photo)}
          />
        ))}
      </div>
    </StyledGalleryWrapper>
  );
};

export { ImageGallery };
