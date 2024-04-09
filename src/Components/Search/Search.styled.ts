import styled from "styled-components";

export const StyledWrapper = styled("div")(() => ({
  width: "280px",
  height: "40px",
  display: "flex",
}));

export const StyledInputWrapper = styled("div")(() => ({
  padding: "0px 10px 0px 10px",
  boxSizing: "border-box",
  height: "100%",
  borderTopLeftRadius: "4px",
  borderBottomLeftRadius: "4px",
  border: "1px solid #BAB4B4",
  borderRight: "none",
  display: "flex",
  alignItems: "center",
  gap: "6px",
}));

export const StyledInput = styled("input")(() => ({
  width: "100%",
  border: "none",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "-0.05px",
  fontWeight: 400,
  color: "#352424",

  "&::placeholder": {
    color: "#C5C0C0",
  },

  "&:focus": {
    border: "none",
    outline: "none",
  },

  "&:hover": {
    cursor: "pointer",
  },
}));
