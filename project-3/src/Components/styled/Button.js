import styled from 'styled-components'

export const Button = styled.button `
font-size: 16px;
background: black; 
color: white;
padding: 10px 18px;
min-width: 220px;
border-radius:5px;
border: none;
border: 1px solid transparent;
transition : 0.4s background ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition : 0.3s background ease-in;
}

`;

export const OutLineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
    color: black;   
&:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent; 
}
`;