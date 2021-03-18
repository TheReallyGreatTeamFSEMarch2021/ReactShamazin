import React from 'react';
import ProductPhotoService from '../../service/productPhotoService';
import './productPhotos.css';

class ProductPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            mainPhotoURL: "blank",
            productPhotos: [],
            itemID: props.itemID
        }
        this.changeMainPicture = this.changeMainPicture.bind(this);
    }

    componentDidMount(){
        ProductPhotoService.getProductPhotosByItemID(this.state.itemID) //this.state.itemID
            .then(response => {
                console.log(response);
                console.log(response.data[0].photoURL);
                this.setState({mainPhotoURL: response.data[0].photoURL});
                this.setState({productPhotos: response.data});
            });
    }

    changeMainPicture(id) {
        ProductPhotoService.getProductPhotoByID(id)
        .then(response=> {
            this.setState({mainPhotoURL: response.data.photoURL});
        });
    }

    render() {
        const photosList = this.state.productPhotos.map(productPhoto => {
            return (
                <img class="galleryPhoto" src={productPhoto.photoURL} alt="" onClick={()=>this.changeMainPicture(productPhoto.id)}/>
            );
        });

        return(
            <div class="productPhotoContainer">
                <div class="row">
                    <div class="mainPhoto col-3"><img class="mainImg" src={this.state.mainPhotoURL} alt=""/></div>
                    <div class="allPhotos col-9">{photosList}</div>
                </div>
                
                <h3>Roll over image to zoom in.</h3>
            </div>
        )
    }
}

export default ProductPhotos;
