import React from 'react';
import ReviewService from '../../service/reviewService';

class AllReviewPhotos extends React.Component {
    constructor(props){
        super(props);
        this.state={
            itemFamilyID : props.itemFamilyID,
            photos: []
        }
    }


    componentDidUpdate(prevProps, prevState){
        if(prevProps.itemFamilyID !== this.props.itemFamilyID){
           console.log(this.props.itemFamilyID);
        }
    }

    render(){
        return(
            <div>Hello</div>
        )
    }


}

export default AllReviewPhotos;