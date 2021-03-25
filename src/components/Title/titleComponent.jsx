import React from 'react';
import './titleComponent.css';

class TitleComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="col-itemInfo">
                <div className="row col-12">
                    <h1>{this.props.item.name}</h1>
                    <h1>Rating Component</h1>
                    <h3>Includes ratings icon. # Ratings</h3>
                    <h3>Includes Num answered questions</h3>
                </div>
                <div className='row col-12'>
                    <h1>Features Component</h1>
                    <h3>Includes Price, Prime Logo</h3>
                    <h3>Includes Diff Features</h3>
                </div>
            </div>
        );
    }

}

export default TitleComponent;