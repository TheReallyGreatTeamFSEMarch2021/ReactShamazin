import React from 'react';
import { Router } from 'react-router';
import App from '../../App';
import ShamazinService from '../../service/shamazinService';
import {Link} from "react-router-dom"

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
    update() {
        this.props.handler();
    }

    render() {
        const itemsList = this.state.items.map(item=>{
            return(
                <Link key={item.id} to={`/items/${item.id}`}><div className="col-6" onClick={()=>this.update()}>{item.name}</div></Link>
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