import SidebarState from "../../Store/Sidebar";
import { observer } from "mobx-react-lite";

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

const Sidebar = observer(() => {
  return (
    <>
      <StyledBackdrop
        $isSidebarOpen={SidebarState.isSidebarOpen}
      ></StyledBackdrop>
      <StyledSidebar $isSidebarOpen={SidebarState.isSidebarOpen}>
        <StyledSidebarHeading>
          <img src={FeatureIcon} alt="featire" />
          <StyledCross
            onClick={() => {
              SidebarState.setIsSidebarOpen();
            }}
            src={CrossIcon}
            alt="cross"
          />
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
            <SidebarButton
              text="Отмена"
              isPrimary={false}
              onClick={() => {
                SidebarState.setIsSidebarOpen();
              }}
            />
            <SidebarButton
              text="Подтвердить"
              isPrimary={true}
              onClick={() => {
                SidebarState.setIsSidebarOpen();
              }}
            />
          </StyledButtonsWrapper>
        </StyledContentWrapper>
      </StyledSidebar>
    </>
  );
});

export default Sidebar;
