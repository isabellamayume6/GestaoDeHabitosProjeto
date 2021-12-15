import styled from 'styled-components'

export const CardGroups = styled.div`
background-color:${(props) => props.theme.colors.primary.normal};
padding:15px;
    ul{
        padding:0;
    }
        ul li{
            list-style:none;
            padding:0;
        }
`