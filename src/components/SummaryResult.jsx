import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./SummaryResult.module.css";
import trophyIconImg from "../assets/trophytwo.png";

const SummaryResult = ({userAnswers, questionList}) => {
    const navigate = useNavigate();
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === questionList[index].correct_answer);
    const skippedAnswersPercentage = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctAnswersPercentage = Math.round((correctAnswers.length / userAnswers.length) * 100);
    const incorrectAnswerPercentage = 100 - skippedAnswersPercentage - correctAnswersPercentage;
    return<div className={classes.summary_container}>
    <img src={trophyIconImg} alt="Winner icon" />
    <h2>Quiz Completed!</h2>
    <div className={classes.summary_stats}>
        <p>
            <span className={classes.number}>{skippedAnswersPercentage}%</span>
            <span className={classes.text}>Skipped</span>
        </p>
        <p>
            <span className={classes.number}>{correctAnswersPercentage}%</span>
            <span className={classes.text}>Answered correctly</span>
        </p>
        <p>
            <span className={classes.number}>{incorrectAnswerPercentage}%</span>
            <span className={classes.text}>Answered incorrectly</span>
        </p>
        
    </div>
    <button onClick={() => navigate('/')}>Dashboard</button>
  </div>;
}
SummaryResult.propTypes = {
    userAnswers: PropTypes.array,
     questionList: PropTypes.array,
};
export default SummaryResult;