import React from 'react';
import ShamazinService from '../../service/shamazinService';
import ProductPhotosComponent from '../ProductPhotos/productPhotos';
import TestChildComponent from "../TestChild/TestChild";
import ReviewComponent from "../Review/reviewComponent";
import './Shamazin.css';
import styled, {css} from 'styled-components';
import * as ShamazinStyled from './StyledShamazin';
import TitleComponent from '../Title/titleComponent';
import ItemSwitcherComponent from '../ItemSwitcher/itemSwitcher'
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

    componentDidUpdate(prevProps,prevState) {
        if(prevProps.match.params.itemID!==this.props.match.params.itemID) {
            ShamazinService.getItemById(this.props.match.params.itemID)
                .then(response=>{
                    this.setState({
                        itemID: this.props.match.params.itemID,
                        item: response.data
                    })
                })
        }
    }

    handler = () => {
        ShamazinService.getItemById(this.props.match.params.itemID)
            .then(response=>{
                this.setState({
                    item: response.data,
                    itemID: response.data.id
                })
            }).then(this.render());
    }
    
    componentDidMount(){
        ShamazinService.getItemById(this.state.itemID)
            .then(response=>{
                this.setState({item:response.data});
            });
            
        ShamazinService.getFamilyId(this.state.itemID)
            .then( response=>{
                this.setState({itemFamilyID: response.data});
            });
        
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
                    <TitleComponent
                        item={this.state.item}
                    />
                    <div class='col-cart'>
                        <h1>Shopping checkout</h1>
                    </div>
                </div>
                <ItemSwitcherComponent
                    itemFamilyID={this.state.itemFamilyID} handler={this.handler}
                />
                <div className="row col-12">
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