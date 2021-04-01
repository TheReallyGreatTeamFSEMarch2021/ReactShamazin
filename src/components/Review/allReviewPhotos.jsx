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
            ReviewService.getPhotosByItemFamily(this.props.itemFamilyID)
                .then(response => {
                    this.setState({photos: response.data})
                })
        }
    }

    render(){
        return(
            <div>
                {this.renderSwitch()}
            </div>
        )
    }

    renderSwitch(){
        if(this.state.photos.length === 0){
            return(
                <div>
                    <h3 className="customerImages">Customer images</h3>
                    <div className="noImages">No customer images uploaded</div>
                </div>
            )
        }else{
            const reviewPhotos = this.state.photos.map(photo => {
                return(
                    <div className="photoContainer">
                        <img className="reviewPhoto" src={photo.photoURL} alt=""/>
                    </div>
                )
            });
    
            return(
                <div>
                    <h3 className="customerImages">Customer images</h3>
                    {reviewPhotos}
                </div>
            )

        }
    }

}

export default AllReviewPhotos;
