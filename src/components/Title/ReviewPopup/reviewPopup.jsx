import { render } from '@testing-library/react';
import React from 'react';
import './reviewPopup.css';

class ReviewPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            show: false
        }
    }

    componentDidUpdate(prevProps,prevState) {
        if(this.props.showPopup!=prevProps.showPopup) {
            this.setState({
                show: this.props.showPopup
            })
        }
    }

    render() {
        return(
            <span className="reviewPopupText">test</span>
        );
    }
}

export default ReviewPopup;