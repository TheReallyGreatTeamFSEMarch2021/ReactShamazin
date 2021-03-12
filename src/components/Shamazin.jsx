import React from 'react';
import TestChildComponent from "./TestChildComponent";
import ProductPhotoService from '../service/productPhotoService';




class Shamazin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: "ORIGINAL TITLE IN SHAMAZIN PARENT COMPONENT",
            photoURL: "initial",
            photosForItem: []
        }
        
    }

    
    componentDidMount(){
        ProductPhotoService.getProductPhotosByItemID(3)
            .then(response => {
                console.log(response);
                console.log(response.data[0].photoURL);
                this.setState({photoURL: response.data[0].photoURL})
                this.setState({photosForItem: response.data})
            })
    }

    
    
    render(){
        const photosList = this.state.photosForItem.map(productPhoto => {
            return(
                <li>{productPhoto.photoURL}</li>
            )
        })

       
        return(
            <div>
                HELLO SHAMAZIN ITEM COMPONENT!!!!HELLO
                PRODUCT TITLE: {this.state.photoURL}

                <br/>
                
                ALL THE PRODUCT PHOTOS FOR ITEM WITH ID 3

                <ul>
                    {photosList}
                </ul>
                   
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"/>
                <br/>
                <br/>
                <TestChildComponent
                    passedProp={this.state.title}
                />
            </div>
        )
    }
}


export default Shamazin