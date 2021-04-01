import { render } from '@testing-library/react';
import React from 'react';
import './reviewPopup.css';
import RatingStats from '../../RatingStats/ratingStats'

class ReviewPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            show: false,
            itemFamilyID: 0
        }
    }

    componentDidUpdate(prevProps,prevState) {
        if(this.props.showPopup!=prevProps.showPopup) {
            this.setState({
                show: this.props.showPopup
            });
        }
        if(this.props.itemFamilyID!=prevProps.itemFamilyID) {
            this.setState({
                itemFamilyID: this.props.itemFamilyID
            });
        }
    }

    render() {
        return(
            <div className="reviewPopupText"><RatingStats
            itemFamilyID={this.state.itemFamilyID} 
        /></div>
        );
    }
}

export default ReviewPopup;