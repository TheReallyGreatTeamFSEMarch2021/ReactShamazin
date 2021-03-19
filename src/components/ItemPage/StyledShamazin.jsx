import styled, {css} from 'styled-components'


export const Navbar = styled.div`
    border: 1px solid green;
    
`;


// The Button from the last section without the interpolations
export const Button = styled.button`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

// A new component based on Button, but with some override styles
export const TomatoButton = styled(Button)`
color: tomato;
border-color: tomato;
`;

export const BlueButton = styled.button`
color: cornflowerblue;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid cornflowerblue;
border-radius: 3px;

${props => props.primary && css`
    background: palevioletred;
    color:white;
`}

${props => props.secondary && css`
    background: palevioletred;
    color:purple;
`}
`;

// A new component based on Button, but with some override styles
export const DarkBlueButton = styled(BlueButton)`
color: darkblue;
border-color: darkblue;
`;

