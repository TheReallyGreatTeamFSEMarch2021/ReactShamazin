import React from 'react';
import * as StyledTestChild from './StyledTestChild';
import styled, {css} from 'styled-components';
import './testChild.css';

//using the Styled library inside the component 
const GreenButton = styled.button`
color: green;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid green;
border-radius: 3px;

${props => props.primary && css`
    background:#043927;
    color:white;
`}

${props => props.secondary && css`
    background: #D0F0c0;
    color:white;
`}
`;

class TestChildComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        //could make an axios call and grab info from the backend
    }


    render(){
            return(
                <div className="testChildContainer">
                    <h1>TestChildComponent</h1>
                    <h2>Accessing passed props from parent</h2>
                    <h3>
                        {this.props.passedProp}
                    </h3>


                    <h3>Examples Using Styled Library when written above the class</h3> 
                    <br/>
                    <GreenButton>Green Button</GreenButton>
                    <GreenButton primary>Green Button w/passed prop primary</GreenButton>
                    <GreenButton secondary>Green Button w/passed prop secondary</GreenButton>

                    <br/>
                    <h3>Examples Using the Styled Library when imported from a jsx file</h3>
                    <br/>
                    <StyledTestChild.Button>Styled Button</StyledTestChild.Button>
                    <StyledTestChild.TomatoButton>Tomato Color Styled Button</StyledTestChild.TomatoButton>
                    <StyledTestChild.BlueButton>Blue Styled Button</StyledTestChild.BlueButton> 
                    <StyledTestChild.BlueButton secondary>Blue Styled Button with property primary</StyledTestChild.BlueButton>                 
                    <StyledTestChild.DarkBlueButton>Dark Blue Styled Button</StyledTestChild.DarkBlueButton>
                    <br/>

                    <h2>Showing grid system</h2>
                    <div class="row col-12">
                        <div class="col-3">
                             25% of the screen
                        </div>
                        <div class="col-6">
                            50% of the screen
                        </div >
                        <div class="col-3">
                             25% of the screen
                        </div>
                    </div>
                </div>
            )
        }
}

export default TestChildComponent;