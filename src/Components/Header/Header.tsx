import {
  StyledHeader,
  StyledTitle,
  StyledCounter,
  StyledWrapper,
} from "./Header.styled";
import Search from "../Search/Search";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

function Header() {
  return (
    <StyledHeader>
      <StyledWrapper $gap={8}>
        <StyledTitle>Номенклаура</StyledTitle>
        <StyledCounter>54 едениц</StyledCounter>
      </StyledWrapper>
      <StyledWrapper $gap={16}>
        <Search />
        <PrimaryButton />
      </StyledWrapper>
    </StyledHeader>
  );
}

export default Header;
