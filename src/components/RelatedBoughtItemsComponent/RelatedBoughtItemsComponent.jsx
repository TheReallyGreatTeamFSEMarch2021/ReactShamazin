import React from 'react';

class RelatedBoughtItemsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("The related bought items component has mounted.");
    }

    render() {
        return (
            <div>
                <div>Back Arrow</div>
                <div>Content</div>
                <div>Forward Arrow</div>
            </div>
        )
    }
}

export default RelatedBoughtItemsComponent;