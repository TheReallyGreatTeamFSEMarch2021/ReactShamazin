import styled, {css} from 'styled-components'

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

`;

// A new component based on Button, but with some override styles
export const DarkBlueButton = styled(BlueButton)`
color: darkblue;
border-color: darkblue;
`;