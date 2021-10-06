import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

import { Header } from "pages/products-list/components/header";
import { ProductCard } from "pages/products-list/components/product-card";
import { Spinner } from "pages/products-list/components/Spinner";
import { ErrorMessage } from "pages/products-list/components/error-message";

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
});

const ProductsList = () => {
  const { isLoading, products, error } = useSelector(selectProductSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(error);

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
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledPageContainer>
          {error ? <ErrorMessage /> : renderProducts()}
        </StyledPageContainer>
      )}
    </>
  );
};

export { ProductsList };
