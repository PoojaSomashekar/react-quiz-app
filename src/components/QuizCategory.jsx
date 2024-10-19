import { useNavigate } from "react-router-dom";

import { QUIZ_CATEGORY } from "./quizCategoryData";
import classes from "./QuizCategory.module.css";

const QuizCategory = () => {
  const navigation = useNavigate();

  return (
    <div className={classes.quizcategory_container}>
      <ul>
        {QUIZ_CATEGORY.map((category) => {
          return (
            <li
              key={category.id}
              onClick={() =>
                navigation("/quiz", { state: { categoryId: category.value } })
              }
            >
              <h3>{category.category}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default QuizCategory;
