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

    
    componentDidUpdate(prevProps, prevState){
       if(prevProps.itemFamilyID !== this.props.itemFamilyID){

       
        ReviewService.getReviewsByItemFamily(this.props.itemFamilyID)
            .then(response => {
                console.log("inside review ComponentDidMount ");
                console.log("FamilyID(ReviewComponent): "+ this.props.itemFamilyID);
                console.log(response.data);
                this.setState({reviews: response.data})
            })
        }
    }

    render(){
        return(
            <div class="col-12">
            </div>
        );
    }
}

export default ReviewComponent;