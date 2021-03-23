import React from 'react';
import ShamazinService from '../../service/shamazinService';

class ItemSwitcherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            items: [],
            itemFamilyId: props.itemFamilyId
        }
    }

    componentDidMount() {

    }

    componendDidUpdate(prevProps,prevState) {
        if(prevProps.itemFamilyId !== this.props.itemFamilyId) {
            ShamazinService.getFamilyItems(this.props.itemFamilyId)
                .then(response=> {
                    this.setState({items: response.data});
                });
        }
    }

    render() {
        const itemsList = this.state.items.map(item=>{
            return(
                <div key={item.id}>{item.name}</div>
            );
        });
        return(
            <div className="row col-12">
                <h1>Item Switcher</h1>
                {itemsList}
            </div>
        );
    }
}

export default ItemSwitcherComponent;