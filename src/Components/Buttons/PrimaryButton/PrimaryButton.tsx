import StyledButton from "./PrimaryButton.styled";
import PlusIcon from "../../../assets/img/plus.svg";

interface PrimaryButtonProps {
  onClick: () => void;
}

function PrimaryButton({ onClick }: PrimaryButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      <img src={PlusIcon} alt="plus" />
      Новая позиция
    </StyledButton>
  );
}

export default PrimaryButton;
