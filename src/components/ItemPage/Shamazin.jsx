import React from 'react';
import ShamazinService from '../../service/shamazinService';
import ProductPhotosComponent from '../ProductPhotos/productPhotos';
import TestChildComponent from "../TestChild/TestChild";
import ReviewComponent from "../Review/reviewComponent";
import './Shamazin.css';
import styled, {css} from 'styled-components';
import * as ShamazinStyled from './StyledShamazin';
import TitleComponent from '../Title/titleComponent';
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
                this.setState({item:response.data});
            });
            
            ShamazinService.getFamilyId(this.state.itemID)
            .then( response=>{
                this.setState({itemFamilyID: response.data});
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
                    <div className='col-cart'>
                        <h1>Shopping checkout</h1>
                    </div>
                </div>
                <div className="row col-12">
                    <h1>Related Items Component</h1>
                </div>
                <div className="row col-12">
                    <h1>Customer Q's and A's Component</h1>
                </div>
                <div className="row col-12">
                    <div className="row col-ratingstats">
                        Customer Reviews
                        <h1>Ratings Statistics Table Component</h1>
                    </div>
                    <div className="row col-reviews">
                        <div className="row col-12">
                            <h1>All Customer Images Component</h1>
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