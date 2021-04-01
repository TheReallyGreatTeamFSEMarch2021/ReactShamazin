import axios from 'axios'

class productPhotoService{
    getProductPhotoByID(id){
        return axios.get(`/api/productPhotos/${id}`);
    }

    getProductPhotosByItemID(itemID){
        return axios.get(`/api/productPhotosForItem/${itemID}`);
    }

    deleteProductPhotoByID(productPhotoID){
        return axios.delete(`/api/productPhotos/${productPhotoID}`);
    }
    // export const getCafeByFilters = filters => {
    //     return axios.post(`/api/cafes/filters`, filters)
    // };
    
    // export const updateCafe = (id, data) => {
    //     return axios.patch(`api/cafes/update/${id}`, data);
    // }



}

export default new productPhotoService();