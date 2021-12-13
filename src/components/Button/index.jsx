import { ButtonContainer, ButtonStyled } from "./button.style";
export default function Button({
  secondary = false,
  onClick: func,
  children,
  ...rest
}) {
  return (
    <ButtonContainer>
      <ButtonStyled secondary={secondary} onClick={func} {...rest}>
        {children}
      </ButtonStyled>
    </ButtonContainer>
  );
}
