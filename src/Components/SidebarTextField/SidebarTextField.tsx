import {
  StyledWrapper,
  StyledInput,
  StyledLabel,
  StyledTextarea,
} from "./SidebarTextField.styled";

interface SidebarTextFieldProps {
  placeholder: string;
  label: string;
  isInput: boolean;
}

function SidebarTextField({
  placeholder,
  label,
  isInput,
}: SidebarTextFieldProps) {
  return (
    <StyledWrapper>
      <StyledLabel>{label}</StyledLabel>
      {isInput ? (
        <StyledInput placeholder={placeholder} />
      ) : (
        <StyledTextarea placeholder={placeholder} />
      )}
    </StyledWrapper>
  );
}

export default SidebarTextField;
