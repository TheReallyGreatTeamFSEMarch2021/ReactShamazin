import axios from 'axios';

class relatedBoughtItemService {
    getAllRelatedBoughtItems(id) {
        return axios.get(`/api/related/bought/${id}`);
    }

    getRelatedBoughtItemsByPage(id, page) {
        return axios.get(`/api/related/bought/${id}/${page}`);
    }
}

export default new relatedBoughtItemService();