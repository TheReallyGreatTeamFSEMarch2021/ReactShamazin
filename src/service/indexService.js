import axios from 'axios';



export const getAllItems = () => {
    return axios.get(`https://shamazinapi.jaitken-projects.com/api/item/getAll`);
}


