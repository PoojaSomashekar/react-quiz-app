import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import classes from "./Quiz.module.css";
import Questions from "./Questions";
import { fetchQuestionList } from "./services";

const Quiz = () => {
  const location = useLocation();
  const [questionLists, setQuestionLists] = useState();

  useEffect(() => {
    if (location.state.categoryId) {
      async function fetchData() {
        const response = await fetchQuestionList(location.state.categoryId);
        if (response) {
          setQuestionLists(response.results);
        }
      }
      fetchData();
    }
  }, [location.state.categoryId]);

  return (
    <div className={classes.quiz_container}>
      <Questions questionList={questionLists} />
    </div>
  );
};
export default Quiz;
