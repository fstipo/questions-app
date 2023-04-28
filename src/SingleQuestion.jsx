import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const SingleQuestion = ({ title, info }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                <button type="button"
                    className="question-btn"
                    onClick={() => setShowAnswer(!showAnswer)}>
                    {showAnswer ? <FaMinus /> : <FaPlus />}
                </button>
            </header >
            {showAnswer && <p>{info}</p>}
        </article >
    )
}
export default SingleQuestion



// questions - app