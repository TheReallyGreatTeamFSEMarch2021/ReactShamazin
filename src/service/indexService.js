import axios from 'axios';


class IndexService{
    getAll(){
        return axios.get(`/api/item/getAll`);
    }
}

export default new IndexService();