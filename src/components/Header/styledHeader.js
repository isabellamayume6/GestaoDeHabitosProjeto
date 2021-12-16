import styled from 'styled-components';

export const HeaderCard = styled.header`
    background-color:#EAC8CA;
    padding:10px;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    border-bottom:2px solid black;
        .User{
            transform:rotateY(180deg);
        }
    @media (min-width: 768px){
        justify-content:space-between;
        padding:10px 30px;
    }
`
export const DivSearch = styled.div`
    background-color:${(props) => props.theme.colors.primary.light};
    width:230px;
    height:35px;
    border:solid 1px black;
    border-radius:6px;
    display:flex;
    justify-content:space-evenly;
        input{
            border:none;
            outline:none;
            background-color:${(props) => props.theme.colors.primary.light};

        }
        button{
            border:none;
            outline:none;
            background: white;
            background-color:${(props) => props.theme.colors.primary.light};

        }
`