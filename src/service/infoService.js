import axios from 'axios';


 export const getInfosByItemId = (itemID) => {
        return axios.get(`/api/info/getByItemId/${itemID}`);
    }
