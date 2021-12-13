import styled from 'styled-components'
export const MainSi = styled.main`
background-color:#92c8ea;
width:100vw;
height:100vh;
    h1{
        margin:0px;
        padding:30px 0px;
        color:white;
    }
    input{
        padding:10px;
        background-color:transparent;
        border-color:${props=>props.theme.colors.primary.dark};
        outline:none;
        margin:5px 0px;
        font-size:18px;
        &::placeholder{
            color:white;
        }
        &:last-of-type{
            margin-bottom:25px;
        }
    }
    .footer{
        margin-top:90px;
        p{
            font-weight:bold;
        }
    }
`