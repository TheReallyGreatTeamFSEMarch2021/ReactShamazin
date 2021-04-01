import axios from 'axios';

class ShamazinService{
    getItemById(id){
        return axios.get(`/api/item/get/${id}`);
    }

    getFamilyId(id){
        return axios.get(`/api/item/getFamilyId/${id}`);
    }
    getFamilyItems(familyId) {
        return axios.get(`/api/item/getByFamilyId/${familyId}`);
    }
    getFamilyById(familyId) {
        return axios.get(`/api/itemFamily/get/${familyId}`);
    }
    getFamilyByItemId(itemId) {
        return axios.get(`/api/itemFamily/getByItemId/${itemId}`)
    }
    getFamilyRating(familyId) {
        return axios.get(`/api/itemFamily/getRating/${familyId}`)
    }
}

export default new ShamazinService();
