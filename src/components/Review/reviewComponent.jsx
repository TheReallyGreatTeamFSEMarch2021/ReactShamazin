import React from 'react';
import ReviewService from "../../service/reviewService";
import "./review.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class ReviewComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            itemFamilyID : props.itemFamilyID,
            reviews : []
        }
    }

    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.itemFamilyID !== this.props.itemFamilyID){
            console.log("in update")
            ReviewService.getReviewsByItemFamily(this.props.itemFamilyID)
                .then(response => {
                    this.setState({reviews: response.data})
            });
        }
    }

    render(){
        
        const reviewList = this.state.reviews.map(review =>{
            
           // const reviewPhotos = review.
            const reviewPhotos = review.reviewPhotos.map(photo => {
                return(
                <div class="photoContainerMini">
                    <img class="reviewPhotoMini" src={photo.photoURL}/>
                </div>
                );
            });

            return(
                <div class="review">
                    <div class="review_titleSection col-7">
                        <div class="review_starRating">
                            {review.starValue}/5
                        </div>
                        <div className="review_title">
                            {review.title}
                        </div>
                    </div>

                    <div className="review_content col-9">
                        <span>{review.content}</span>
                    </div>
                    
                    <div class="review_miniPhotos col-8">
                        {reviewPhotos}
                    </div>
                    
                    <div className="review_score">
                        {review.score} people found this helpful
                    </div>
                    <div class="buttons">
                        <Link to="/Login">
                        <button class="helpful">Helpful</button>
                        </Link>
                        <Link class="report" to="/Login"> Report Abuse </Link>
                    </div>
                    
                </div>
            );

        });


        return(
            <div className="col-12">
                <h3 className="productReviews">Product Reviews</h3>
                {reviewList}
            </div>
        );
    }
}

export default ReviewComponent;