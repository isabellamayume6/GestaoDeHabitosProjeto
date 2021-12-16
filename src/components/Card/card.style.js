import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) =>
    props.secondary
      ? props.theme.colors.secondary.light
      : props.theme.colors.primary.normal};
  /* height: 132px; */
  width: 100%;
  max-width: 680px;
  display: flex;
  justfy-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 10px;
  margin:10px 0px;
  box-sizing: border-box;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .details {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 18px;
  }
  img {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justfy-content: center;
  align-items: center;
  gap: 12px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .title {
    text-align: left;
    font-size: 18px;
    margin: 0 10px 0 0;
  }
  .pills {
    display: flex;
    flex-direction:row;
    align-items: center;
  }
  svg {
    margin-left: auto;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  .avatar {
    outline: 3px solid
      ${(props) =>
        props.secondary
          ? props.theme.colors.secondary.light
          : props.theme.colors.primary.normal};
    width: 34px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: ${(props) =>
      !!props.secondary
        ? props.theme.colors.primary.normal
        : props.theme.colors.secondary.light};
    overflow: hidden;
    img {
      width: 100%;
      display: block;
    }
  }
  .avatar:not(:first-child) {
    margin-left: -20px;
  }
  margin-left: auto;
  span {
    display: flex;
    align-items: center;
  }
`;

export const Pill = styled.span`
  font-size: 0.8em;
  padding: 0.3em 0.7em;
  border-radius: 1rem;
  font-weight: bold;
  background: ${(props) =>
    props.isCat
      ? props.theme.colors.yellow.normal
      : props.theme.colors.green.normal};
`;
