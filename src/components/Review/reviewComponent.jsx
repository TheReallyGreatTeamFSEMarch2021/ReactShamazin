import React from 'react';
import ReviewService from "../../service/reviewService";

class ReviewComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            itemFamilyID : props.itemFamilyID,
            reviews : []
        }
    }

    
    componentDidMount(){
        console.log("FamilyID: "+ this.state.itemFamilyID);
        ReviewService.getReviewsByItemFamily(this.state.itemFamilyID)
            .then(response => {
                console.log(response.data);
                this.setState({reviews: response.data})
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