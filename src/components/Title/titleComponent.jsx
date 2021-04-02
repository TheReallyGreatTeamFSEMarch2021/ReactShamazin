import React from 'react';
import ReviewService from '../../service/reviewService';
import StarRating from '../ReviewStarRating/starRating';
import ReviewPopup from './ReviewPopup/reviewPopup';
import './titleComponent.css';
import InfosComponent from '../Infos/Infos';
class TitleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            rating: 0,
            reviews: [],
            showPopup: false,
            itemFamilyID: 0
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
            rating: Math.round(this.props.rating)
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
    }
    showRatings() {
        if(this.state.showPopup) this.setState({showPopup: false});
        else this.setState({showPopup: true});
        this.render();
    }

    render() {
        if(this.state.showPopup) {
            return(
                <div className="col-itemInfo">
                    <div className="row col-12">
                        <h1>{this.props.item.name}</h1>
                        <StarRating starRating={this.state.rating}/>
                        <h3 className="reviewPopup" onMouseLeave={()=>this.showRatings()}>{this.state.reviews.length} ratings
                            <ReviewPopup itemFamilyID={this.state.itemFamilyID}/>
                        </h3>
                        <h3>{this.state.reviews.length} answered questions</h3>
                    </div>
                    <div className='row col-12'>
                        <h1>Features Component</h1>
                        <h3>Includes Price, Prime Logo</h3>
                        <h3>Includes Diff Features</h3>
                    </div>
                    <div className='row col-12'>
                        <InfosComponent infos = {this.props.infos}/>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="col-itemInfo">
                    <div className="row col-12">
                        <h1>{this.props.item.name}</h1>
                        <StarRating starRating={this.state.rating}/>
                        <h3 className="reviewPopup" onMouseEnter={()=>this.showRatings()}>{this.state.reviews.length} ratings</h3>
                        <h3>{this.state.reviews.length} answered questions</h3>
                    </div>
                    <div className='row col-12'>
                        <h1>Features Component</h1>
                        <h3>Includes Price, Prime Logo</h3>
                        <h3>Includes Diff Features</h3>
                    </div>
                    <div className='row col-12'>
                        <InfosComponent infos = {this.props.infos}/>
                    </div>
                </div>
            );
        }
        
    }

}

export default TitleComponent;