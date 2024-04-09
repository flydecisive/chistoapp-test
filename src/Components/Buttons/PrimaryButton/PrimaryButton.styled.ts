import styled from "styled-components";

const StyledButton = styled("div")(() => ({
  boxSizing: "border-box",
  padding: "10px 14px",
  borderRadius: "4px",
  background: "#A85757",
  fontSize: "14px",
  fontWeight: 475,
  color: "#FFF",
  lineHeight: "20px",
  letterSpacing: "-0.05px",
  display: "flex",
  alignItems: "center",
  gap: "8px",

  "&:hover": {
    cursor: "pointer",
  },
}));

export default StyledButton;
