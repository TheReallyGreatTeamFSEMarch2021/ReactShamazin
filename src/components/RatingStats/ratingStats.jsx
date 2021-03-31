import React from 'react';
import ReviewService from '../../service/reviewService';
import './ratingStats.scss'
import StarRating from "../ReviewStarRating/starRating";
import { render } from 'react-dom';

class RatingStats extends React.Component{
    constructor(props){
        super(props);
        this.state={
            itemFamilyID : props.itemFamilyID,
            reviews : [],
            fiveStarCount:0,
            fourStarCount:0,
            threeStarCount:0,
            twoStarCount:0,
            oneStarCount:0,
            avg:0
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
        return(
           <div>
               {this.renderSwitch()}
           </div>
        )
    }

    //if there are 0 reveiws render just the title
    renderSwitch(){
        if(this.state.reviews.length == 0){
            return(
                <div className='container'>
                    <div className="ratingsTitle">Customer Reviews</div>
                    <div className="noReviews">No Reviews Yet</div>
                </div>
            );
        }else{
            let reviewCount = this.state.reviews.length;
            let total = 0;
            let one = 0;
            let two = 0;
            let three = 0;
            let four = 0; 
            let five = 0;

            //count stars of each review adn calculate average
            for(let i = 0; i < reviewCount; i++){
                switch(this.state.reviews[i].starValue){
                    case 1:
                        one += 1;
                        break;
                    case 2:
                        two += 1;
                        break;
                    case 3:
                        three += 1;
                        break;
                    case 4:
                        four += 1;
                        break;
                    case 5:
                        five += 1;
                        break;
                }
                total += this.state.reviews[i].starValue;
            }
            let avgRating = total/reviewCount;
            avgRating = avgRating.toFixed(1);
            let percent5star = Math.round(five/reviewCount * 100);
            let percent4star = Math.round(four/reviewCount * 100);
            let percent3star = Math.round(three/reviewCount * 100);
            let percent2star = Math.round(two/reviewCount * 100);
            let percent1star = Math.round(one/reviewCount * 100);

            return(
                <div className='container'>
                <h3 className="ratingsTitle">Customer Reviews</h3>
                <div className="avgRating">
                    <div className='starsContainer'>
                        {this.ratingsSwitch(avgRating)}
                    </div>
                    <div className='avgStars'>
                        {avgRating} out of 5
                    </div>
                </div>
                <div className='globalRatings'>{this.state.reviews.length} global ratings</div>
                <div className='graphContainer'>
                    <div className="ratingsChartDiv">
                        <dl>
                            <dd className={`percentage percentage-${percent5star}`}><span className="text">5 star</span> </dd>
                            <dd className={`percentage percentage-${percent4star}`}><span className="text">4 star</span></dd>
                            <dd className={`percentage percentage-${percent3star}`}><span className="text">3 star</span></dd>
                            <dd className={`percentage percentage-${percent2star}`}><span className="text">2 star</span></dd>
                            <dd className={`percentage percentage-${percent1star}`}><span className="text">1 star</span></dd>                    
                        </dl>    
                    </div>
                    <div className='percentageDiv'>
                        <div className='graphPercent'>
                            {percent5star}%
                        </div>
                        <div className='graphPercent'>
                            {percent4star}%
                        </div>
                        <div className='graphPercent'>
                            {percent3star}%
                        </div>
                        <div className='graphPercent'>
                            {percent2star}%
                        </div>
                        <div className='graphPercent'>
                            {percent1star}%
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }

    //renders the correct amount of stars
    ratingsSwitch(rating){
        rating = Math.round(rating);
        const star = <div className="starContainer">
                        <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                    </div>;
        const emptyStar = <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
        switch(rating){
            case 1:
                return(
                    <div>
                        {star}
                        {emptyStar}
                        {emptyStar}
                        {emptyStar}
                        {emptyStar}
                    </div>
                );
            case 2:
                return(
                    <div>
                        {star}
                        {star}
                        {emptyStar}
                        {emptyStar}
                        {emptyStar}
                    </div>
                );
            case 3:
                return(
                    <div>
                        {star}
                        {star}
                        {star}
                        {emptyStar}
                        {emptyStar}
                    </div>
                );
            case 4:
                return(
                    <div>
                        {star}
                        {star}
                        {star}
                        {star}
                        {emptyStar}
                    </div>
                );
            case 5:
                return(
                    <div>
                        {star}
                        {star}
                        {star}
                        {star}
                        {star}
                    </div>
                );
            default:
                return(
                    <div>
                        {emptyStar}
                        {emptyStar}
                        {emptyStar}
                        {emptyStar}
                        {emptyStar}
                    </div>
                );
        }
    }
}
export default RatingStats;