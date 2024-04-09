import SidebarState from "../../Store/Sidebar";
import { observer } from "mobx-react-lite";

import {
  StyledHeader,
  StyledTitle,
  StyledCounter,
  StyledWrapper,
} from "./Header.styled";
import Search from "../Search/Search";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

const Header = observer(() => {
  return (
    <StyledHeader>
      <StyledWrapper $gap={8}>
        <StyledTitle>Номенклаура</StyledTitle>
        <StyledCounter>54 едениц</StyledCounter>
      </StyledWrapper>
      <StyledWrapper $gap={16}>
        <Search />
        <PrimaryButton
          onClick={() => {
            SidebarState.setIsSidebarOpen();
          }}
        />
      </StyledWrapper>
    </StyledHeader>
  );
});

export default Header;
