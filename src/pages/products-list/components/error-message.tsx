import styled from "@emotion/styled";

import * as Colors from "style/colors";

const StyledErrorWrapper = styled.div({
  textAlign: "center",
  marginTop: 50,
});

const StyledErrorMessage = styled.p({
  fontSize: 18,
  marginBottom: 10,
});

const StyledButton = styled.button({
  border: "none",
  borderRadius: 5,
  padding: "10px 20px",
  backgroundColor: Colors.Primary,
  color: Colors.White,
  cursor: "pointer",
});

const ErrorMessage = () => {
  return (
    <StyledErrorWrapper>
      <StyledErrorMessage>Something went wrong</StyledErrorMessage>
      <StyledButton onClick={() => window.location.reload()}>
        Reload Page
      </StyledButton>
    </StyledErrorWrapper>
  );
};

export { ErrorMessage };
