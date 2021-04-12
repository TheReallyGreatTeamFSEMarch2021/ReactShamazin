import axios from 'axios'

class reviewService{
    
    getReviewsByItemFamily(itemID){
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/review/getByItemFamily/${itemID}`);
    }

    getPhotosByItemFamily(itemID){
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/review/photos/getByItemFamily/${itemID}`)
    }
    
}

export default new reviewService();