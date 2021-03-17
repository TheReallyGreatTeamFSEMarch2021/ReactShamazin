import React from 'react';
import TestChildComponent from "../TestChildComponent/TestChildComponent";
import ProductPhotoService from '../../service/productPhotoService';
import styled, {css} from 'styled-components';
import * as ShamazinStyled from './StyledShamazin';
import './Shamazin.css';


// The Button from the last section without the interpolations
const Button = styled.button`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
color: tomato;
border-color: tomato;
`;

class Shamazin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: "ORIGINAL TITLE IN SHAMAZIN PARENT COMPONENT",
            photoURL: "initial",
            photosForItem: []
        }
        
        
    }

    
    componentDidMount(){
        ProductPhotoService.getProductPhotosByItemID(10)
            .then(response => {
                console.log(response);
                console.log(response.data[0].photoURL);
                this.setState({photoURL: response.data[0].photoURL})
                this.setState({photosForItem: response.data})
            })
    }

    
    
    render(){
        const photosList = this.state.photosForItem.map(productPhoto => {
            return(
                <li>{productPhoto.photoURL}</li>
            )
        })

        

       
        return(
            <div>
                <h1>HELLO SHAMAZIN ITEM COMPONENT!!!!HELLO</h1>
                <h2>PRODUCT TITLE: {this.state.photoURL}</h2>
                
                <br/>
                
                ALL THE PRODUCT PHOTOS FOR ITEM WITH ID 3

                <ul>
                    {photosList}
                </ul>

                <Button>Styled Button</Button>
                <TomatoButton>Tomato Color Styled Button</TomatoButton>
                <ShamazinStyled.BlueButton>Blue Styled Button</ShamazinStyled.BlueButton> 
                <ShamazinStyled.BlueButton primary>Blue Styled Button with property primary</ShamazinStyled.BlueButton>                 
                <ShamazinStyled.DarkBlueButton>Dark Blue Styled Button</ShamazinStyled.DarkBlueButton>
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"/>
                <br/>
                <br/>
                <TestChildComponent
                    passedProp={this.state.title}
                />
            </div>
        )
    }
}


export default Shamazin