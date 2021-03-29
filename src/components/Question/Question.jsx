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

  //   render() {
  //     const questionList = this.state.questions.map((question) => {
  //       const answers = question.answers.map((answer) => {
  //         return (
  //           <div class="question">
  //             <div class="voteBox">
  //               <div class="upVoteBtn" alt="upVoteDiv" onClick={addVote}></div>
  //               <p class="x"> {question.votes} <br /> votes{" "} </p>
  //               <div class="downVoteBtn" alt="downVoteDiv" onClick={removeVote}            ></div>
  //             </div>
  //             <div class="qNaBox">
  //               <div class="questionHorizontal">
  //                 <div id="qNaTitle">Question:</div>
  //                 <div id="question">{question.question}</div>
  //               </div>
  //               <div class="answerHorizontal">
  //                 <div id="answerTitle">Answer:</div>
  //                 <div id="answer">{answer.answer}</div>
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       });
  //       function addVote(question) {
  //         console.log("Adding a question");
  //       }

  //       function removeVote() {
  //         console.log("Removing vote");
  //       }

  //       return <div>{answers}</div>;
  //     });

  //     return <div class="row col-12">{questionList}</div>;
  //   }
  // }

  render() {
    function addVote(question) {
      console.log("Adding a question");
    }

    function removeVote() {
      console.log("Removing vote");
    }
    const questionList = this.state.questions.map((question) => {
      console.log("Grabbing a question: ", question);
      const answersForQuestion = question.answers.map((answer) => {
        console.log(
          "Grabbing answer with id",
          answer.answerId,
          "for question",
          question.questionId
        );
        return <div class="answer">{answer.answer}</div>;
      });
      return (
        <div class="question">
          <div class="voteBox">
            <div class="upVoteBtn" alt="upVoteDiv" onClick={addVote}></div>
            <p class="x">
              {question.votes} <br /> votes{" "}
            </p>
            <div
              class="downVoteBtn"
              alt="downVoteDiv"
              onClick={removeVote}
            ></div>
          </div>
          <div class="qNaBox">
            <div class="questionHorizontal">
              <div id="qNaTitle">Question:</div>
              <div id="question">{question.question}</div>
            </div>
            <div class="answerHorizontal">
              <div id="answerTitle">Answers:</div>
              <div class="row col-12">{answersForQuestion}</div>
            </div>
          </div>
        </div>
      );
    });

    return <div class="row col-12">{questionList}</div>;
  }
}

export default Question;

//
//<input type ="submit" class ="upVoteBtn" value="like" alt="upVote" onClick={addVote}></input>
//<input type ="submit" class="downVoteBtn" value="dislike" alt="downVote" onClick={removeVote}></input>
