import React from 'react';
<<<<<<< HEAD
import './RelatedBoughtItems.css';
import RelatedItemDisplayComponent from './RelatedItemDisplayComponent';
import relatedBoughtItemService from '../../service/relatedBoughtItemService';
=======
>>>>>>> cff8200c17fa9c71b4d3ad283b917f08be3cfe62

class RelatedBoughtItemsComponent extends React.Component {
    constructor(props) {
        super(props);
<<<<<<< HEAD

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



    render() {
        const { relatedItems } = this.state;

        return (
            <div class="RelatedBoughtItems">
                <div>Back Arrow</div>
                {relatedItems.map(item => {
                    console.log(item);
                    return <RelatedItemDisplayComponent 
                        item={item}
                    />
                })}
=======
    }

    componentDidMount() {
        console.log("The related bought items component has mounted.");
    }

    render() {
        return (
            <div>
                <div>Back Arrow</div>
                <div>Content</div>
>>>>>>> cff8200c17fa9c71b4d3ad283b917f08be3cfe62
                <div>Forward Arrow</div>
            </div>
        )
    }
}

export default RelatedBoughtItemsComponent;