import styled from "styled-components";

export const MainDashboard = styled.main`
height:100vh;
 background: ${(props) =>
    props.showHabits
      ? props.theme.colors.secondary.light
      : props.theme.colors.primary.normal};
`

export const Group = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
        button{
            width:150px;
            height:25px;
            border:1px solid black;
        }
    
    `