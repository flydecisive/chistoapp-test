import styled from "styled-components";

export const StyledWrapper = styled("div")(() => ({
  display: "flex",
  flexFlow: "column nowrap",
  gap: "5px",
}));

export const StyledLabel = styled("label")(() => ({
  color: "#352424",
  fontWeight: 475,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "-0.05px",
}));

export const StyledInput = styled("input")(() => ({
  height: "40px",
  width: "100%",
  borderRadius: "4px",
  boxSizing: "border-box",
  border: "1px solid #DFDDDD",
  padding: "10px 8px 10px 12px",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#352424",
  fontWeight: 400,
  letterSpacing: "-0.05px",

  "&::placeholder": {
    color: "#C5C0C0",
  },

  "&:focus": {
    border: "1px solid #DFDDDD",
    outline: "none",
  },
}));

export const StyledTextarea = styled("textarea")(() => ({
  height: "140px",
  width: "100%",
  borderRadius: "4px",
  boxSizing: "border-box",
  border: "1px solid #DFDDDD",
  padding: "12px",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#352424",
  fontWeight: 400,
  letterSpacing: "-0.05px",
  resize: "none",

  "&::placeholder": {
    color: "#C5C0C0",
  },

  "&:focus": {
    border: "1px solid #DFDDDD",
    outline: "none",
  },
}));
