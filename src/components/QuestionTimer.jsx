import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import   "./QuestionTimer.module.css";

const QuestionTimer = ({timeout, onTimeout}) => {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);
   
    useEffect(() => {
       const timer = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100)
        return () => {
            clearInterval(timer);
        };
    }, []);
    
    return <progress max={timeout} value={remainingTime} />;
};
QuestionTimer.propTypes = {
    timeout: PropTypes.number,
    onTimeout: PropTypes.func, 
};
export default QuestionTimer;