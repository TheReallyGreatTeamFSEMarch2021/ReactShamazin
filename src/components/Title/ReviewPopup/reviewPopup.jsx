import { render } from '@testing-library/react';
import React from 'react';
import './reviewPopup.css';
import RatingStats from '../../RatingStats/ratingStats'

class ReviewPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            itemFamilyID: 0
        }
    }

    componentDidMount() {
        this.setState({
            itemFamilyID: this.props.itemFamilyID
        })
    }

    componentDidUpdate(prevProps,prevState) {
        if(this.props.itemFamilyID!=prevProps.itemFamilyID) {
            this.setState({
                itemFamilyID: this.props.itemFamilyID
            });
        }
    }

    render() {
        return(
            <div className="reviewPopupText">
                <RatingStats itemFamilyID={this.state.itemFamilyID}/>
            </div>
        );
    }
}

export default ReviewPopup;