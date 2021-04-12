import axios from 'axios';

class ShamazinService{
    getItemById(id){
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/item/get/${id}`);
    }

    getFamilyId(id){
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/item/getFamilyId/${id}`);
    }
    getFamilyItems(familyId) {
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/item/getByFamilyId/${familyId}`);
    }
    getFamilyById(familyId) {
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/itemFamily/get/${familyId}`);
    }
    getFamilyByItemId(itemId) {
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/itemFamily/getByItemId/${itemId}`)
    }
    getFamilyRating(familyId) {
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/itemFamily/getRating/${familyId}`)
    }
}

export default new ShamazinService();
