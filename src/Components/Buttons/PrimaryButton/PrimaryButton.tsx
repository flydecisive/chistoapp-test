import StyledButton from "./PrimaryButton.styled";
import PlusIcon from "../../../assets/img/plus.svg";

function PrimaryButton() {
  return (
    <StyledButton>
      <img src={PlusIcon} alt="plus" />
      Новая позиция
    </StyledButton>
  );
}

export default PrimaryButton;
