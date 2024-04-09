import { useState } from "react";

import {
  StyledWrapper,
  StyledSelector,
  StyledSelectorDropdown,
  StyledSelectorImage,
  StyledSelectorDropdownItem,
} from "./DisplaySelector.styled";
import ChevronIcon from "../../assets/img/chevron-down.svg";

function DisplaySelector() {
  const [isSelectorClicked, setIsSelectorClicked] = useState<boolean>(false);

  const handleSelectorClick = () => {
    setIsSelectorClicked(!isSelectorClicked);
  };

  return (
    <StyledWrapper>
      Показывать по:
      <StyledSelector onClick={handleSelectorClick}>
        10
        <StyledSelectorImage
          src={ChevronIcon}
          alt="chevron"
          $isRotated={isSelectorClicked}
        />
      </StyledSelector>
      <StyledSelectorDropdown $isDisplay={isSelectorClicked}>
        <StyledSelectorDropdownItem>10</StyledSelectorDropdownItem>
        <StyledSelectorDropdownItem>15</StyledSelectorDropdownItem>
        <StyledSelectorDropdownItem>20</StyledSelectorDropdownItem>
      </StyledSelectorDropdown>
    </StyledWrapper>
  );
}

export default DisplaySelector;
