import styled from "@emotion/styled";
import { ShowDetailsContext } from "pages/products-list/show-details-context";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

import * as Colors from "style/colors";
import { Spinner } from "pages/products-list/components/Spinner";
import { ImageGallery } from "pages/products-list/components/product-details/image-gallery";
import { Reviews } from "pages/products-list/components/product-details/reviews";
import { selectProductSlice } from "store/slices/product-slice";

const StyledWrapper = styled.div({
  position: "absolute",
  bottom: 0,
  height: "60vh",
  width: "100%",
  background: Colors.LightGrey,
  border: `1px solid ${Colors.DarkGrey}`,
  overflow: "scroll",
  "@media screen and (max-width: 575px)": {
    height: "86vh",
  },
});

const StyledContainer = styled.div({
  padding: 20,
  textAlign: "center",
});

const StyledContentWrapper = styled.div({
  width: 870,
  margin: "0 auto",
  "@media screen and (max-width: 575px)": {
    width: "100%",
  },
});

const ProductDetails = () => {
  const { showProductDetails, setShowProductDetails } =
    useContext(ShowDetailsContext);

  const { selectedLoading, selectedProduct } = useSelector(selectProductSlice);

  if (selectedLoading)
    return (
      <StyledWrapper>
        <Spinner />
      </StyledWrapper>
    );

  if (!showProductDetails) return null;

  const { name, pictures, reviews } = selectedProduct[0];

  return (
    <StyledWrapper data-testid="product-details">
      <StyledContainer>
        <AiOutlineCloseCircle
          style={{
            position: "fixed",
            right: 10,
            cursor: "pointer",
            fontSize: 20,
          }}
          onClick={() => setShowProductDetails(false)}
        />
        <StyledContentWrapper>
          <p>{name}</p>
          <ImageGallery images={pictures} />
          <Reviews reviews={reviews} />
        </StyledContentWrapper>
      </StyledContainer>
    </StyledWrapper>
  );
};

export { ProductDetails };
