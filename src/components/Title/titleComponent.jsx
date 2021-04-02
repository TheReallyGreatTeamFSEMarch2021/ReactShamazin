import React from 'react';
import ReviewService from '../../service/reviewService';
import StarRating from '../ReviewStarRating/starRating';
import ReviewPopup from './ReviewPopup/reviewPopup';
import './titleComponent.css';
import InfosComponent from '../Infos/Infos';
import FeaturesComponent from './FeaturesComponent/featuresComponent';
class TitleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            rating: 0,
            reviews: [],
            showPopup: false,
            itemFamilyID: 0,
            item: this.props.item
        }
        this.showRatings=this.showRatings.bind(this);
    }

    componentDidMount() {
        ReviewService.getReviewsByItemFamily(this.props.itemFamilyID)
            .then(response=>{
                this.setState({
                    reviews: response.data
                })
            })
        this.setState({
            rating: Math.round(this.props.rating),
            item: this.props.item
        });
    }
    componentDidUpdate(prevProps,prevState) {
        if(this.props.rating!=prevProps.rating) {
            this.setState({
                rating: Math.round(this.props.rating)
            });
        }
        if(this.props.itemFamilyID!=prevProps.itemFamilyID) {
            ReviewService.getReviewsByItemFamily(this.props.itemFamilyID)
            .then(response=>{
                this.setState({
                    reviews: response.data
                })
            })
            this.setState({
                itemFamilyID: this.props.itemFamilyID
            })
        }
        if(this.props.item != prevProps.item) {
            this.setState({
                item: this.props.item
            });
        }
    }
    showRatings() {
        if(this.state.showPopup) this.setState({showPopup: false});
        else this.setState({showPopup: true});
        this.render();
    }

    render() {
        console.log(this.state.item);
        if(this.state.item.primeEligible) {
            return(
                <div className="col-itemInfo">
                    <div className="row col-12">
                        <h1>{this.props.item.name}</h1>
                        <StarRating starRating={this.state.rating}/>
                        <h3 className="reviewPopup" onClick={()=>this.showRatings()}>{this.state.reviews.length} ratings
                            <ReviewPopup showPopup={this.state.showPopup} itemFamilyID={this.state.itemFamilyID}/>
                        </h3>
                        <h3>{this.state.reviews.length} answered questions</h3>
                    </div>
                    <div className='row col-12'>
                        <h3>Price: ${this.state.item.price}</h3> <img className="primeTitleLogo" src="public/prime_logo.png" alt=""/>
                        <FeaturesComponent properties={this.state.item.properties}/>
                    </div>
                    <div className='row col-12'>
                        <InfosComponent infos = {this.props.infos}/>
                    </div>
                </div>
            );
        }
        else return(
            <div className="col-itemInfo">
                <div className="row col-12">
                    <h1>{this.props.item.name}</h1>
                    <StarRating starRating={this.state.rating}/>
                    <h3 className="reviewPopup" onClick={()=>this.showRatings()}>{this.state.reviews.length} ratings
                        <ReviewPopup showPopup={this.state.showPopup} itemFamilyID={this.state.itemFamilyID}/>
                    </h3>
                    <h3>{this.state.reviews.length} answered questions</h3>
                </div>
                <div className='row col-12'>
                    <h3>Price: ${this.state.item.price}</h3>
                    <FeaturesComponent properties={this.state.item.properties}/>
                </div>
                <div className='row col-12'>
                    <InfosComponent infos = {this.props.infos}/>
                </div>
            </div>
        );
        
    }

}

export default TitleComponent;