import {
  StyledBackdrop,
  StyledSidebar,
  StyledSidebarHeading,
  StyledCross,
  StyledFormWrapper,
  StyledFormHeading,
  StyledTitle,
  StyledSubtitle,
  StyledContentWrapper,
  StyledButtonsWrapper,
} from "./Sidebar.styled";
import FeatureIcon from "../../assets/img/feature.svg";
import CrossIcon from "../../assets/img/cross.svg";
import SidebarTextField from "../SidebarTextField/SidebarTextField";
import SidebarButton from "../Buttons/SidebarButton/SidebarButton";

function Sidebar() {
  return (
    <>
      <StyledBackdrop></StyledBackdrop>
      <StyledSidebar>
        <StyledSidebarHeading>
          <img src={FeatureIcon} alt="featire" />
          <StyledCross src={CrossIcon} alt="cross" />
        </StyledSidebarHeading>
        <StyledContentWrapper>
          <StyledFormWrapper>
            <StyledFormHeading>
              <StyledTitle>Новая позиция</StyledTitle>
              <StyledSubtitle>
                Заполните все поля для создания новой номенклатуры
              </StyledSubtitle>
            </StyledFormHeading>
            <SidebarTextField
              placeholder="Введите название"
              label="Название"
              isInput={true}
            />
            <SidebarTextField
              placeholder="Введите еденицу измерения"
              label="Еденицы измерения"
              isInput={true}
            />
            <SidebarTextField
              placeholder="Введите артикул/код"
              label="Артикул/код"
              isInput={true}
            />
            <SidebarTextField
              placeholder="Введите описание"
              label="Описание"
              isInput={false}
            />
          </StyledFormWrapper>
          <StyledButtonsWrapper>
            <SidebarButton text="Отмена" isPrimary={false} />
            <SidebarButton text="Подтвердить" isPrimary={true} />
          </StyledButtonsWrapper>
        </StyledContentWrapper>
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
