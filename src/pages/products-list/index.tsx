import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

import { Header } from "pages/products-list/components/header";
import { ProductCard } from "pages/products-list/components/product-card";
import { Spinner } from "pages/products-list/components/Spinner";
import { ErrorMessage } from "pages/products-list/components/error-message";
import { ProductDetails } from "pages/products-list/components/product-details";
import { ShowDetailsContext } from "pages/products-list/show-details-context";

import { useAppDispatch } from "helpers/store-hooks";
import { fetchProducts, selectProductSlice } from "store/slices/product-slice";

const StyledPageContainer = styled.div({
  height: "90vh",
  maxWidth: 1000,
  margin: "0 auto",
});

const StyledListWrapper = styled.div({
  display: "flex",
  justifyContent: "space-around",
  "@media screen and (max-width: 575px)": {
    flexDirection: "column",
    padding: "0 20px",
  },
});

const ProductsList = () => {
  const [showProductDetails, setShowProductDetails] = useState(false);
  const { isLoading, products, error } = useSelector(selectProductSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderProducts = () => {
    return (
      <StyledListWrapper>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </StyledListWrapper>
    );
  };

  return (
    <>
      <Header />
      <ShowDetailsContext.Provider
        value={{ showProductDetails, setShowProductDetails }}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <StyledPageContainer>
            {error ? <ErrorMessage /> : renderProducts()}
          </StyledPageContainer>
        )}
        <ProductDetails />
      </ShowDetailsContext.Provider>
    </>
  );
};

export { ProductsList };
