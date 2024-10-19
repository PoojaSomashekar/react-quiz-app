import { useCallback, useState } from "react";
import PropTypes from "prop-types";

import classes from "./Questions.module.css";
import Question from "./Question";
import SummaryResult from "./SummaryResult";

const Questions = ({ questionList }) => {
  const [userAnswer, setUserAnswer] = useState([]);
  const currentQuestionIndex = userAnswer.length;


  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, selectedAnswer];
          });
    },[]);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  const isQuizCompleted = currentQuestionIndex === 10;

  if (isQuizCompleted) {
    return <SummaryResult userAnswers={userAnswer} questionList={questionList}/>;
  }

  return (
    <>
      {questionList ? (
        <div className={classes.questions_container}>
          <header className={classes.navHeader}>
            <p>{questionList[currentQuestionIndex].category}</p>
          </header>
          <Question 
            key={currentQuestionIndex}
            questionItem={questionList[currentQuestionIndex]}
            onSelectOption = {handleSelectAnswer}
            onSkipOption = {handleSkipAnswer}
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

Questions.propTypes = {
    questionList: PropTypes.array,
};

export default Questions;
