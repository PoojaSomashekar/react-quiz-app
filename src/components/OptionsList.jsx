import { useRef } from "react";
import PropTypes from "prop-types";

import classes from "./OptionsList.module.css";

const OptionsList = ({
  questionItem,
  answerState,
  selectedAnswer,
  onSelectOption,
}) => {
  const shuffledOptions = useRef();
  if (!shuffledOptions.current) {
    shuffledOptions.current = [
      ...questionItem.incorrect_answers,
      questionItem.correct_answer,
    ];
    shuffledOptions.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul className={classes.option_container}>
      {shuffledOptions.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answerState === "correct" && isSelected) {
          cssClass = classes.correct;
        } else if (answerState === "wrong" && isSelected) {
          cssClass = classes.wrong;
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          questionItem.correct_answer === answer
        ) {
          cssClass = classes.correct;
        }
        return (
          <li
            key={answer}
            className={`${cssClass} ${answerState !== "" && classes.disabled}`}
            onClick={() => onSelectOption(answer)}
          >
            <button>{answer}</button>
          </li>
        );
      })}
    </ul>
  );
};
OptionsList.propTypes = {
    questionItem: PropTypes.object,
    answerState: PropTypes.string, 
    selectedAnswer: PropTypes.string, 
    onSelectOption: PropTypes.func, 
};
export default OptionsList;
