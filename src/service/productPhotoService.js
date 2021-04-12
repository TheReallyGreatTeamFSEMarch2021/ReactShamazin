import axios from 'axios'

class productPhotoService{
    getProductPhotoByID(id){
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/productPhotos/${id}`);
    }

    getProductPhotosByItemID(itemID){
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/productPhotosForItem/${itemID}`);
    }

    deleteProductPhotoByID(productPhotoID){
        return axios.delete(`https://shamazinapi.jaitken-projects.com/api/productPhotos/${productPhotoID}`);
    }
    // export const getCafeByFilters = filters => {
    //     return axios.post(`/api/cafes/filters`, filters)
    // };
    
    // export const updateCafe = (id, data) => {
    //     return axios.patch(`api/cafes/update/${id}`, data);
    // }



}

export default new productPhotoService();