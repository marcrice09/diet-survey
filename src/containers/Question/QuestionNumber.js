import React from 'react';

import './Question.css';

const QuestionNumber = props => (
  <p className="question-number">Question {props.currentQuestion} of {props.totalQuestions}</p>
);


export default QuestionNumber;
