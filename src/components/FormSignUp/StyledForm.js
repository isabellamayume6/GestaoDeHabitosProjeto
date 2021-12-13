import styled from 'styled-components'

export const ContainerForm = styled.form`
background-color:${props=>props.theme.colors.secondary.light};
display:flex;
flex-direction: column;
align-items: center;
width:100vw;
height:100vh;
h1{
    color:${props=>props.theme.colors.secondary.normal};
}
input{
    padding:10px;
    background-color:transparent;
    border-color:${props=>props.theme.colors.secondary.normal};
    outline:none;
    margin:5px 0px;
    font-size:18px;
    &::placeholder{
        color:${props=>props.theme.colors.secondary.dark};
    }
    &:last-of-type{
        margin-bottom:25px;
    }
}

p{
    font-weight:bold;
    margin: 10px 0px;

}
`