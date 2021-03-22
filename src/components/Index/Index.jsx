import React from 'react';
import {getAllItems} from '../../service/indexService';
import {Link} from 'react-router-dom';

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: []
        }
    }

    componentDidMount(){
        getAllItems()
            .then(response => {
                this.setState({items: response.data });
        })
    }

    render(){
        const allItems = this.state.items.length>0 ? this.state.items.map(item => {
                return(
                    <div>
                        <Link to={`/items/${item.id}`}>
                            {item.name}
                        </Link>
                    </div>
                )
            })
        : <div>No items</div>;
        

        return(
            <div>
                SHAMAZIN ITEM INDEX PAGE
                {allItems}
            </div>
        )
    }
}

export default Index;