import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import * as Colors from "style/colors";

const StyledSpinnerWrapper = styled.div({
  width: "100%",
  height: 100,
  position: "absolute",
});

const spinner = keyframes`
    0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`;

const StyledSpinner = styled.div({
  animation: `1.5s linear infinite ${spinner}`,
  animationPlayState: "inherit",
  border: `solid 5px ${Colors.LightGrey}`,
  borderBottomColor: Colors.Primary,
  borderRadius: "50%",
  content: "''",
  height: 40,
  width: 40,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate3d(-50%, -50%, 0)",
  willChange: "transform",
});

const Spinner = () => {
  return (
    <StyledSpinnerWrapper>
      <StyledSpinner />
    </StyledSpinnerWrapper>
  );
};

export { Spinner };
