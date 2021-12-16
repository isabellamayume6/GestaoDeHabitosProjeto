import styled from "styled-components";

export const CardHabits = styled.div`
  background-color: ${(props) => props.theme.colors.secondary.jao};
  padding: 15px;
    .ADC{
      width:30px;
      height:30px;
      font-size:26px;
      padding:0;
      display: block;
      margin-left: auto;
      border:none;
      background-color:transparent;
    }
    width:90%;
    @media (min-width:768px){
      overflow-y: scroll;
      max-height: 440px;
    }
`;
