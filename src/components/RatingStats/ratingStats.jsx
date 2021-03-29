import React from 'react';
import ReviewService from '../../service/reviewService';
import './ratingStats.scss'

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
        let reviewCount = this.state.reviews.length;
        let total = 0;
        let one = 0;
        let two = 0;
        let three = 0;
        let four = 0; 
        let five = 0;

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
        let percent5star = five/reviewCount * 100;
        let percent4star = four/reviewCount * 100;
        let percent3star = three/reviewCount * 100;
        let percent2star = two/reviewCount * 100;
        let percent1star = one/reviewCount * 100;


        return(
            <div>
                <h3>Customer Reviews</h3>
                <h4>{avgRating} out of 5</h4>
                <h4>{this.state.reviews.length} global ratings</h4>
                <div className='container'>
                    <div className="ratingsChartDiv">
                        <dl>
                            <dd className={`percentage percentage-${percent5star}`}><span className="text">5 star</span> </dd>
                            <dd className={`percentage percentage-${percent4star}`}><span className="text">4 star</span></dd>
                            <dd className={`percentage percentage-${percent3star}`}><span className="text">3 star</span></dd>
                            <dd className={`percentage percentage-${percent2star}`}><span className="text">2 star</span></dd>
                            <dd className={`percentage percentage-${percent1star}`}><span className="text">1 star</span></dd>                    
                        </dl>    
                    </div>
                    <div className='test2'>
                        <div className='test'>
                            {percent5star}%
                        </div>
                        <div className='test'>
                            {percent4star}%
                        </div>
                        <div className='test'>
                            {percent3star}%
                        </div>
                        <div className='test'>
                            {percent2star}%
                        </div>
                        <div className='test'>
                            {percent1star}%
                        </div>
                    </div>
                </div>

                

            
            
            </div>





        )
    }
}
export default RatingStats;