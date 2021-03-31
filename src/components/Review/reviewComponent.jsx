import React from 'react';
import ReviewService from "../../service/reviewService";
import "./review.css";
import StarRating from "../ReviewStarRating/starRating";
import { Link } from "react-router-dom";


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
            
           // const reviewPhotos = review.
            const reviewPhotos = review.reviewPhotos.map(photo => {
                return(
                <div className="photoContainerMini">
                    <img className="reviewPhotoMini" src={photo.photoURL} alt=""/>
                </div>
                );
            });

            return(
                <div className="review">
                    <div className="review_titleSection col-7">
                        <div className="review_starRating">
                            <StarRating
                                starRating={review.starValue}
                            />
                            
                        </div>
                        <div className="review_title">
                            {review.title}
                        </div>
                    </div>

                    <div className="review_content col-9">
                        <span>{review.content}</span>
                    </div>
                    
                    <div className="review_miniPhotos col-8">
                        {reviewPhotos}
                    </div>
                    
                    <div className="review_score">
                        {review.score} people found this helpful
                    </div>
                    <div className="buttons">
                        <Link to="/Login">
                        <button className="helpful">Helpful</button>
                        </Link>
                        <Link className="report" to="/Login"> Report Abuse </Link>
                    </div>
                    
                </div>
            );

        });


        return(
            <div className="col-12">
                {this.renderSwitch()}
                {reviewList}
            </div>
        );
    }

    renderSwitch(){
        
        if(this.state.reviews.length === 0){
            return(
                <div className="col-12">
                    <h3 className="productReviews">Product Reviews</h3>
                    <div>No reviews for this product</div>
                </div>
            );
        }else{
            
            const reviewList = this.state.reviews.map(review =>{
            
                // const reviewPhotos = review.
                 const reviewPhotos = review.reviewPhotos.map(photo => {
                     return(
                     <div className="photoContainerMini">
                         <img className="reviewPhotoMini" src={photo.photoURL} alt=""/>
                     </div>
                     );
                 });
     
                 return(
                     <div className="review">
                         <div className="review_titleSection col-7">
                             <div className="review_starRating">
                                 <StarRating
                                     starRating={review.starValue}
                                 />
                                 
                             </div>
                             <div className="review_title">
                                 {review.title}
                             </div>
                         </div>
     
                         <div className="review_content col-9">
                             <span>{review.content}</span>
                         </div>
                         
                         <div className="review_miniPhotos col-8">
                             {reviewPhotos}
                         </div>
                         
                         <div className="review_score">
                             {review.score} people found this helpful
                         </div>
                         <div className="buttons">
                             <Link to="/Login">
                             <button className="helpful">Helpful</button>
                             </Link>
                             <Link className="report" to="/Login"> Report Abuse </Link>
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
}

export default ReviewComponent;
