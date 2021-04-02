import React from 'react';
import './RelatedBoughtItems.css';
import RelatedItemDisplayComponent from './RelatedItemDisplayComponent';
import DisplayNavigationComponent from './DisplayNavigationComponent';
import relatedBoughtItemService from '../../service/relatedBoughtItemService';
import HeaderComponent from './HeaderComponent';

class RelatedBoughtItemsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.itemID,
            page: 1,
            relatedItems: [],
            totalNumOfRelatedItems: 0,
            totalNumOfPages: 0,
            shouldDisplayArrow: false,
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
                const shouldDisplayArrow = totalNumOfPages > 1;

                this.setState({
                    totalNumOfRelatedItems,
                    relatedItems,
                    totalNumOfPages,
                    shouldDisplayArrow,
                });
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
        const {
            page, 
            relatedItems,
            shouldDisplayArrow,
            totalNumOfPages,
        } = this.state;

        return (
            <React.Fragment>
                <HeaderComponent 
                    page={page}
                    totalNumOfPages={totalNumOfPages}
                />
                <div className="RelatedBoughtItems">
                    <DisplayNavigationComponent
                        direction="<"
                        handleClick={this.displayPreviousPage}
                        shouldDisplayArrow={shouldDisplayArrow}
                    />
                    <RelatedItemDisplayComponent 
                        relatedItems={relatedItems}
                    />
                    <DisplayNavigationComponent
                        direction=">"
                        handleClick={this.displayNextPage}
                        shouldDisplayArrow={shouldDisplayArrow}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default RelatedBoughtItemsComponent;