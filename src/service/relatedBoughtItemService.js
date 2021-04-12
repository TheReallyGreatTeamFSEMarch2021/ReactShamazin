import axios from 'axios';

class relatedBoughtItemService {
    getAllRelatedBoughtItems(id) {
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/related/bought/${id}`);
    }

    getRelatedBoughtItemsByPage(id, page) {
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/related/bought/${id}/${page}`);
    }
}

export default new relatedBoughtItemService();