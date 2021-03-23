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
                    this.setState({reviews: response.data})
            });
        }
    }

    render(){
        const reviewList = this.state.reviews.map(review =>{

            return(
                <div key={review.id} className="review">
                    
                    <div className="review_titleSection">
                        <div className="review_starRating">
                            {review.starValue}/5
                        </div>
                        <div className="review_title">
                            {review.title}
                        </div>
                    </div>

                    <div className="review_content col-9">
                        <span>{review.content}</span>
                    </div>
                    <div className="review_score">
                        {review.score} people found this helpful
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