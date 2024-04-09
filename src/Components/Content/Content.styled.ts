import styled from "styled-components";

export const StyledContent = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  boxSizing: "border-box",
  padding: "0px 0px 0px 12px",
}));

export const StyledHeading = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr) 80px",
  background: "#F6F4F4",
}));

export const StyledHeadingItem = styled("div")(() => ({
  padding: "14px 0px 14px 24px",
  boxSizing: "border-box",
  fontSize: "13px",
  lineHeight: "16px",
  letterSpacing: "-0.02px",
  fontWeight: 600,
  color: "#514A4A",
}));

export const StyledContentRow = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr) 80px",
  width: "100%",
  height: "68px",
  boxSizing: "border-box",
  borderBottom: "1px solid #F2EEEE",
}));

export const StyledContentItem = styled("div")<{ $justify: string }>(
  ({ $justify }) => ({
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: `${$justify}`,
  })
);

export const StyledContentText = styled("p")(() => ({
  paddingLeft: "24px",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "-0.05px",
  color: "#352424",
}));

export const StyledEditWrapper = styled("div")(() => ({
  border: "1px solid #F2EEEE",
  borderRadius: "6px",
  boxSizing: "border-box",
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    cursor: "pointer",
  },
}));

export const StyledNavigation = styled("div")(() => ({
  padding: "28px 20px 20px 20px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
