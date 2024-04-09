import { StyledButton } from "./SidebarButton.styled";

interface SidebarButtonProps {
  text: string;
  isPrimary: boolean;
}

function SidebarButton({ text, isPrimary }: SidebarButtonProps) {
  return <StyledButton $isPrimary={isPrimary}>{text}</StyledButton>;
}

export default SidebarButton;
