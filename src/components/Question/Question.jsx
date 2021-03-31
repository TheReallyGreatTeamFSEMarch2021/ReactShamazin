import React from "react";
import styled, { css } from "styled-components";
import questionService from "../../service/questionService";
import "./Question.css";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemFamilyID: props.itemFamilyID,
      questions: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.itemFamilyID !== this.props.itemFamilyID) {
      questionService
        .getQuestionsByItemFamily(this.props.itemFamilyID)
        .then((response) => {
          this.setState({ questions: response.data });
        });
    }
  }
  addVote(question) {

    question.votes = question.votes + 1;
    if (question.votes==1){
        document.getElementById(question.questionId).innerText =
      question.votes + "\nvote";
    }else{
        document.getElementById(question.questionId).innerText =
      question.votes + "\nvotes";
    }
    document.getElementById(
      "upVoteId" + question.questionId
    ).style.pointerEvents = "none";

    document.getElementById(
      "upVoteId" + question.questionId
    ).style.borderBottom = "15px solid gray";

    document.getElementById(
      "downVoteId" + question.questionId
    ).style.pointerEvents = "auto";

    document.getElementById(
      "downVoteId" + question.questionId
    ).style.borderTop = "15px solid black";

    document.getElementsByClassName("upVoteBtn::hover").style =
      "15px solid orange";
  }

  removeVote(question) {
    
    question.votes = question.votes - 1;
    if (question.votes==1){
        document.getElementById(question.questionId).innerText =
      question.votes + "\nvote";
    }else{
        document.getElementById(question.questionId).innerText =
      question.votes + "\nvotes";
    }

    document.getElementById(
      "downVoteId" + question.questionId
    ).style.pointerEvents = "none";

    document.getElementById(
      "downVoteId" + question.questionId
    ).style.borderTop = "15px solid gray";

    document.getElementById(
      "upVoteId" + question.questionId
    ).style.pointerEvents = "auto";

    document.getElementById(
      "upVoteId" + question.questionId
    ).style.borderBottom = "15px solid black";
  }

  convertDate(dateString) {
    let year = dateString.substring(0, 4);
    let month = dateString.substring(5, 7);
    if (month[0] == 0) {
      month = month[1];
    }
    let day = dateString.substring(8, 10);
    month = this.monthName(month);

    let newdate = month + " " + day + ", " + year;
    return newdate;
  }

  monthName(mon) {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][mon - 1];
  }

  render() {
    const questionList = this.state.questions.map((question) => {
      const answersForQuestion = question.answers.map((answer) => {
        let date = this.convertDate(answer.date);
        
        return (
          <div class="answer">
            {answer.answer} 
            <p class="answerDate">{date}</p>
          </div>
        );
      });
      let textVotes = "votes"
      if(question.votes === 1){textVotes="vote"}
      return (
        <div class="question">
          <div class="voteBox">
            <div
              class="upVoteBtn"
              id={"upVoteId" + question.questionId}
              alt="upVoteDiv"
              onClick={() => this.addVote(question)}
            ></div>
            <p class="x" id={question.questionId}>
              {question.votes}<br/>{textVotes}
            </p>
            <div
              class="downVoteBtn"
              id={"downVoteId" + question.questionId}
              alt="downVoteDiv"
              onClick={() => this.removeVote(question)}
            ></div>
          </div>
          <div class="qNaBox">
            <div class="questionHorizontal">
              <div id="qNaTitle">Question:</div>
              <div id="question">{question.question}</div>
            </div>
            <div class="answerHorizontal">
              <div id="answerTitle">Answers:</div>
              <div id="answers">{answersForQuestion}</div>
            </div>
          </div>
        </div>
      );
    });

    return <div class="row col-12">{questionList}</div>;
  }
}

export default Question;
