import styled from "styled-components";

export const StyledWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "13px",
  color: "#514A4A",
  fontWeight: 475,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "-0.05px",
  position: "relative",
}));

export const StyledSelector = styled("div")(() => ({
  background: "#514A4A",
  borderRadius: "6px",
  padding: "10px 16px 10px 16px",
  boxSizing: "border-box",
  color: "#fff",
  fontWeight: 475,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "-0.05px",
  display: "flex",
  alignItems: "center",
  gap: "8px",

  "&:hover": {
    cursor: "pointer",
  },
}));

export const StyledSelectorImage = styled("img")<{ $isRotated: boolean }>(
  ({ $isRotated }) => ({
    transform: `rotate(${$isRotated ? "180deg" : "0deg"})`,
    transition: "all .3s",
  })
);

export const StyledSelectorDropdown = styled("div")<{ $isDisplay: boolean }>(
  ({ $isDisplay }) => ({
    position: "absolute",
    bottom: "45px",
    right: "0",
    width: "76px",
    display: `${$isDisplay ? "flex" : "none"}`,
    flexFlow: "column nowrap",
    gap: "10px",
    alignItems: "center",
    background: "#fff",
    transition: "all .3s",
    boxSizing: "border-box",
    border: "1px solid #BAB4B4",
    borderRadius: "6px",
    padding: "10px 0px 10px 0px",
    zIndex: 20,
  })
);

export const StyledSelectorDropdownItem = styled("p")(() => ({
  color: "#352424",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "-0.05px",
  fontWeight: 475,

  "&:hover": {
    cursor: "pointer",
  },
}));
