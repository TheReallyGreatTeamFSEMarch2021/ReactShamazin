import axios from 'axios'

class questionService{
    getQuestionsByItemFamily(itemID){
        return axios.get(`/api/question/getByItemFamily/${itemID}`);
    }

    getAllQuestions(){
        return axios.get(`/api/question/getAll`);
    }
}

export default new questionService();
