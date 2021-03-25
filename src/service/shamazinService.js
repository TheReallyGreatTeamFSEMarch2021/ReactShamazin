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
}

export default new ShamazinService();
