import React from 'react';
import ReviewService from "../../service/reviewService";
import "./review.css"

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
            ReviewService.getReviewsByItemFamily(this.props.itemFamilyID)
                .then(response => {
                    console.log(response.data);
                    this.setState({reviews: response.data})
            });
        }
    }

    render(){
        const reviewList = this.state.reviews.map(review =>{

            return(
                <div class="review">
                    
                    <div class="review_titleSection">
                        <div class="review_starRating">
                            {review.starValue}/5
                        </div>
                        <div class="review_title">
                            {review.title}
                        </div>
                    </div>

                    <div class="review_content col-9">
                        <span>{review.content}</span>
                    </div>
                    <div class="review_score">
                        {review.score} people found this helpful
                    </div>
                </div>
            );

        });


        return(
            <div class="col-12">
                <h3 class="productReviews">Product Reviews</h3>
                {reviewList}
            </div>
        );
    }
}

export default ReviewComponent;