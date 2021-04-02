import React from 'react';

class FeaturesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            properties: []
        }
    }

    componentDidMount() {
        this.setState({
            properties: this.props.properties
        })
    }

    componentDidUpdate(prevProps,prevState) {
        if(this.props.properties!=prevProps.properties) {
            this.setState({
                properties: this.props.properties
            })
        }
    }

    render() {
        if(!this.state.properties) return(<div></div>);
        const featuresList = this.state.properties.map(property => {
           return( <li>{property.name}: {property.value}</li>);
        })
        return(
            <ul>{featuresList}</ul>
        );
    }


}

export default FeaturesComponent;