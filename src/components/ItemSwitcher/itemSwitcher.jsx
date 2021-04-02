import React from 'react';
import { Router } from 'react-router';
import App from '../../App';
import ShamazinService from '../../service/shamazinService';
import {Link} from "react-router-dom";
import "./itemSwitcher.css";

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

    render() {
        const itemsList = this.state.items.map(item=>{
            return(
                <Link key={item.id} to={`/items/${item.id}`}><div className="switcherLink col-1">{item.name}</div></Link>
            );
        });
        return(
            <div className="row col-12">
                {itemsList}
            </div>
        );
    }
}

export default ItemSwitcherComponent;