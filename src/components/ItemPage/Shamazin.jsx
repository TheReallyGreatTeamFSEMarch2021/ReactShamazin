import React from 'react';
import ShamazinService from '../../service/shamazinService';
import ProductPhotosComponent from '../ProductPhotos/productPhotos';
import TestChildComponent from "../TestChild/TestChild";
import './Shamazin.css';
import styled, {css} from 'styled-components';
import * as ShamazinStyled from './StyledShamazin';

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
        ShamazinService.getItemById(this.state.itemID)
            .then(response=>{
                this.setState({item:response.data})
            })
    }

    
    
    render(){
       
        return(
            <div>
                <h1>Shamazin Item Component: {this.state.item.name}</h1>
                <ProductPhotosComponent
                    itemID={this.state.itemID}
                />
                
                <TestChildComponent
                    passedProp={this.state.title}
                />
            </div>
        )
    }
}


export default Shamazin;