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
            totalNumOfRelatedItems: 0,
            totalNumOfPages: 0,
        };
        
        this.displayNextPage = this.displayNextPage.bind(this);
        this.displayPreviousPage = this.displayPreviousPage.bind(this);
    }

    componentDidMount() {
        const { id } = this.state;

        relatedBoughtItemService.getAllRelatedBoughtItems(id)
            .then(response => {
                const totalNumOfRelatedItems = response.data.length;
                const relatedItems = totalNumOfRelatedItems <= 7 ? response.data : response.data.slice(0, 7);
                const totalNumOfPages = Math.ceil(totalNumOfRelatedItems / 7);

                this.setState({
                    totalNumOfRelatedItems,
                    relatedItems,
                    totalNumOfPages,
                });
            });
    }

    displayRelatedItems() {
        const { relatedItems } = this.state;

        return relatedItems.map(item => {
            return <RelatedItemDisplayComponent 
                item={item}
            />
        });
    }

    displayNextPage() {
        const { id, page, totalNumOfPages } = this.state;
        const nextPage = page >= totalNumOfPages ? 1 : page + 1;

        relatedBoughtItemService.getRelatedBoughtItemsByPage(id, nextPage)
            .then(response => {
                const relatedItems = response.data;
                const page = nextPage;
                
                this.setState({
                    relatedItems,
                    page,
                }); 
            });
    }

    displayPreviousPage() {
        const { id, page, totalNumOfPages } = this.state;
        const previousPage = page <= 1 ? totalNumOfPages : page - 1;

        relatedBoughtItemService.getRelatedBoughtItemsByPage(id, previousPage)
            .then(response => {
                const relatedItems = response.data;
                const page = previousPage;

                this.setState({
                    relatedItems,
                    page,
                });
            });
    }

    render() {
        return (
            <div className="RelatedBoughtItems">
                <div onClick={this.displayPreviousPage}>Back Arrow</div>
                {this.displayRelatedItems()}
                <div onClick={this.displayNextPage}>Forward Arrow</div>
            </div>
        )
    }
}

export default RelatedBoughtItemsComponent;