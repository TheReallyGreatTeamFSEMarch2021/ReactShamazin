import React from 'react';
import styled, {css} from 'styled-components';
import questionService from '../../service/questionService';
import shamazinService from '../../service/shamazinService';


class Question extends React.Component {
    constructor(props){
        super(props);
        this.state={
            itemFamilyID: props.itemFamilyID,
            questions : []

        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.itemFamilyID !== this.props.itemFamilyID){
            questionService.getQuestionsByItemFamily(this.props.itemFamilyID)
            .then(response =>{
                this.setState({questions: response.data})
            });
        }
    }

    render(){
        return (
            <div>
                <h1>Question Page</h1>
            </div>
        )
    }


}

export default Question;