import styled from "styled-components";

export const StyledPagination = styled("div")(() => ({
  display: "flex",
  gap: "12px",
  alignItems: "center",
  maxWidth: "760px",
}));

export const StyledPaginationItem = styled("div")(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "4px",
  border: "1px solid transparent",
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: 475,
  letterSpacing: "-0.05px",
  color: "#352424",
  transition: "all .3s",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    borderColor: "#A85757",
    color: "#A85757",
    cursor: "pointer",
  },
}));

export const StyledArrow = styled("div")(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "4px",
  border: "1px solid #F2EEEE",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    cursor: "pointer",
  },
}));

// export const StyledLeftArrow = styled(StyledArrow)(() => ({
//   transform: "rotate(180deg)",
// }));
