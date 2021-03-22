import React from 'react';
import './RelatedBoughtItems.css';
import RelatedItemDisplayComponent from './RelatedItemDisplayComponent';
import relatedBoughtItemService from '../../service/relatedBoughtItemService';

class RelatedBoughtItemsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.itemID,
            page: 1,
            relatedItems: [],
        };
    }

    componentDidMount() {
        const { id, page } = this.state;

        relatedBoughtItemService.getRelatedBoughtItemsByPage(id, page)
            .then(response => {
                this.setState({
                    relatedItems: response.data,
                });
            });
    }

    displayRelatedItems() {
        const { relatedItems } = this.state;

        return relatedItems.map(item => {
            return <RelatedItemDisplayComponent item={item} />
        });
    }



    render() {
        const { relatedItems } = this.state;

        return (
            <div class="RelatedBoughtItems">
                <div>Back Arrow</div>
                {this.displayRelatedItems()}
                <div>Forward Arrow</div>
            </div>
        )
    }
}

export default RelatedBoughtItemsComponent;