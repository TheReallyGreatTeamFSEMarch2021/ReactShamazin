import React from 'react';
import ReviewService from "../../service/reviewService";

class ReviewComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            itemID : props.itemID,
            reviews : []
        }
    }

    componentDidMount(){
        ReviewService.getReviewsByItemFamily(this.state.itemID)
            .then(response => {
                console.log("id: "+ this.state.itemID);
                console.log(response.data);
            })
    }

    render(){
        return(
            <div class="col-12">
                
            </div>
        );
    }
}

export default ReviewComponent;