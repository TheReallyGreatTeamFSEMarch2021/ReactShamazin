import React from 'react';

class TestChildComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        //could make an ajax call and grab info from the backend
    }



    render(){
            return(
                <div>
                    <h1>HELLO TestChildComponent ITEM COMPONENT</h1>
                    <p>TestChild</p>
                    <br/><br/>
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/5E64/production/_117346142_hitler.png"/>
                    accessing passed props from parent
                    <h1>
                        {this.props.passedProp}
                    </h1>
                    TESTING
                </div>
            )
        }
}

export default TestChildComponent;