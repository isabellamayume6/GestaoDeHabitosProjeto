import styled from 'styled-components'
export const MainDesktop = styled.main`
img{
    display:none;
}
@media(min-width:768px){
    background-color: #92C8EA;
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:row;
    justify-content:  space-evenly;
    align-items: center;
    img{
        width:300px;
        height:400px;
        display: initial;
    }
}
`
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
    text-decoration:underline;

}
@media (min-width:768px){
    height:500px;
    width:300px;
}
`
