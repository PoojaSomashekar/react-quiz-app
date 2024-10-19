import quizImg from "../assets/quiz.png";
import classes from "./Header.module.css";

const Header = () => {
    return <header>
        <img src={quizImg} alt="Quiz logo" />
        <h1>Level Up your IQ!</h1>
    </header>
}

export default Header;