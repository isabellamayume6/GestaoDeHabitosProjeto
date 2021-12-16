import styled from "styled-components";

export const MainDashboard = styled.main`
height:100vh;
 background: ${(props) =>
    props.showHabits
      ? props.theme.colors.secondary.light
      : props.theme.colors.primary.normal};
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
    
    `