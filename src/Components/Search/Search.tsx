import {
  StyledWrapper,
  StyledInputWrapper,
  StyledInput,
} from "./Search.styled";
import SearchButton from "../Buttons/SearchButton/SearchButton";
import SearchIcon from "../../assets/img/search.svg";

function Search() {
  return (
    <StyledWrapper>
      <StyledInputWrapper>
        <img src={SearchIcon} alt="search" />
        <StyledInput placeholder="Поиск по названию" />
      </StyledInputWrapper>
      <SearchButton />
    </StyledWrapper>
  );
}

export default Search;
