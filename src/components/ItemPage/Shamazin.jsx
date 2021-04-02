import React from 'react';
import ShamazinService from '../../service/shamazinService';
import ProductPhotosComponent from '../ProductPhotos/productPhotos';
import TestChildComponent from "../TestChild/TestChild";
import ReviewComponent from "../Review/reviewComponent";
import './Shamazin.css';
import styled, {css} from 'styled-components';
import * as ShamazinStyled from './StyledShamazin';
import {getInfosByItemId} from '../../service/infoService';
import TitleComponent from '../Title/titleComponent';
import ItemSwitcherComponent from '../ItemSwitcher/itemSwitcher'
import QuestionComponent from "../Question/Question";
import AllReviewPhotos from '../Review/allReviewPhotos';
import RelatedBoughtItemsComponent from '../RelatedBoughtItemsComponent/RelatedBoughtItemsComponent';
import RatingStats from '../RatingStats/ratingStats';
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
            items: [],
            infos: [],
            itemFamily: {},
            rating: 0
        }
        
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevProps.match.params.itemID!==this.props.match.params.itemID) {
            for(let i of this.state.items) {
                if(i.id == this.props.match.params.itemID) {
                    this.setState({
                        itemID: this.props.match.params.itemID,
                        item: i
                    })
                }
            }
        }
    }
    
    componentDidMount(){
        ShamazinService.getItemById(this.state.itemID)
            .then(response=>{
                this.setState({item:response.data})
        });
        getInfosByItemId(this.state.itemID)
            .then(response=> {
                this.setState({infos:response.data})
        });  
        ShamazinService.getFamilyByItemId(this.state.itemID)
            .then( response=>{
                this.setState({
                    itemFamily: response.data,
                    items: response.data.items
                });
                ShamazinService.getFamilyRating(response.data.id)
                    .then(resp=>{
                        this.setState({

                            rating: resp.data
                        });
                        
                    });
              
            });
    }
    
    
    render(){
        return(
            <div className="itemPageContainer">
                <div className="row navBar col-12">
                    <h1 className="col-12">Navbar</h1>

                </div>
                <div className="row col-12">
                    <div className='col-4'>
                        <ProductPhotosComponent
                            itemID={this.state.itemID}
                        />
                    </div>
                    
                    <TitleComponent
                        infos={this.state.infos}
                        item={this.state.item} itemFamilyID={this.state.itemFamily.id} rating={this.state.rating}
                    />
                    
                    
                   
                    <div class='col-cart'>
                        <h1>Shopping checkout</h1>
                    </div>
                </div>
                <ItemSwitcherComponent
                    itemFamilyID={this.state.itemFamily.id}
                />
                <div className="row col-12">
                    <RelatedBoughtItemsComponent 
                        itemID={this.state.itemID}
                    />
                </div>
                <div className="row col-12">

                    <h1>Customer questions &amp; answers</h1>
                    <QuestionComponent
                        itemFamilyID={this.state.itemFamily.id}
                        />
                </div>
                <div className="row col-12">
                    <div className="row col-ratingstats">
                        <RatingStats
                            itemFamilyID={this.state.itemFamily.id} 
                        />
                    </div>
                    <div class="row col-reviews">
                        <div class="row col-12">
                            <AllReviewPhotos
                                itemFamilyID={this.state.itemFamily.id}
                            />
                            <ReviewComponent 
                                itemFamilyID={this.state.itemFamily.id}
                            />
                        </div>
                    </div>

                </div>
                <div className="row col-12">
                    <TestChildComponent
                        passedProp={this.state.title}
                    />
                </div>

                
                
            </div>
        )
    }
}


export default Shamazin;