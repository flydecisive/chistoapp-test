import styled from "styled-components";

export const StyledHeader = styled("div")(() => ({
  width: "100%",
  boxSizing: "border-box",
  padding: "24px 20px 44px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const StyledTitle = styled("h2")(() => ({
  fontWeight: 600,
  fontSize: "32px",
  lineHeight: "38px",
  letterSpacing: "-0.03em",
}));

export const StyledCounter = styled("div")(() => ({
  width: "fit-content",
  color: "#FFF",
  fontWeight: 475,
  fontSize: "13px",
  lineHeight: "16px",
  textAlign: "center",
  padding: "4px 8px",
  borderRadius: "4px",
  background: "#A85757",
}));

export const StyledWrapper = styled("div")<{ $gap: number }>(({ $gap }) => ({
  display: "flex",
  alignItems: "center",
  gap: `${$gap}px`,
}));

export const StyledSearchWrapper = styled("div")(() => ({}));
