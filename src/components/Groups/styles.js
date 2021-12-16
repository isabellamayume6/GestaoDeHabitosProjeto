import styled from "styled-components";

export const CardGroups = styled.div`
  background-color: ${(props) => props.theme.colors.primary.normal};
  padding: 15px;
    .adc{
      width:30px;
      height:30px;
      font-size:26px;
      padding:0;
      display: block;
      margin-left: auto;
      border:none;
      background-color:transparent;
    }
    width: 90%;
    @media (min-width:768px){
      overflow-y: scroll;
      max-height: 440px;
    }
`;
