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
        rating = Math.round(rating);
        const star = <div className="starContainer">
                        <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/singleStar.png" alt=""/>
                    </div>;
        const emptyStar = <div className="starContainer">
                            <img className="starPhoto" src="https://shamazin.s3.amazonaws.com/emptyStar.png" alt=""/>
                        </div>
        switch(rating){
            case 1:
                return(
                    <div>
                        {star}
                        {emptyStar}
                        {emptyStar}
                        {emptyStar}
                        {emptyStar}
                    </div>
                );
            case 2:
                return(
                    <div>
                        {star}
                        {star}
                        {emptyStar}
                        {emptyStar}
                        {emptyStar}
                    </div>
                );
            case 3:
                return(
                    <div>
                        {star}
                        {star}
                        {star}
                        {emptyStar}
                        {emptyStar}
                    </div>
                );
            case 4:
                return(
                    <div>
                        {star}
                        {star}
                        {star}
                        {star}
                        {emptyStar}
                    </div>
                );
            case 5:
                return(
                    <div>
                        {star}
                        {star}
                        {star}
                        {star}
                        {star}
                    </div>
                );
            default:
                return(
                    <div>
                        {emptyStar}
                        {emptyStar}
                        {emptyStar}
                        {emptyStar}
                        {emptyStar}
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
