import styled from 'styled-components';

export const BoxModal = styled.div`
 background: ${(props) =>
    props.isGroup
      ? props.theme.colors.secondary.light
      : props.theme.colors.primary.normal};
    border:solid 2px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    .close{
        margin:5px;
        display: block;
        margin-left: auto;
        border:none;
        background:transparent;
    }
    button{
        display: block;
        margin-left: auto;
    }
`
export const ModalForm = styled.form``