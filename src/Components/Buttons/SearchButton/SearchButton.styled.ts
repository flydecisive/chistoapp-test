import styled from "styled-components";

const StyledButton = styled("button")(() => ({
  width: "71px",
  height: "100%",
  background: "#514A4A",
  fontSize: "14px",
  fontWeight: 475,
  lineHeight: "20px",
  letterSpacing: "-0.05px",
  color: "#FFF",
  border: "none",
  borderTopRightRadius: "4px",
  borderBottomRightRadius: "4px",
  flexShrink: "0",

  "&:hover": {
    cursor: "pointer",
  },
}));

export default StyledButton;
