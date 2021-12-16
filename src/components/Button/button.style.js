import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonStyled = styled.button`
  border: none;
  color: ${(props) =>
    props.secondary
      ? props.theme.colors.secondary.light
      : props.theme.colors.primary.dark};
  background: ${(props) =>
    props.secondary
      ? props.theme.colors.secondary.normal
      : props.theme.colors.primary.light};
  padding: 0.5em 1em;
  font-size: 22px;
  cursor: pointer;
  box-shadow: -7px 7px 0 0 rgba(0, 0, 0, 1);
  transform: translate(7px, -7px);
  transition: transform linear 100ms, box-shadow linear 100ms;
  &:hover {
    transform: translate(0px, 0px);
    box-shadow: 0 0 0 0;
  }
  &:active {
    background: ${(props) =>
      props.secondary
        ? props.theme.colors.secondary.dark
        : props.theme.colors.primary.normal};
  }
`;
