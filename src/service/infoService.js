import axios from 'axios';


 export const getInfosByItemId = (itemID) => {
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/info/getByItemId/${itemID}`);
    }
