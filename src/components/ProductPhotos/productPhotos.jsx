import React from 'react';
import ProductPhotoService from '../../service/productPhotoService';
import SideExample from './SideExample';
import './productPhotos.css';
import './styles.css';




class ProductPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            mainPhotoURL: "blank",
            productPhotos: [],
            itemID: props.itemID,
            focusGalleryItemID: 0
        };
        this.changeMainPicture = this.changeMainPicture.bind(this);
    }


    componentDidMount(){
        ProductPhotoService.getProductPhotosByItemID(this.state.itemID) //this.state.itemID
            .then(response => {
                this.setState({productPhotos: response.data});
                if(response.data.length>0){
                    this.setState({mainPhotoURL: response.data[0].photoURL, focusGalleryItemID: response.data[0].id});
                }
            });
    }

    changeMainPicture(photoUrl) {
        this.setState({mainPhotoURL: photoUrl});
    }


    render() {
        const photosList = this.state.productPhotos.map(productPhoto => {
            if(productPhoto.id === this.state.focusGalleryItemID){
                return(
                    <img class="galleryPhoto focus" key={productPhoto.id} src={productPhoto.photoURL} alt="" onClick={()=>this.changeMainPicture(productPhoto.photoURL)}/>
                )
            }else{
                return (
                    <img class="galleryPhoto" key={productPhoto.id} src={productPhoto.photoURL} alt="" onClick={()=>this.changeMainPicture(productPhoto.photoURL)}/>
                );
            }      
        });

        let mainPhoto = this.state.mainPhotoURL;
        if(mainPhoto!=="blank"){
            return(
                <div class="productPhotoContainer">
                    <div class="row col-12">
                        <div class="allPhotos col-2">{photosList}</div>
                        <div class="mainPhoto col-10">
                            {/* <img className="mainImg" src={this.state.mainPhotoURL} alt=""/> */}
                            <SideExample
                                image={mainPhoto}   
                            />
                        </div>
                    </div>
                    <div class="row col-12">
                        <h5 class="productPhotosH5">Roll over image to zoom in.</h5>  
                        
                    </div>
                           
                </div>
            )
        }else{
            return(
                <div>
                    LOADING...
                </div>
            )
        }
        
    }
}



export default ProductPhotos;
