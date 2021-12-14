import styled from "styled-components";
export const FormSI = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainSi = styled.main`
  background-color: ${(props) => props.theme.colors.primary.ze};
  width: 100vw;
  height: 100vh;
  h1 {
    margin: 0px;
    padding: 30px 0px;
    color: white;
  }
  input {
    padding: 10px;
    background-color: transparent;
    border-color: ${(props) => props.theme.colors.primary.dark};
    outline: none;
    margin: 5px 0px;
    font-size: 18px;
    &::placeholder {
      color: white;
    }
    /* &:last-of-type{
            margin-bottom:25px;
        } */
  }
  .footer {
    margin-top: 90px;
    p {
      font-weight: bold;
      text-decoration: underline;
    }
  }
  img {
    display: none;
  }

  @media (min-width: 768px) {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) => props.theme.colors.secondary.jao};
    img {
      width: 400px;
      height: 350px;
      display: initial;
    }
    .log {
      background-color: ${(props) => props.theme.colors.primary.ze};
      height: 500px;
      width: 300px;
    }
  }
`;
