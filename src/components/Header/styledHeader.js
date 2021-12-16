import styled from 'styled-components';

export const HeaderCard = styled.header`
    background-color:${(props) => props.theme.colors.secondary.light};
    padding:10px;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    border-bottom:2px solid black;
        .User{
            img{
                border-radius:50%;
            }
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