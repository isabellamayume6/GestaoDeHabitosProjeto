import styled from "styled-components";

export const InputContainer = styled.div`
  color: ${(props) =>
    !!props.error
      ? props.theme.colors.red.normal
      : props.secondary
      ? props.theme.colors.secondary.dark
      : props.theme.colors.primary.light};
  /* border-radius: 4px; */
  width: 100%;

  .error-message {
    color: ${(props) => props.theme.colors.red.normal};
    padding-top: 0.4em;
    display: block;
    font-size: 0.95em;
  }

  label {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;

    input {
      font-size: 16px;
      border: 2px solid
        ${(props) =>
          !!props.error
            ? props.theme.colors.red.normal
            : props.secondary
            ? props.theme.colors.secondary.normal
            : props.theme.colors.primary.light};

      background: ${(props) =>
        props.secondary
          ? props.theme.colors.secondary.light
          : props.theme.colors.primary.normal};
      padding: 0.7em;
      /* border-radius: 5px; */
      width: 100%;
      box-sizing: border-box;
      color: ${(props) =>
        props.secondary
          ? props.theme.colors.secondary.dark
          : props.theme.colors.primary.light};

      &:disabled {
        color: ${(props) => props.theme.colors.red.normal};
      }

      &:not(:placeholder-shown),
      &:focus {
        border-color: ${(props) =>
          !!props.error
            ? props.theme.colors.red.normal
            : props.secondary
            ? props.theme.colors.secondary.normal
            : props.theme.colors.primary.light};
        outline: none;
      }
    }

    span {
      cursor: text;
      position: absolute;
      left: 1em;
      padding: 0 5px;
      transition: font-size 100ms linear, transform 100ms linear;
    }

    input:not(:placeholder-shown) + span,
    input:focus + span {
      color: ${(props) =>
        !!props.error
          ? props.theme.colors.red.normal
          : props.secondary
          ? props.theme.colors.secondary.dark
          : props.theme.colors.primary.light};
      font-size: 0.7em;
      transform: translateY(-2.2em);
      z-index: 1;
      background: ${(props) =>
        props.secondary
          ? props.theme.colors.secondary.light
          : props.theme.colors.primary.normal};
      cursor: default;
    }
  }
`;
