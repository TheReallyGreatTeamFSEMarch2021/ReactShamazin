import { render } from '@testing-library/react';
import React from 'react';
import "./starRating.css";

class StarRating extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            starRating : props.starRating
        }
    }


    renderSwitch(rating){
        console.log("renderSwitch"+ rating);
        rating = Math.round(rating);
        switch(rating){
            case 1:
                return(
                    <div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                    </div>
                );
            case 2:
                return(
                    <div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                    </div>
                );
            case 3:
                return(
                    <div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                    </div>
                );
            case 4:
                return(
                    <div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                    </div>
                );
            case 5:
                return(
                    <div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                        </div>
                    </div>
                );

            default:
                return(
                    <div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                        <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
                    </div>
                );
        }
    }


    render(){
        return (
            <div>
                {this.renderSwitch(this.state.starRating)}
            </div>
        );
    }
}

export default StarRating;
