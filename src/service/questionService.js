import axios from 'axios'

class questionService{
    getQuestionsByItemFamily(itemID){
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/question/getByItemFamily/${itemID}`);
    }

    getAllQuestions(){
        return axios.get(`https://shamazinapi.jaitken-projects.com/api/question/getAll`);
    }
}

export default new questionService();
