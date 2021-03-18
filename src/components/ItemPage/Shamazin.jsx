import React from 'react';
import TestChildComponent from "../TestChildComponent/TestChildComponent";
import ProductPhotoService from '../../service/productPhotoService';
import styled, {css} from 'styled-components';
import * as ShamazinStyled from './StyledShamazin';
import './Shamazin.css';
import ProductPhotosComponent from '../ProductPhotos/productPhotos';
import ShamazinService from '../../service/shamazinService';

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
            photosForItem: [],
            itemID: props.match.params.itemID,
            item: {}
        }
        
        
    }

    
    componentDidMount(){
        console.log("SHOUld DISPLAY ITEMID");
        console.log(this.state.itemID);
        ShamazinService.getItemById(this.state.itemID)
            .then(response=>{
                console.log("ITEM!!!!!!")
                console.log(response.data);
                this.setState({item:response.data})
            })
    }

    
    
    render(){
       
        return(
            <div>
                <h1>HELLO SHAMAZIN ITEM COMPONENT!!!! {this.state.item.name}</h1>
                <h2>PRODUCT TITLE: {this.state.photoURL}</h2>
                <h2>{this.state.itemID}</h2>
                <ProductPhotosComponent
                    itemID={this.state.itemID}
                />
                    
                <br/>
                <Button>Styled Button</Button>
                <TomatoButton>Tomato Color Styled Button</TomatoButton>
                <ShamazinStyled.BlueButton>Blue Styled Button</ShamazinStyled.BlueButton> 
                <ShamazinStyled.BlueButton secondary>Blue Styled Button with property primary</ShamazinStyled.BlueButton>                 
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