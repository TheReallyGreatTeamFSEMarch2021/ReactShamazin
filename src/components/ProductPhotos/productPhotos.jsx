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
                this.setState({productPhotos: response.data});
                if(response.data.length>0){
                    this.setState({mainPhotoURL: response.data[0].photoURL});
                }
            });
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.itemID !== this.props.itemID){
            ProductPhotoService.getProductPhotosByItemID(this.props.itemID)
                .then(response=>{
                    this.setState({
                        productPhotos: response.data,
                    })
                    if(response.data.length>0) {
                        this.setState({
                            mainPhotoURL: response.data[0].photoURL
                        })
                    }
                })
        }
    }

    changeMainPicture(photoUrl) {
        this.setState({mainPhotoURL: photoUrl});
    }

    render() {
        const photosList = this.state.productPhotos.map(productPhoto => {
            return(
                <img key={productPhoto.id} className="galleryPhoto" src={productPhoto.photoURL} alt="" onClick={()=>this.changeMainPicture(productPhoto.photoURL)}/>
            );
        });

        return(
            <div className="productPhotoContainer">
                <div className="row col-12">
                    <div className="allPhotos col-2">{photosList}</div>
                    <div className="mainPhoto col-10"><img className="mainImg" src={this.state.mainPhotoURL} alt=""/></div>
                </div>
                
                <h3>Roll over image to zoom in.</h3>
            </div>
        )
    }
}

export default ProductPhotos;
