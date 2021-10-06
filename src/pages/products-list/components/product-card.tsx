import styled from "@emotion/styled";

import * as Colors from "style/colors";
import type { Product } from "types/product";

const StyledCardWrapper = styled.div({
  border: `1px solid ${Colors.DarkGrey}`,
  borderRadius: 5,
  textAlign: "center",
  minWidth: 200,
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.05, 1.05)",
  },
});

const StyledImage = styled.img({
  minWidth: 150,
  margin: 10,
});

const StyledInfo = styled.div({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: Colors.Secondary,
  color: Colors.White,
  padding: 10,
  position: "relative",
});

const StyledPrice = styled.span({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  backgroundColor: Colors.LightGrey,
  color: Colors.Black,
  bottom: "-1px",
  right: 10,
  height: 45,
  minWidth: 50,
  border: `1px solid ${Colors.DarkGrey}`,
  borderRadius: "5px 5px 0 0",
});

const ProductCard = ({ product }: { product: Product }) => {
  const { id, name, price, photo } = product;
  return (
    <StyledCardWrapper>
      <StyledImage src={photo} alt={name} />
      <StyledInfo>
        <p>{name}</p>
        <StyledPrice>
          <span style={{ fontSize: 12, marginBottom: 5 }}>Price</span>
          <span>{price}</span>
        </StyledPrice>
      </StyledInfo>
    </StyledCardWrapper>
  );
};

export { ProductCard };
