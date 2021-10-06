import styled from "@emotion/styled";

import * as Colors from "style/colors";
import NanaLogo from "pages/products-list/components/header/logo.svg";

const StyledHeader = styled.div({
  backgroundColor: Colors.Primary,
  height: 80,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 10,
});

const StyledLogo = styled.img({
  height: 46,
});

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={NanaLogo} alt="logo" />
    </StyledHeader>
  );
};

export { Header };
