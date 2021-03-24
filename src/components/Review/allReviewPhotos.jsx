import React from 'react';
import ReviewService from '../../service/reviewService';
import "./review.css"

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
            ReviewService.getPhotosByItemFamily(this.props.itemFamilyID)
                .then(response => {
                    this.setState({photos: response.data})
                    console.log(this.state.photos)
                })
        }
    }

    render(){
        const reviewPhotos = this.state.photos.map(photo => {
            return(
                <div class="photoContainer">
                    <img class="reviewPhoto" src={photo.photoURL}/>
                </div>
            )
        });

        return(
            <div>
                <h3 class="customerImages">Customer images</h3>
                {reviewPhotos}
            </div>
        )
    }


}

export default AllReviewPhotos;