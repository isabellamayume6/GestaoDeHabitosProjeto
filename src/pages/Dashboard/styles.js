import styled from "styled-components";

export const MainDashboard = styled.main`
height:90.5vh;
    background: ${(props) =>
        props.showHabits
        ? props.theme.colors.secondary.light
        : props.theme.colors.primary.normal};
            .desktop{
                display:none;
            }
    @media (min-width: 768px){
        background-color:#DEE2FF;
        .mobile{
            display:none;
        }
        .desktop{
            display:flex;
            flex-direction:row;
            justify-content:space-evenly;
            padding-top:20px;
            
                .habitosCard{
                    width:40%;
                }
                .gruposCard{
                    width: 40%;
                }
        }
    }
`

export const Group = styled.div`
    padding-top:5px;
    background: ${(props) =>
        props.showHabits
        ? props.theme.colors.secondary.light
        : props.theme.colors.primary.normal};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
        button{
            width:150px;
            height:25px;
            border:none;
            background: white;
            text-decoration:underline;
            font-weight:bold;
            font-size:18px;
            background: ${(props) =>
            props.showHabits
            ? props.theme.colors.secondary.light
            : props.theme.colors.primary.normal};
        }
    @media (min-width:768px){
        display:none;
    }
`