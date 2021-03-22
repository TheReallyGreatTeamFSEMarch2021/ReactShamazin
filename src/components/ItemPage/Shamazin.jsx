import React from 'react';
import ShamazinService from '../../service/shamazinService';
import ProductPhotosComponent from '../ProductPhotos/productPhotos';
import TestChildComponent from "../TestChild/TestChild";
import ReviewComponent from "../Review/reviewComponent";
import './Shamazin.css';
import styled, {css} from 'styled-components';
import * as ShamazinStyled from './StyledShamazin';
// import '../../index.css';

class Shamazin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: "ORIGINAL TITLE IN SHAMAZIN PARENT COMPONENT",
            photoURL: "initial",
            photosForItem: [],
            itemID: props.match.params.itemID,
            item: {},
            itemFamilyID : 0
        }
        
    }

    
    componentDidMount(){
        ShamazinService.getItemById(this.state.itemID)
            .then(response=>{
                const itemToSet = response.data;
                ShamazinService.getFamilyId(this.state.itemID)
                    .then( response=>{
                        console.log("FamilyId(Shamazin): "+ response.data);
                        this.setState({itemFamilyID: response.data,
                                        item: itemToSet});
                    });
               // this.setState({item:response.data});
            })
        
        
        
    }

    
    
    render(){
        return(
            <div class="itemPageContainer">
                <div class="row navBar col-12">
                    <h1 class="col-12">Navbar</h1>

                </div>
                <div class="row col-12">
                    <div class='col-4'>
                        <ProductPhotosComponent
                            itemID={this.state.itemID}
                        />
                    </div>
                    <div class='col-itemInfo'>
                        <div class="row col-12">
                            <h1>{this.state.item.name}</h1>
                            <h1>Rating Component</h1>
                            <h3>Includes ratings icon. # Ratings</h3>
                            <h3>Includes Num answered questions</h3>
                        </div>
                        <div class='row col-12'>
                            <h1>Features Component</h1>
                            <h3>Includes Price, Prime Logo</h3>
                            <h3>Includes Diff Features</h3>
                        </div>
                        
                    </div>
                    <div class='col-cart'>
                        <h1>Shopping checkout</h1>
                    </div>
                </div>
                <div class="row col-12">
                    <h1>Related Items Component</h1>
                </div>
                <div class="row col-12">
                    <h1>Customer Q's and A's Component</h1>
                </div>
                <div class="row col-12">
                    <div class="row col-ratingstats">
                        Customer Reviews
                        <h1>Ratings Statistics Table Component</h1>
                    </div>
                    <div class="row col-reviews">
                        <div class="row col-12">
                            <h1>All Customer Images Component</h1>
                            <h1>Reviews Component</h1>
                            <ReviewComponent 
                                itemFamilyID={this.state.itemFamilyID}
                            />
                        </div>
                    </div>

                </div>
                <div class="row col-12">
                    <TestChildComponent
                        passedProp={this.state.title}
                    />
                </div>

                
                
            </div>
        )
    }
}


export default Shamazin;