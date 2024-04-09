import styled from "styled-components";

export const StyledBackdrop = styled("div")(() => ({
  background: "#211B1B",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 30,
  opacity: "14%",
}));

export const StyledSidebar = styled("div")(() => ({
  zIndex: 40,
  position: "absolute",
  top: 0,
  right: 0,
  width: "400px",
  height: "100vh",
  background: "#FFF",
  boxSizing: "border-box",
  padding: "24px",
  display: "flex",
  flexFlow: "column nowrap",
}));

export const StyledSidebarHeading = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "12px",
  boxSizing: "border-box",
}));

export const StyledCross = styled("img")(() => ({
  "&:hover": {
    cursor: "pointer",
  },
}));

export const StyledFormWrapper = styled("div")(() => ({
  padding: "16px 0px 24px 0px",
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "column nowrap",
  gap: "16px",
}));

export const StyledFormHeading = styled("div")(() => ({
  display: "flex",
  flexFlow: "column nowrap",
  gap: "8px",
}));

export const StyledTitle = styled("h4")(() => ({
  color: "#352424",
  fontSize: "16px",
  lineHeight: "22px",
  fontWeight: 600,
  letterSpacing: "-0.18px",
}));

export const StyledSubtitle = styled("p")(() => ({
  color: "#8D8585",
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: 400,
  letterSpacing: "-0.05px",
}));

export const StyledContentWrapper = styled("div")(() => ({
  height: "100%",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
}));

export const StyledButtonsWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
