import styled from "@emotion/styled";
import { ProductsList } from "pages/products-list";

const StyledAppWrapper = styled.div({
  position: "relative",
});

function App() {
  return (
    <StyledAppWrapper>
      <ProductsList />
    </StyledAppWrapper>
  );
}

export default App;
