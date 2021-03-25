import axios from 'axios'

class reviewService{
    
    getReviewsByItemFamily(itemID){
        return axios.get(`/api/review/getByItemFamily/${itemID}`);
    }

    getPhotosByItemFamily(itemID){
        return axios.get(`/api/review/photos/getByItemFamily/${itemID}`)
    }
    
}

export default new reviewService();