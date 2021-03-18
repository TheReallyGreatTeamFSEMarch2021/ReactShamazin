import React from 'react';
import IndexService from '../../service/indexService';
import {Link} from 'react-router-dom';

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: []
        }
    }

    componentDidMount(){
        IndexService.getAll()
            .then(response => {
                console.log(response.data);
                this.setState({items: response.data });
        })
    }

    render(){
        const allItems = this.state.items.map(item => {
            return(
                <div>
                    <Link to={`/items/${item.id}`}>
                        {item.name}
                    </Link>
                </div>
            )
        })

        return(
            <div>
                SHAMAZIN ITEM INDEX PAGE
                {allItems}
            </div>
        )
    }
}

export default Index;