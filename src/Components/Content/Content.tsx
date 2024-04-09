import {
  StyledContent,
  StyledHeading,
  StyledHeadingItem,
  StyledContentRow,
  StyledContentItem,
  StyledContentText,
  StyledEditWrapper,
  StyledNavigation,
} from "./Content.styled";
import EditIcon from "../../assets/img/edit.svg";
import Pagination from "../Pagination/Pagination";
import DisplaySelector from "../DisplaySelector/DisplaySelector";

function Content() {
  return (
    <StyledContent>
      <div>
        <StyledHeading>
          <StyledHeadingItem>Название</StyledHeadingItem>
          <StyledHeadingItem>Единица измерения</StyledHeadingItem>
          <StyledHeadingItem>Артикул/код</StyledHeadingItem>
        </StyledHeading>
        <StyledContentRow>
          <StyledContentItem $justify="start">
            <StyledContentText>Корпус Т5МЭ.018500.001 ст.1</StyledContentText>
          </StyledContentItem>
          <StyledContentItem $justify="start">
            <StyledContentText>Корпус Т5МЭ.018500.001 ст.1</StyledContentText>
          </StyledContentItem>
          <StyledContentItem $justify="start">
            <StyledContentText>Корпус Т5МЭ.018500.001 ст.1</StyledContentText>
          </StyledContentItem>
          <StyledContentItem $justify="center">
            <StyledEditWrapper>
              <img src={EditIcon} alt="edit" />
            </StyledEditWrapper>
          </StyledContentItem>
        </StyledContentRow>
        <StyledContentRow>
          <StyledContentItem $justify="start">
            <StyledContentText>Корпус Т5МЭ.018500.001 ст.1</StyledContentText>
          </StyledContentItem>
          <StyledContentItem $justify="start">
            <StyledContentText>Корпус Т5МЭ.018500.001 ст.1</StyledContentText>
          </StyledContentItem>
          <StyledContentItem $justify="start">
            <StyledContentText>Корпус Т5МЭ.018500.001 ст.1</StyledContentText>
          </StyledContentItem>
          <StyledContentItem $justify="center">
            <StyledEditWrapper>
              <img src={EditIcon} alt="edit" />
            </StyledEditWrapper>
          </StyledContentItem>
        </StyledContentRow>
      </div>
      <StyledNavigation>
        <Pagination />
        <DisplaySelector />
      </StyledNavigation>
    </StyledContent>
  );
}

export default Content;
