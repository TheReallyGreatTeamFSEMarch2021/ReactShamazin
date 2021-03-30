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
            itemFamilyID : 0
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
        ShamazinService.getFamilyId(this.state.itemID)
            .then( response=>{
                this.setState({itemFamilyID: response.data});
                ShamazinService.getFamilyItems(response.data)
                    .then(resp=> {
                        this.setState({
                            items: resp.data
                        })
                       // console.log(resp.data);
                    })
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
                        item={this.state.item}
                    />
                    <div class='col-cart'>
                        <h1>Shopping checkout</h1>
                    </div>
                </div>
                <ItemSwitcherComponent
                    itemFamilyID={this.state.itemFamilyID}
                />
                <div className="row col-12">
                    <h1>Related Items Component</h1>
                </div>
                <div className="row col-12">
                    <h1>Customer questions & answers</h1>
                    <QuestionComponent
                        itemFamilyID={this.state.itemFamilyID}
                        />
                </div>
                <div className="row col-12">
                    <div className="row col-ratingstats">
                        Customer Reviews
                        <h5 id="qNaH5">Ratings Statistics Table Component</h5>
                    </div>
                    <div class="row col-reviews">
                        <div class="row col-12">
                            <AllReviewPhotos
                                itemFamilyID={this.state.itemFamilyID}
                            />
                            <ReviewComponent 
                                itemFamilyID={this.state.itemFamilyID}
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