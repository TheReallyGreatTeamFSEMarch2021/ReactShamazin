import axios from 'axios';



export const getAllItems = () => {
    return axios.get(`/api/item/getAll`);
}


