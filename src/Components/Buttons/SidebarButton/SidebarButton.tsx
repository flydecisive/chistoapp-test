import { StyledButton } from "./SidebarButton.styled";

interface SidebarButtonProps {
  text: string;
  isPrimary: boolean;
  onClick: () => void;
}

function SidebarButton({ text, isPrimary, onClick }: SidebarButtonProps) {
  return (
    <StyledButton $isPrimary={isPrimary} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default SidebarButton;
