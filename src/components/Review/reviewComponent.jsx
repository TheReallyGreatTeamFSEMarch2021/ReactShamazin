import React from 'react';
import ReviewService from "../../service/reviewService";

class ReviewComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            itemId : props.itemId,
            reviews : []
        }
    }


    render(){
        return(
            <div class="col-12">
                <h1>Hello</h1>
            </div>
        );
    }
}