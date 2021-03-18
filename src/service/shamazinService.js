import axios from 'axios';

class ShamazinService{
    getItemById(id){
        return axios.get(`/api/item/get/${id}`)
    }
}

export default new ShamazinService();