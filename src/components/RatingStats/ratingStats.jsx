import React from 'react';
import ReviewService from '../../service/reviewService';

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
            oneStarCount:0
        }

        this.calculateAvgRating = this.calculateAvgRating.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.itemFamilyID !== this.props.itemFamilyID){
            ReviewService.getReviewsByItemFamily(this.props.itemFamilyID)
                .then(response => {
                    this.setState({reviews: response.data})
            });
        }
    }

    calculateAvgRating(reviewList){
        if(reviewList.length > 0){
            let total = 0;
            for(let i = 0; i < reviewList.length; i++){
                

                switch(reviewList[i].starValue){
                    case 1:
                        this.state.oneStarCount += 1;
                        break;
                    case 2:
                        this.state.twoStarCount += 1;
                        break;
                    case 3:
                        this.state.threeStarCount += 1;
                        break;
                    case 4:
                        this.state.fourStarCount += 1;
                        break;
                    case 5:
                        this.state.fiveStarCount += 1;
                        break;
                }

                total += reviewList[i].starValue;
            }
            return total/reviewList.length;
        }
    }

    render(){
        let avgRating = this.calculateAvgRating(this.state.reviews);
        let reviewCount = this.state.reviews.length;

        let fiveP = this.state.fiveStarCount/reviewCount * 100;
        let fourP = this.state.fourStarCount/reviewCount * 100;
        let threeP = this.state.threeStarCount/reviewCount * 100;
        let twoP = this.state.twoStarCount/reviewCount * 100;
        let oneP = this.state.oneStarCount/reviewCount * 100;
        return(
            <div>
                <h3>Customer Reviews</h3>
                <h4>{avgRating} out of 5</h4>
                <h4>{this.state.reviews.length} global ratings</h4>
                <h5>5 star - {fiveP}%</h5>
                <h5>4 star - {fourP}%</h5>
                <h5>3 star - {threeP}%</h5>
                <h5>2 star - {twoP}%</h5>
                <h5>1 star - {oneP}%</h5>
            </div>
        )
    }
}
export default RatingStats;