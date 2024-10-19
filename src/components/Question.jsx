import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import OptionsList from "./OptionsList";
import QuestionTimer from "./QuestionTimer";
import classes from "./Question.module.css";

const Question = ({ questionItem, onSelectOption, onSkipOption }) => {
  const [answered, setAnswered] = useState({
    selectedOption: "",
    isCorrectAnswer: null,
  });
  const [timer, setTimer] = useState(10000);
 
  useEffect(() => {
    if (answered.selectedOption) {
      setTimer(3000);
    }
    if (answered.isCorrectAnswer !== null) {
      setTimer(3000);
    }
  }, [answered.selectedOption, answered.isCorrectAnswer]);

  const handleSelectOption = (option) => {
    setAnswered({
      selectedOption: option,
      isCorrectAnswer: null,
    });
    console.log(timer);
    setTimeout(() => {
      setAnswered({
        selectedOption: option,
        isCorrectAnswer: option === questionItem.correct_answer,
      });
      setTimeout(() => {
        onSelectOption(option);
      }, 2000);
    }, 1000);
  };
  let answerState = "";
  if (answered.selectedOption) {
    answerState = answered.isCorrectAnswer ? "correct" : "wrong";
  }
  return (
    <div className={classes.question_container}>
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answered.selectedOption === '' ? onSkipOption : null}
      />
      <h2>{questionItem.question}</h2>
      <OptionsList
        questionItem={questionItem}
        answerState={answerState}
        selectedAnswer={answered.selectedOption}
        onSelectOption={handleSelectOption}
      />
    </div>
  );
};
Question.propTypes = {
    questionItem: PropTypes.object,
    onSelectOption: PropTypes.func, 
    onSkipOption: PropTypes.func, 
};
export default Question;
