import React from 'react';
import ShamazinService from '../../service/shamazinService';

class ItemSwitcherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            items: [],
            itemFamilyId: props.itemFamilyID
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps,prevState) {
        if(prevProps.itemFamilyID !== this.props.itemFamilyID) {
            ShamazinService.getFamilyItems(this.props.itemFamilyID)
                .then(response=> {
                    this.setState({items: response.data});
                });
        }
    }
    update(itemId) {
        console.log(itemId);
    }

    render() {
        const itemsList = this.state.items.map(item=>{
            return(
                <div className="col-6" key={item.id} onClick={()=>this.update(item.id)}>{item.name}</div>
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