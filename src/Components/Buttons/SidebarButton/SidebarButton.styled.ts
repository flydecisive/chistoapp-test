import styled from "styled-components";

export const StyledButton = styled("button")<{ $isPrimary: boolean }>(
  ({ $isPrimary }) => ({
    border: "none",
    width: "170px",
    height: "40px",
    borderRadius: "6px",
    color: "#FFF",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "-0.05px",
    fontWeight: 475,
    background: `${$isPrimary ? "#A85757" : "#514A4A"}`,

    "&:hover": {
      cursor: "pointer",
    },
  })
);
