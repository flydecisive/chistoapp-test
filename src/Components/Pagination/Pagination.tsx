import {
  StyledPagination,
  StyledPaginationItem,
  StyledArrow,
  StyledLeftArrow,
} from "./Pagination.styled";
import ArrowIcon from "../../assets/img/arrow.svg";

function Pagination() {
  return (
    <StyledPagination>
      {/* <StyledLeftArrow>
        <img src={ArrowIcon} alt="arrow" />
      </StyledLeftArrow> */}
      <StyledPaginationItem>1</StyledPaginationItem>
      <StyledArrow>
        <img src={ArrowIcon} alt="arrow" />
      </StyledArrow>
    </StyledPagination>
  );
}

export default Pagination;
