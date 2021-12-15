import styled from 'styled-components'

export const CardHabits = styled.div`
background-color:${(props) => props.theme.colors.secondary.jao};
padding:15px;
    ul{
        padding:0;
    }
        ul li{
            list-style:none;
            padding:0;
        }
`